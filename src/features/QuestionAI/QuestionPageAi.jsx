import React, { useState } from "react";
import axios from "axios";

/* ✅ Subject Code → Subject Name Map (ONLY SOURCE) */
const subjectMap = {
    UCC1A: "Fundamentals of Digital Computers",
    URC1A: "Mathematics I",
    UCC2A: "Programming in C",
    URC2A: "Mathematics II",
    UCC3A: "Programming in C++ & Data Structures",
    UCC3B: "Microprocessors & Applications",
    UCC3C: "Numerical & Statistical Methods",
    UNC3A: "Financial Accounting",
    UCC4A: "Programming in Java",
    UCC4B: "Operating System",
    UCC4C: "Computer Graphics",
    UNC4A: "Cost & Management Accounting",
    UCC5A: "Database Management System",
    UCC5B: "Software Engineering",
    UCC5C: "Resources Management Techniques",
    UEC5A: "Visual Programming",
    UES5A: "Environmental Studies",
    UCC6A: "Web Technology",
    UCC6B: "Data Communication & Networking",
    UCC6C: "Software Testing",
    UEC6A: "Multimedia Systems",
    UVE6A: "Value Education",
};

export default function QuestionPageAi() {
    const [subjectCode, setSubjectCode] = useState("UCC6A");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [processingState, setProcessingState] = useState(null);
    const [logs, setLogs] = useState([]);
    const [viewStateData, setViewStateData] = useState(null);
    const [showAiPreview, setShowAiPreview] = useState(false);


    const subjectName = subjectMap[subjectCode] || "Unknown Subject";

    const addLog = (message, type = "info") => {
        setLogs((prev) => [
            ...prev,
            { message, type, time: new Date().toLocaleTimeString() },
        ]);
    };

    const fetchQuestionPapers = async (e) => {
        e.preventDefault();
        setLoading(true);
        setProcessingState("searching");
        setLogs([]);
        setResults([]);
        setViewStateData(null);

        try {
            addLog("Connecting to server...");

            // Direct GET to the backend API which handles the scraping
            const searchResponse = await axios.get(
                `https://qp-backend.vercel.app/api/search?subject=${subjectCode}`,
                { responseType: "text" }
            );

            const parser = new DOMParser();
            const resultDoc = parser.parseFromString(
                searchResponse.data,
                "text/html"
            );

            // Extract ViewState for subsequent downloads
            const vs = resultDoc.getElementById("__VIEWSTATE")?.value;
            const vsg = resultDoc.getElementById("__VIEWSTATEGENERATOR")?.value;
            const ev = resultDoc.getElementById("__EVENTVALIDATION")?.value;

            setViewStateData({
                __VIEWSTATE: vs,
                __VIEWSTATEGENERATOR: vsg,
                __EVENTVALIDATION: ev,
            });

            const table = resultDoc.getElementById("GrdView");
            if (!table) throw new Error("No results found or invalid subject code.");

            const rows = Array.from(table.querySelectorAll("tr")).slice(1);

            const parsed = rows
                .map((row, index) => {
                    const cells = row.querySelectorAll("td");
                    const btn = row.querySelector('input[type="image"]');
                    if (cells.length < 3) return null;

                    return {
                        id: index,
                        slNo: cells[0].innerText.trim(),
                        monthYear: cells[2].innerText.trim(),
                        downloadBtnName: btn?.name,
                    };
                })
                .filter(Boolean);

            if (parsed.length === 0) throw new Error("No papers found for this subject.");

            setResults(parsed);
            addLog(`Found ${parsed.length} papers.`, "success");
        } catch (err) {
            console.error(err);
            addLog(err.message || "Failed to fetch papers", "error");
        } finally {
            setLoading(false);
            setProcessingState(null);
        }
    };

    const downloadPaper = async (item) => {
        try {
            addLog(`Downloading ${item.monthYear}...`);

            const formData = new URLSearchParams();
            // We must pass the ViewState captured from the search result
            if (viewStateData) {
                Object.entries(viewStateData).forEach(([k, v]) =>
                    v && formData.append(k, v)
                );
            }
            formData.append("Txtsbcd", subjectCode);
            formData.append(item.downloadBtnName + ".x", "10");
            formData.append(item.downloadBtnName + ".y", "10");

            const res = await axios.post(
                "https://qp-backend.vercel.app/api/download",
                formData,
                { responseType: "blob" }
            );

            const url = URL.createObjectURL(res.data);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${item.monthYear}_${subjectCode}.pdf`;
            link.click();
            URL.revokeObjectURL(url);

            addLog(`Downloaded ${item.monthYear}`, "success");
        } catch (error) {
            console.error(error);
            addLog("Download failed.", "error");
        }
    };

    const downloadAll = async () => {
        if (!viewStateData) return;
        setLoading(true);
        setProcessingState('downloading');

        addLog(`Initiating bulk download (ZIP) from server...`);

        try {
            const formData = new URLSearchParams();
            formData.append('__EVENTTARGET', '');
            formData.append('__EVENTARGUMENT', '');
            formData.append('__VIEWSTATE', viewStateData.__VIEWSTATE);
            formData.append('__VIEWSTATEGENERATOR', viewStateData.__VIEWSTATEGENERATOR);
            if (viewStateData.__EVENTVALIDATION) formData.append('__EVENTVALIDATION', viewStateData.__EVENTVALIDATION);
            formData.append('__SCROLLPOSITIONX', '0');
            formData.append('__SCROLLPOSITIONY', '0');
            formData.append('HidFldDegree', 'IDE');
            formData.append('Txtsbcd', subjectCode);
            formData.append('CmdDown', 'Download');

            const response = await axios.post('https://qp-backend.vercel.app/api/download', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                responseType: 'blob'
            });

            const type = response.data.type;
            if (type !== 'application/zip' && type !== 'application/x-zip-compressed' && type !== 'application/octet-stream') {
                try {
                    const text = await response.data.text();
                    if (text.length < 1000) {
                        throw new Error('Server returned an error instead of a ZIP file.');
                    }
                } catch (e) {
                    // ignore
                }
            }

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/zip' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${subjectCode}_All_Papers.zip`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            addLog("Batch download (ZIP) complete.", 'success');

        } catch (err) {
            console.error(err);
            addLog(`Batch download failed: ${err.message}`, 'error');
        } finally {
            setLoading(false);
            setProcessingState(null);
        }
    };
    return (
        <div className="w-full pt-24 px-4">
            <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-xl p-8">
                <p className="text-sm text-gray-500 uppercase tracking-wide text-center">
                    Question Paper Search Tool
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
                    Previous Year Question Papers
                </h1>
                <p className="text-gray-600 text-center">
                    Find and review past exam question papers easily
                </p>

                <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-xs text-yellow-800 text-center">
                    Disclaimer: This is an independent student-support tool and is{" "}
                    <strong>not officially affiliated</strong> with any university or
                    educational institution.
                </div>

                <div className="my-8 border-t" />

                <form onSubmit={fetchQuestionPapers} className="flex gap-4 mb-6">
                    <input
                        value={subjectCode}
                        onChange={(e) =>
                            setSubjectCode(e.target.value.toUpperCase())
                        }
                        className="flex-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        placeholder="Example: UCC6A"
                        disabled={loading}
                    />
                    <button
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 rounded-lg font-semibold"
                    >
                        {loading ? "..." : "Search"}
                    </button>
                </form>

                {!loading && results.length === 0 && (
                    <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
                        <p className="text-sm font-medium text-slate-700">
                            Question papers are currently not available
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                            Please try again later or check the subject code.
                        </p>
                    </div>
                )}


                {results.length > 0 && (
                    <>
                        {/* SUBJECT + ZIP BUTTON */}
                        <div className="flex items-end justify-between mb-4">
                            <div>
                                <p className="text-sm text-slate-500">Subject</p>
                                <p className="font-semibold text-slate-800">
                                    {subjectCode} – {subjectName}
                                </p>
                            </div>

                            <button
                                onClick={downloadAll}

                                className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 "
                            >
                                📦 Download All as ZIP
                            </button>
                            {/* DOWNLOAD ALL */}

                        </div>

                        {/* TWO COLUMN LAYOUT */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* LEFT TABLE */}
                            <div className="md:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm">

                                {/* DESKTOP TABLE */}
                                <div className="hidden md:block p-4">
                                    <table className="w-full text-sm table-fixed">
                                        <thead>
                                            <tr className="border-b text-slate-400">
                                                <th className="w-1/3 px-4 py-3 text-left font-medium">
                                                    S.No
                                                </th>
                                                <th className="w-1/3 px-4 py-3 text-left font-medium">
                                                    Month & Year
                                                </th>
                                                <th className="w-1/3 px-4 py-3 text-center font-medium">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {results.map((item) => (
                                                <tr
                                                    key={item.id}
                                                    className="border-b last:border-b-0 hover:bg-slate-50 transition"
                                                >
                                                    <td className="px-4 py-3">
                                                        {item.slNo}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {item.monthYear}
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        <button
                                                            onClick={() => downloadPaper(item)}
                                                            className="rounded-md bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100"
                                                        >
                                                            Download
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* MOBILE CARD LIST */}
                                <div className="md:hidden divide-y">
                                    {results.map((item) => (
                                        <div key={item.id} className="p-4 flex items-center justify-between">
                                            <div>

                                                <p className="text-sm font-medium text-slate-800">
                                                    {item.monthYear}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => downloadPaper(item)}
                                                className="rounded-md bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600"
                                            >
                                                Download
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT PANEL */}
                            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm overflow-hidden">

                                {/* Header */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold tracking-wide text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                                            AI ASSISTED
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            Beta
                                        </span>
                                    </div>

                                    {/* Document Image + Blur Layer */}
                                    <div className="relative rounded-xl border border-slate-200 bg-slate-50 h-[400px] overflow-hidden flex items-center justify-center">

                                        {/* Background document icon */}
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                            alt="Document preview"
                                            className="absolute inset-0 m-auto w-24 opacity-15 rounded-xl"
                                        />

                                        {/* Blurred content wrapper (FULL FIT) */}
                                        <div
                                            className={`absolute inset-0 flex flex-col rounded-xl items-center justify-center text-center px-6 transition-all duration-300 ${showAiPreview ? "backdrop-blur-0" : "backdrop-blur-sm"
                                                }`}
                                        >
                                            <p
                                                className={`text-sm font-semibold text-slate-800 mb-1 transition ${showAiPreview ? "blur-0" : "blur-sm"
                                                    }`}
                                            >
                                                AI Generated Assistance
                                            </p>

                                            <p
                                                className={`text-xs text-slate-500 leading-relaxed transition ${showAiPreview ? "blur-0" : "blur-sm"
                                                    }`}
                                            >
                                                Our AI helps analyze and organize available question papers.
                                                Bulk download and smart insights will be enabled soon.
                                            </p>

                                            {!showAiPreview && (
                                                <p className="mt-3 text-xs font-medium text-slate-600">
                                                    Click download to preview AI insights
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                </div>

                                {/* CTA */}
                                <button
                                    type="button"
                                    onClick={() => setShowAiPreview(true)}
                                    className="mt-6 w-full rounded-xl bg-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-300 transition"
                                >
                                    Download (Coming Soon)
                                </button>
                            </div>

                        </div>
                    </>
                )}

                <div className="mt-10 text-center text-xs text-gray-400">
                    This platform is for educational assistance only · Not an
                    official university service
                </div>
            </div>
        </div>
    );
}





import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { UniversityService, AiService } from '../../services/qpService';

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


    const [downloadingId, setDownloadingId] = useState(null);

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

            // Use UniversityService for search
            const htmlData = await UniversityService.search(subjectCode);

            const parser = new DOMParser();
            const resultDoc = parser.parseFromString(htmlData, "text/html");

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
            setDownloadingId(item.id);
            addLog(`Downloading ${item.monthYear}...`);

            const formData = new URLSearchParams();
            if (viewStateData) {
                Object.entries(viewStateData).forEach(([k, v]) =>
                    v && formData.append(k, v)
                );
            }
            formData.append("Txtsbcd", subjectCode);
            formData.append(item.downloadBtnName + ".x", "10");
            formData.append(item.downloadBtnName + ".y", "10");

            // Use UniversityService for download
            const blob = await UniversityService.downloadPaper(formData);

            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${item.monthYear}_${subjectCode}.pdf`;
            link.click();
            URL.revokeObjectURL(url);

            addLog(`Downloaded ${item.monthYear}`, "success");
        } catch (error) {
            console.error(error);
            addLog("Download failed.", "error");
        } finally {
            setDownloadingId(null);
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

            // Use UniversityService for bulk download
            const { data, type } = await UniversityService.downloadBulk(formData);

            if (type !== 'application/zip' && type !== 'application/x-zip-compressed' && type !== 'application/octet-stream') {
                try {
                    const text = await data.text();
                    if (text.length < 1000) {
                        throw new Error('Server returned an error instead of a ZIP file.');
                    }
                } catch (e) {
                    // ignore
                }
            }

            const url = window.URL.createObjectURL(new Blob([data], { type: 'application/zip' }));
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







    /* --- AI INSIGHTS --- */
    const [aiLoading, setAiLoading] = useState(false);

    const handleAiDownload = async () => {
        setAiLoading(true);
        addLog(`Generating AI Insights for ${subjectCode}...`);
        try {
            const blob = await AiService.downloadInsight(subjectCode);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${subjectCode}_AI_Insight.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            addLog("AI Insights downloaded successfully.", "success");
        } catch (error) {
            console.error(error);
            addLog(error.message, "error");
        } finally {
            setAiLoading(false);
        }
    };
    return (
        <div className="w-full pt-24 px-4">
            <Toaster position="top-right" />
            <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-xl p-8">
                <p className="text-sm text-gray-500 uppercase tracking-wide text-center">
                    Question Paper Search Tool
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
                    Previous Year Question Papers
                </h1>



                {/* --- UNIVERSITY ARCHIVE --- */}
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-gray-600 text-center mt-4">
                        Find and review past exam question papers easily from the official portal.
                    </p>

                    <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-xs text-yellow-800 text-center">
                        Disclaimer: This is an independent student-support tool.
                    </div>

                    <div className="my-8 border-t" />

                    <form onSubmit={fetchQuestionPapers} className="flex gap-4 mb-6">
                        <input
                            value={subjectCode}
                            onChange={(e) => setSubjectCode(e.target.value.toUpperCase())}
                            className="flex-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                            placeholder="Example: UCC6A"
                            disabled={loading && processingState === 'searching'}
                        />
                        <button
                            disabled={loading && processingState === 'searching'}
                            className="bg-blue-600 text-white px-6 rounded-lg font-semibold disabled:bg-blue-400"
                        >
                            {loading && processingState === 'searching' ? "Searching..." : "Search"}
                        </button>
                    </form>

                    {loading && processingState === 'searching' && (
                        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center animate-pulse">
                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                            <p className="mt-4 text-sm font-medium text-blue-800">
                                Fetching data, please wait...
                            </p>
                        </div>
                    )}

                    {!loading && results.length === 0 && !processingState && (
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
                            <div className="flex items-end justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500">Subject</p>
                                    <p className="font-semibold text-slate-800">
                                        {subjectCode} – {subjectName}
                                    </p>
                                </div>
                                <button
                                    onClick={downloadAll}
                                    disabled={loading && processingState === 'downloading'}
                                    className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 disabled:opacity-50"
                                >
                                    {loading && processingState === 'downloading' ? '📦 Downloading ZIP...' : '📦 Download All as ZIP'}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="md:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm">
                                    <div className="p-4">
                                        <table className="w-full text-sm table-fixed">
                                            <thead>
                                                <tr className="border-b text-slate-400">
                                                    <th className="w-1/3 px-4 py-3 text-left font-medium">S.No</th>
                                                    <th className="w-1/3 px-4 py-3 text-left font-medium">Month & Year</th>
                                                    <th className="w-1/3 px-4 py-3 text-center font-medium">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {results.map((item) => (
                                                    <tr key={item.id} className="border-b last:border-b-0 hover:bg-slate-50 transition">
                                                        <td className="px-4 py-3">{item.slNo}</td>
                                                        <td className="px-4 py-3">{item.monthYear}</td>
                                                        <td className="px-4 py-3 text-center">
                                                            <button
                                                                onClick={() => downloadPaper(item)}
                                                                disabled={downloadingId === item.id}
                                                                className={`rounded-md px-4 py-1.5 text-xs font-medium transition ${downloadingId === item.id
                                                                    ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                                                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                                                    }`}
                                                            >
                                                                {downloadingId === item.id ? "Downloading..." : "Download"}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm overflow-hidden">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-semibold tracking-wide text-blue-700 bg-blue-50 px-3 py-1 rounded-full">AI ASSISTED</span>
                                            <span className="text-xs text-slate-400">Beta</span>
                                        </div>
                                        <div className="relative rounded-xl border border-slate-200 bg-slate-50 h-[220px] overflow-hidden flex items-center justify-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="doc" className="w-20 opacity-20" />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 backdrop-blur-[1px]">
                                                <p className="text-sm font-semibold text-slate-800">AI Exam Insights</p>
                                                <p className="text-xs text-slate-500 mt-1 max-w-[200px]">
                                                    Get a smart summary and syllabus breakdown for {subjectCode}.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleAiDownload}
                                        disabled={aiLoading}
                                        className={`mt-4 w-full rounded-xl py-3 text-sm font-semibold transition flex items-center justify-center gap-2 ${aiLoading
                                            ? "bg-slate-100 text-slate-400 cursor-wait"
                                            : "bg-slate-800 text-white hover:bg-slate-900 shadow-lg shadow-slate-200"
                                            }`}
                                    >
                                        {aiLoading ? (
                                            <>
                                                <span className="h-4 w-4 border-2 border-slate-400 border-t-slate-600 rounded-full animate-spin"></span>
                                                <span>Analyzing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>✨ Download Insights</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>


                {/* Footer Disclaimer */}
                <div className="mt-10 text-center text-xs text-gray-400">
                    This platform is for educational assistance only · Not an
                    official university service
                </div>
            </div>
        </div>
    );
}





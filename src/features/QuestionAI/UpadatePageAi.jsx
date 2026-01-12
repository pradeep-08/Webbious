import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { CommunityService } from '../../services/qpService';

export default function UpadatePageAi() {
    /* --- STATE --- */
    const [commSubject, setCommSubject] = useState("");
    const [commResults, setCommResults] = useState([]);
    const [commLoading, setCommLoading] = useState(false);

    const [uploadForm, setUploadForm] = useState({
        subject_code: "",
        subject_name: "",
        exam_name: ""
    });
    const [uploadFile, setUploadFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = React.useRef(null);

    const [downloadingId, setDownloadingId] = useState(null);

    /* --- UPDATE FEATURE --- */
    const [updatingId, setUpdatingId] = useState(null);
    const [updateFile, setUpdateFile] = useState(null);

    // Simple logger
    const addLog = (message, type = "info") => {
        console.log(`[${type}] ${message}`);
    };

    /* --- FUNCTIONS --- */
    const fetchCommunityPapers = async (e) => {
        e.preventDefault();
        setCommLoading(true);
        try {
            const data = await CommunityService.searchPapers(commSubject);
            setCommResults(data);
            if (data.length === 0) toast.error("No community papers found for this code.");
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch community papers.");
        } finally {
            setCommLoading(false);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!uploadFile || !uploadForm.subject_code) {
            toast.error("Subject Code and PDF file are required.");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append("subject_code", uploadForm.subject_code);
        formData.append("subject_name", uploadForm.subject_name);
        formData.append("exam_name", uploadForm.exam_name);
        formData.append("pdf", uploadFile);

        try {
            await CommunityService.uploadPaper(formData);
            toast.success("PDF Uploaded Successfully!");
            setUploadForm({ subject_code: "", subject_name: "", exam_name: "" });
            setUploadFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err) {
            console.error(err);
            toast.error("Upload Failed: " + (err.response?.data?.message || err.message));
        } finally {
            setUploading(false);
        }
    };

    const downloadCommunityPaper = async (paper) => {
        try {
            setDownloadingId(paper.id);
            addLog(`Downloading ${paper.pdf_name}...`);
            const blob = await CommunityService.downloadPaper(paper.id);

            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", paper.pdf_name || `paper_${paper.id}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            toast.success("Download successful.");
        } catch (err) {
            console.error(err);
            toast.error("Community download failed.");
        } finally {
            setDownloadingId(null);
        }
    };

    const submitUpdate = async (id) => {
        if (!updateFile) return toast.error("Please select a file first.");

        try {
            addLog(`Updating paper ${id}...`);
            await CommunityService.updatePaper(id, updateFile);
            toast.success("This has been updated"); // User requested specific text

            // cleanup
            setUpdatingId(null);
            setUpdateFile(null);

            // Refresh list
            fetchCommunityPapers(new Event('submit'));
        } catch (err) {
            console.error(err);
            toast.error("Update Failed: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="w-full pt-24 px-4">
            <Toaster position="top-right" />
            <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
                    Community Repository & Updates
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* SEARCH SECTION */}
                    <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                        <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                            🔍 Search Community Papers
                        </h3>
                        <form onSubmit={fetchCommunityPapers} className="flex gap-2">
                            <input
                                value={commSubject}
                                onChange={(e) => setCommSubject(e.target.value.toUpperCase())}
                                placeholder="Subject Code (e.g. UCC6A)"
                                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm"
                                disabled={commLoading}
                            />
                            <button
                                type="submit"
                                disabled={commLoading}
                                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700"
                            >
                                {commLoading ? "..." : "Find"}
                            </button>
                        </form>

                        <div className="mt-4 space-y-2 max-h-[400px] overflow-y-auto">
                            {commResults.length === 0 && !commLoading && (
                                <p className="text-xs text-slate-400 text-center py-8">
                                    Enter a subject code to verify availability in our custom repository.
                                </p>
                            )}
                            {commResults.map((paper) => (
                                <div key={paper.id} className="flex flex-col p-3 bg-white rounded-lg border border-slate-200 shadow-sm gap-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">{paper.subject_code} - {paper.exam_name || 'Exam Paper'}</p>
                                            <p className="text-xs text-slate-500">{new Date(paper.created_at).toLocaleDateString()}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => downloadCommunityPaper(paper)}
                                                disabled={downloadingId === paper.id}
                                                className={`text-xs px-3 py-1.5 rounded-md font-medium transition ${downloadingId === paper.id
                                                        ? "bg-emerald-50 text-emerald-400 cursor-wait"
                                                        : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                                                    }`}
                                            >
                                                {downloadingId === paper.id ? "Downloading..." : "Download PDF"}
                                            </button>

                                            {updatingId !== paper.id && (
                                                <button
                                                    onClick={() => setUpdatingId(paper.id)}
                                                    className="text-xs text-blue-600 font-medium underline px-2"
                                                >
                                                    Update
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* UPDATE FORM */}
                                    {updatingId === paper.id && (
                                        <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in slide-in-from-top-1">
                                            <p className="text-xs font-semibold text-blue-800 mb-2">Upload new version for this paper</p>
                                            <div className="flex gap-2">
                                                <input
                                                    type="file"
                                                    accept="application/pdf"
                                                    onChange={(e) => setUpdateFile(e.target.files[0])}
                                                    className="block w-full text-xs text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                                                />
                                                {updateFile && (
                                                    <button
                                                        onClick={() => submitUpdate(paper.id)}
                                                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-700"
                                                    >
                                                        Save
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => { setUpdatingId(null); setUpdateFile(null); }}
                                                    className="text-slate-500 px-2 text-xs hover:text-slate-700"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UPLOAD SECTION */}
                    <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 relative overflow-hidden group hover:border-blue-400 transition-colors">
                        <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                            <span className="bg-slate-800 text-white p-1.5 rounded-lg">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </span>
                            Contribute to Repository
                        </h3>

                        <form onSubmit={handleUpload} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Subject Code *</label>
                                    <input
                                        value={uploadForm.subject_code}
                                        onChange={(e) => setUploadForm({ ...uploadForm, subject_code: e.target.value.toUpperCase() })}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        placeholder="e.g. UCC6A"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Month & Year</label>
                                    <input
                                        value={uploadForm.exam_name}
                                        onChange={(e) => setUploadForm({ ...uploadForm, exam_name: e.target.value })}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        placeholder="e.g. April 2024"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1.5">Subject Name (Optional)</label>
                                <input
                                    value={uploadForm.subject_name}
                                    onChange={(e) => setUploadForm({ ...uploadForm, subject_name: e.target.value })}
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
                                    placeholder="e.g. Web Technology"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-xs font-bold text-slate-600 mb-1.5">Upload PDF *</label>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="application/pdf"
                                    onChange={(e) => setUploadFile(e.target.files[0])}
                                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border rounded-xl bg-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={uploading}
                                className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-black transform transition hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
                            >
                                {uploading ? "Uploading Paper..." : "🚀 Upload Paper"}
                            </button>
                        </form>
                    </div>
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

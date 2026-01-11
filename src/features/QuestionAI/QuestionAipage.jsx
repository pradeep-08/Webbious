// import React, { useState } from "react";
// import { Search, FileText, Download } from "lucide-react";

// export default function QuestionAiPage() {
//   const [code, setCode] = useState("");
//   const [showResult, setShowResult] = useState(false);

//   // Mock result data (replace later with API)
//   const results = [
//     { id: 1, code: "UVE6A", month: "DEC 2021" },
//     { id: 2, code: "UVE6A", month: "DEC 2022" },
//     { id: 3, code: "UVE6A", month: "DEC 2023" },
//     { id: 4, code: "UVE6A", month: "DEC 2024" },
//     { id: 5, code: "UVE6A", month: "JUN 2022" },
//     { id: 6, code: "UVE6A", month: "JUN 2023" },
//     { id: 7, code: "UVE6A", month: "JUNE 2023" },
//     { id: 8, code: "UVE6A", month: "JUNE 2024" },
//     { id: 9, code: "UVE6A", month: "MAY 2021" },
//   ];

//   const handleSearch = () => {
//     if (!code.trim()) return;
//     setShowResult(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-start justify-center pt-24 px-4">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12">

//         {/* HEADER */}
//         <div className="text-center space-y-2">
//           <p className="text-sm text-gray-500 tracking-wide uppercase">
//             Question Paper Search Tool
//           </p>

//           <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
//             Previous Year Question Papers
//           </h1>

//           <p className="text-gray-600">
//             Find and review past exam question papers easily
//           </p>
//         </div>

//         {/* DISCLAIMER */}
//         <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-xs text-yellow-800 text-center">
//           Disclaimer: This is an independent student-support tool and is{" "}
//           <strong>not officially affiliated</strong> with any university or
//           educational institution.
//         </div>

//         {/* DIVIDER */}
//         <div className="my-8 border-t" />

//         {/* SEARCH SECTION */}
//         <div className="space-y-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Enter Subject Code
//           </label>

//           <div className="flex items-center gap-3">
//             <div className="relative flex-1">
//               <input
//                 value={code}
//                 onChange={(e) => setCode(e.target.value.toUpperCase())}
//                 type="text"
//                 placeholder="Example: ULA2A"
//                 className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
//               />
//               <Search
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//             </div>

//             <button
//               onClick={handleSearch}
//               className="rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
//             >
//               Go
//             </button>
//           </div>
//         </div>

//         {/* RESULTS */}
//         {showResult && (
//           <>
//             {/* SUBJECT NAME */}
//             <div className="mt-8 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium text-center py-2">
//               Subject Name : <strong>Not Found</strong>
//             </div>

//             {/* LIST RESULTS */}
//             <div className="mt-6 space-y-3">
//               {results.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:shadow-sm transition"
//                 >
//                   <div>
//                     <p className="font-semibold text-slate-800">
//                       {item.code}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {item.month}
//                     </p>
//                   </div>

//                   <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
//                     <FileText size={18} />
//                     <span className="text-sm font-medium">PDF</span>
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* BULK DOWNLOAD */}
//             <div className="flex justify-center mt-8">
//               <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-white hover:bg-sky-600 transition">
//                 <Download size={18} />
//                 Download All
//               </button>
//             </div>
//           </>
//         )}

//         {/* INFO SECTION */}
//         {!showResult && (
//           <div className="mt-10 rounded-xl bg-blue-50 p-5">
//             <h3 className="text-sm font-semibold text-blue-900 mb-1">
//               Why use this tool?
//             </h3>
//             <p className="text-sm text-blue-800 leading-relaxed">
//               This tool helps students quickly locate previous year question
//               papers using subject codes. It is designed to support exam
//               preparation by improving access to publicly available academic
//               resources.
//             </p>
//           </div>
//         )}

//         {/* FOOTER */}
//         <div className="mt-8 text-center text-xs text-gray-400">
//           This platform is for educational assistance only · Not an official
//           university service
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Search, FileText, Download } from "lucide-react";

// export default function QuestionAiPage() {
//   const [code, setCode] = useState("");
//   const [showResult, setShowResult] = useState(false);

//   // SUBJECT MAP
//   const subjectMap = {
//     UCC1A: "Fundamentals of Digital Computers",
//     URC1A: "Mathematics I",
//     UCC2A: "Programming in C",
//     URC2A: "Mathematics II",
//     UCC3A: "Programming in C++ & Data Structures",
//     UCC3B: "Microprocessors & Applications",
//     UCC3C: "Numerical & Statistical Methods",
//     UNC3A: "Financial Accounting",
//     UCC4A: "Programming in Java",
//     UCC4B: "Operating System",
//     UCC4C: "Computer Graphics",
//     UNC4A: "Cost & Management Accounting",
//     UCC5A: "Database Management System",
//     UCC5B: "Software Engineering",
//     UCC5C: "Resources Management Techniques",
//     UEC5A: "Visual Programming",
//     UES5A: "Environmental Studies",
//     UCC6A: "Web Technology",
//     UCC6B: "Data Communication & Networking",
//     UCC6C: "Software Testing",
//     UEC6A: "Multimedia Systems",
//     UVE6A: "Value Education",
//   };

//   // Mock result data
//   const results = [
//     { id: 1, month: "DEC 2021" },
//     { id: 2, month: "DEC 2022" },
//     { id: 3, month: "DEC 2023" },
//     { id: 4, month: "DEC 2024" },
//     { id: 5, month: "JUN 2022" },
//     { id: 6, month: "JUN 2023" },
//     { id: 7, month: "JUNE 2023" },
//     { id: 8, month: "JUNE 2024" },
//     { id: 9, month: "MAY 2021" },
//   ];

//   const handleSearch = () => {
//     if (!code.trim()) return;
//     setShowResult(true);
//   };

//   const subjectName = subjectMap[code];
//   const isValid = Boolean(subjectName);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-start justify-center pt-24 px-4">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12">

//         {/* HEADER */}
//         <div className="text-center space-y-2">
//           <p className="text-sm text-gray-500 tracking-wide uppercase">
//             Question Paper Search Tool
//           </p>
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
//             Previous Year Question Papers
//           </h1>
//           <p className="text-gray-600">
//             Find and review past exam question papers easily
//           </p>
//         </div>

//         {/* DISCLAIMER */}
//         <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-xs text-yellow-800 text-center">
//           Disclaimer: This is an independent student-support tool and is{" "}
//           <strong>not officially affiliated</strong> with any university.
//         </div>

//         <div className="my-8 border-t" />

//         {/* SEARCH */}
//         <div className="space-y-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Enter Subject Code
//           </label>

//           <div className="flex items-center gap-3">
//             <div className="relative flex-1">
//               <input
//                 value={code}
//                 onChange={(e) => setCode(e.target.value.toUpperCase())}
//                 placeholder="Example: UVE6A"
//                 className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>

//             <button
//               onClick={handleSearch}
//               className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
//             >
//               Go
//             </button>
//           </div>
//         </div>

//         {/* RESULTS */}
//         {showResult && (
//           <>
//             {/* SUBJECT NAME */}
//             <div className="mt-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium text-center py-3">
//               {isValid ? (
//                 <>
//                   <strong>{code}</strong> — {subjectName}
//                 </>
//               ) : (
//                 "Subject Name : Not Found"
//               )}
//             </div>

//             {/* LIST (ONLY IF VALID SUBJECT) */}
//             {isValid && (
//               <>
//                 <div className="mt-6 space-y-3">
//                   {results.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:shadow-sm"
//                     >
//                       <div>
//                         <p className="font-semibold text-slate-800">
//                           {code} — {subjectName}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {item.month}
//                         </p>
//                       </div>

//                       <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
//                         <FileText size={18} />
//                         <span className="text-sm font-medium">PDF</span>
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 {/* BULK DOWNLOAD */}
//                 <div className="flex justify-center mt-8">
//                   <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-white hover:bg-sky-600">
//                     <Download size={18} />
//                     Download All
//                   </button>
//                 </div>
//               </>
//             )}
//           </>
//         )}

//         {!showResult && (
//           <div className="mt-10 rounded-xl bg-blue-50 p-5">
//             <h3 className="text-sm font-semibold text-blue-900 mb-1">
//               Why use this tool?
//             </h3>
//             <p className="text-sm text-blue-800">
//               Quickly locate and download previous year question papers using
//               subject codes.
//             </p>
//           </div>
//         )}

//         <div className="mt-8 text-center text-xs text-gray-400">
//           This platform is for educational assistance only · Not an official
//           university service
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Search, FileText, Download } from "lucide-react";

// export default function QuestionAiPage() {
//   const [code, setCode] = useState("");
//   const [showResult, setShowResult] = useState(false);

//   /* ================= SUBJECT MAP ================= */
//   const subjectMap = {
//     UCC1A: "Fundamentals of Digital Computers",
//     URC1A: "Mathematics I",
//     UCC2A: "Programming in C",
//     URC2A: "Mathematics II",
//     UCC3A: "Programming in C++ & Data Structures",
//     UCC3B: "Microprocessors & Applications",
//     UCC3C: "Numerical & Statistical Methods",
//     UNC3A: "Financial Accounting",
//     UCC4A: "Programming in Java",
//     UCC4B: "Operating System",
//     UCC4C: "Computer Graphics",
//     UNC4A: "Cost & Management Accounting",
//     UCC5A: "Database Management System",
//     UCC5B: "Software Engineering",
//     UCC5C: "Resources Management Techniques",
//     UEC5A: "Visual Programming",
//     UES5A: "Environmental Studies",
//     UCC6A: "Web Technology",
//     UCC6B: "Data Communication & Networking",
//     UCC6C: "Software Testing",
//     UEC6A: "Multimedia Systems",
//     UVE6A: "Value Education",
//   };

//   /* ================= CONSTANT EXAM SESSIONS ================= */
//   const examSessions = [
//     "DEC 2021",
//     "DEC 2022",
//     "DEC 2023",
//     "DEC 2024",
//     "JUN 2022",
//     "JUN 2023",
//     "JUNE 2023",
//     "JUNE 2024",
//     "MAY 2021",
//   ];

//   const handleSearch = () => {
//     if (!code.trim()) return;
//     setShowResult(true);
//   };

//   const subjectName = subjectMap[code];
//   const isValid = Boolean(subjectName);

//   /* ================= DYNAMIC BUILDERS ================= */

//   const aiVersions = isValid
//     ? [
//         {
//           label: "AI Version 2 (Most repeated questions)",
//           file: `/pdf/BCA/${code}/AI_VERSION_2_${code}.pdf`,
//         },
//       ]
//     : [];

//   const results = isValid
//   ? examSessions.map((session, index) => {
//       const fileName = `${session}_${code}.pdf`;
//       return {
//         id: index + 1,
//         month: session,
//         file: `/pdf/BCA/${code}/${encodeURIComponent(fileName)}`,
//       };
//     })
//   : [];


//   const bulkZip = isValid
//     ? `/pdf/BCA/${code}/${code}_ALL.zip`
//     : "";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-start justify-center pt-24 px-4">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12">

//         {/* ================= HEADER ================= */}
//         <div className="text-center space-y-2">
//           <p className="text-sm text-gray-500 uppercase tracking-wide">
//             Question Paper Search Tool
//           </p>
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
//             Previous Year Question Papers
//           </h1>
//           <p className="text-gray-600">
//             Find and review past exam question papers easily
//           </p>
//         </div>

//         {/* ================= DISCLAIMER ================= */}
//         <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-xs text-yellow-800 text-center">
//           Disclaimer: This is an independent student-support tool and is{" "}
//           <strong>not officially affiliated</strong> with any university.
//         </div>

//         <div className="my-8 border-t" />

//         {/* ================= SEARCH ================= */}
//         <div className="space-y-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Enter Subject Code
//           </label>

//           <div className="flex items-center gap-3">
//             <div className="relative flex-1">
//               <input
//                 value={code}
//                 onChange={(e) => setCode(e.target.value.toUpperCase())}
//                 placeholder="Example: UVE6A"
//                 className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>

//             <button
//               onClick={handleSearch}
//               className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
//             >
//               Go
//             </button>
//           </div>
//         </div>

//         {/* ================= RESULTS ================= */}
//         {showResult && (
//           <>
//             {/* SUBJECT NAME */}
//             <div className="mt-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium text-center py-3">
//               {isValid ? (
//                 <>
//                   <strong>{code}</strong> — {subjectName}
//                 </>
//               ) : (
//                 "Subject Name : Not Found"
//               )}
//             </div>

//             {/* VALID SUBJECT CONTENT */}
//             {isValid && (
//               <>
//                 {/* AI VERSION */}
//                 <h3 className="mt-8 font-semibold text-indigo-800">
//                   AI Combined Repeated Question Papers
//                 </h3>

//                 <div className="mt-4 space-y-3">
//                   {aiVersions.map((ai, i) => (
//                     <a
//                       key={i}
//                       href={ai.file}
//                       download
//                       className="flex items-center justify-between rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 hover:shadow-sm"
//                     >
//                       <div>
//                         <p className="font-semibold text-slate-800">
//                           {code} — {subjectName}
//                         </p>
//                         <p className="text-sm text-gray-500">{ai.label}</p>
//                       </div>

//                       <FileText size={18} className="text-indigo-600" />
//                     </a>
//                   ))}
//                 </div>

//                 {/* PREVIOUS PAPERS */}
//                 <h3 className="mt-10 font-semibold text-slate-800">
//                   Previous Year Question Papers
//                 </h3>

//                 <div className="mt-4 space-y-3">
//                   {results.map((item) => (
//                     <a
//                       key={item.id}
//                       href={item.file}
//                       download
//                       className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:shadow-sm"
//                     >
//                       <div>
//                         <p className="font-semibold text-slate-800">
//                           {code} — {subjectName}
//                         </p>
//                         <p className="text-sm text-gray-500">{item.month}</p>
//                       </div>

//                       <FileText size={18} className="text-red-600" />
//                     </a>
//                   ))}
//                 </div>

//                 {/* DOWNLOAD ALL */}
//                 <div className="flex justify-center mt-8">
//                   <a
//                     href={bulkZip}
//                     download
//                     className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-white hover:bg-sky-600"
//                   >
//                     <Download size={18} />
//                     Download All
//                   </a>
//                 </div>
//               </>
//             )}
//           </>
//         )}

//         <div className="mt-8 text-center text-xs text-gray-400">
//           This platform is for educational assistance only · Not an official
//           university service
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from 'axios';

export default function QuestionAiPage() {
    const [subjectCode, setSubjectCode] = useState('UCC6A');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [processingState, setProcessingState] = useState(null); // 'searching' | 'downloading'
    const [logs, setLogs] = useState([]); // For visible progress/error logs
    const [viewStateData, setViewStateData] = useState(null);

    const addLog = (message, type = 'info') => {
        setLogs(prev => [...prev, { message, type, time: new Date().toLocaleTimeString() }]);
    };

    const fetchQuestionPapers = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        setProcessingState('searching');
        setLogs([]);
        setResults([]);
        setViewStateData(null);

        try {
            addLog("Step 1: Connecting to university portal...");
            // Step 1: GET request to obtain ViewState
            const initialResponse = await axios.get('/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE', {
                responseType: 'text',
            });

            const parser = new DOMParser();
            const doc = parser.parseFromString(initialResponse.data, 'text/html');

            const vs = doc.getElementById('__VIEWSTATE')?.value;
            const vsg = doc.getElementById('__VIEWSTATEGENERATOR')?.value;
            const ev = doc.getElementById('__EVENTVALIDATION')?.value;

            if (!vs) {
                throw new Error("Failed to initialize session. University portal might be down.");
            }

            addLog("Session initialized. Sending query...");

            // Step 2: POST request with the form data
            const formData = new URLSearchParams();
            formData.append('__EVENTTARGET', '');
            formData.append('__EVENTARGUMENT', '');
            formData.append('__VIEWSTATE', vs);
            formData.append('__VIEWSTATEGENERATOR', vsg);
            if (ev) formData.append('__EVENTVALIDATION', ev);
            formData.append('__SCROLLPOSITIONX', '0');
            formData.append('__SCROLLPOSITIONY', '0');
            formData.append('HidFldDegree', 'IDE');
            formData.append('Txtsbcd', subjectCode);
            formData.append('CmdGo', 'GO');

            const searchResponse = await axios.post('/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                responseType: 'text'
            });

            const resultDoc = parser.parseFromString(searchResponse.data, 'text/html');

            // Update ViewState for subsequent actions (like downloads)
            const newVs = resultDoc.getElementById('__VIEWSTATE')?.value || vs;
            const newVsg = resultDoc.getElementById('__VIEWSTATEGENERATOR')?.value || vsg;
            const newEv = resultDoc.getElementById('__EVENTVALIDATION')?.value || ev;

            setViewStateData({
                __VIEWSTATE: newVs,
                __VIEWSTATEGENERATOR: newVsg,
                __EVENTVALIDATION: newEv
            });

            // Parse the GridView Table
            const table = resultDoc.getElementById('GrdView');
            if (!table) {
                const notFound = resultDoc.getElementById('LabSubname')?.innerText;
                if (notFound && notFound.includes('Not Found')) {
                    throw new Error(`Subject '${subjectCode}' not found.`);
                } else {
                    // Maybe session expired or just no data
                    throw new Error('No results table received from server.');
                }
            }

            const rows = Array.from(table.querySelectorAll('tr')).slice(1); // Skip header
            const parsedResults = rows.map((row, index) => {
                const cells = row.querySelectorAll('td');
                if (cells.length < 3) return null;

                // Find the download input button name
                // Usually: name="GrdView$ctl02$CmdDownload"
                const downloadBtn = row.querySelector('input[type="image"]');
                const downloadBtnName = downloadBtn ? downloadBtn.getAttribute('name') : null;

                return {
                    id: index,
                    slNo: cells[0]?.innerText?.trim(),
                    subCode: cells[1]?.innerText?.trim(),
                    monthYear: cells[2]?.querySelector('span')?.innerText?.trim(),
                    downloadBtnName: downloadBtnName
                };
            }).filter(Boolean);

            setResults(parsedResults);
            addLog(`Found ${parsedResults.length} papers.`, 'success');

        } catch (err) {
            console.error(err);
            addLog(err.message || 'An error occurred.', 'error');
        } finally {
            setLoading(false);
            setProcessingState(null);
        }
    };

    const downloadPaper = async (item) => {
        if (!viewStateData) {
            addLog("Session invalid. Please search again.", 'error');
            return;
        }

        try {
            addLog(`Downloading ${item.monthYear}...`);

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

            // Crucial: Simulate the ImageButton click
            // name.x and name.y are sent by browsers
            if (item.downloadBtnName) {
                formData.append(item.downloadBtnName + '.x', '10');
                formData.append(item.downloadBtnName + '.y', '10');
            }

            const response = await axios.post('/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                responseType: 'blob' // Important for file download
            });

            // Check if we got a PDF or an HTML error page
            if (response.data.type !== 'application/pdf') {
                // Try to read the blob as text to see if it's an error page
                const text = await response.data.text();
                if (text.includes('Object reference not set')) {
                    throw new Error('Server error (ViewState mismatch). Refresh and try again.');
                }
                // Sometimes it sends HTML even with 200 OK
                throw new Error('Server did not return a PDF file.');
            }

            // Create download link for PDF
            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            // Filename: MonthYear_SubjectCode.pdf (e.g. JUN 2022_UCC6A.PDF)
            // Clean up the month string but keep the space if it exists, or just ensure single space
            const formattedMonth = item.monthYear.trim().replace(/\s+/g, ' ');
            const filename = `${formattedMonth}_${subjectCode}.PDF`;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            addLog(`Downloaded ${item.monthYear}`, 'success');

        } catch (err) {
            console.error(err);
            addLog(`Failed to download ${item.monthYear}: ${err.message}`, 'error');
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

            // Server-side Trigger for "Download All" (ZIP)
            formData.append('CmdDown', 'Download');

            const response = await axios.post('/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                responseType: 'blob'
            });

            // Validate response type
            const type = response.data.type;
            if (type !== 'application/zip' && type !== 'application/x-zip-compressed' && type !== 'application/octet-stream') {
                try {
                    const text = await response.data.text();
                    if (text.length < 1000) { // Likely an error message if short
                        throw new Error('Server returned an error/HTML instead of a ZIP file.');
                    }
                } catch (e) {
                    // If reading text fails, ignore, it might be binary
                }
            }

            // Create download link for ZIP
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
        <div style={{ width: '100%', maxWidth: '700px', padding: '1rem' }}>
            <div className="card-shadow" style={{
                background: 'white',
                borderRadius: '16px',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                {/* Header Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#94a3b8',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                    }}>
                        Question Paper Search Tool
                    </p>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        margin: '0 0 0.5rem 0'
                    }}>
                        Previous Year Question Papers
                    </h1>
                    <p style={{ color: '#64748b', margin: 0 }}>
                        Find and review past exam question papers easily
                    </p>
                </div>

                {/* Disclaimer Box */}
                <div style={{
                    background: '#fffbeb',
                    border: '1px solid #fef3c7',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    marginBottom: '2.5rem',
                    fontSize: '0.85rem',
                    color: '#92400e'
                }}>
                    Disclaimer: This is an independent student-support tool and is <strong>not officially affiliated</strong> with any university.
                </div>

                {/* Search Form */}
                <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#334155',
                        marginBottom: '0.5rem'
                    }}>
                        Enter Subject Code
                    </label>
                    <form onSubmit={fetchQuestionPapers} style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <input
                                type="text"
                                value={subjectCode}
                                onChange={(e) => setSubjectCode(e.target.value.toUpperCase())}
                                placeholder="Example: UVE6A"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    paddingRight: '2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid #cbd5e1',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                    color: '#334155',
                                    background: '#fff'
                                }}
                            />
                            {/* Search Icon Placeholder */}
                            <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                background: '#2563eb',
                                color: 'white',
                                padding: '0 2rem',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                                fontSize: '1rem',
                                cursor: loading ? 'wait' : 'pointer',
                                opacity: loading ? 0.9 : 1
                            }}
                        >
                            {loading ? '...' : 'Go'}
                        </button>
                    </form>
                </div>

                {/* Visible Logs (kept for feedback but styled minimally) */}
                {logs.length > 0 && (
                    <div style={{
                        textAlign: 'left',
                        background: '#f1f5f9',
                        padding: '1rem',
                        borderRadius: '8px',
                        marginBottom: '2rem',
                        fontSize: '0.8rem',
                        maxHeight: '100px',
                        overflowY: 'auto'
                    }}>
                        {logs.map((log, i) => (
                            <div key={i} style={{ color: log.type === 'error' ? '#ef4444' : '#64748b' }}>
                                {log.message}
                            </div>
                        ))}
                    </div>
                )}

                {/* Results Table */}
                {results.length > 0 && (
                    <div style={{ marginTop: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#334155' }}>Results Found ({results.length})</h3>
                            <button
                                onClick={downloadAll}
                                disabled={loading}
                                style={{
                                    fontSize: '0.85rem',
                                    background: 'none',
                                    border: '1px solid #e2e8f0',
                                    color: '#2563eb',
                                    padding: '0.4rem 1rem'
                                }}
                            >
                                Download All (ZIP)
                            </button>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                        <th style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>S.NO</th>
                                        <th style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>SUBCODE</th>
                                        <th style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>MONTH & YEAR</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'right', color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((item, index) => (
                                        <tr key={index} style={{ borderBottom: '1px solid #f8fafc' }}>
                                            <td style={{ padding: '0.75rem', color: '#334155', fontWeight: 500 }}>{item.slNo}</td>
                                            <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 600 }}>{item.subCode}</td>
                                            <td style={{ padding: '0.75rem', color: '#475569' }}>{item.monthYear}</td>
                                            <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                                                <button
                                                    onClick={() => downloadPaper(item)}
                                                    disabled={loading}
                                                    style={{
                                                        padding: '0.3rem 0.8rem',
                                                        fontSize: '0.8rem',
                                                        background: '#eff6ff',
                                                        color: '#2563eb',
                                                        border: 'None',
                                                        borderRadius: '4px',
                                                        fontWeight: 600
                                                    }}>
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Footer Disclaimer */}
                <p style={{
                    marginTop: '3rem',
                    fontSize: '0.75rem',
                    color: '#cbd5e1'
                }}>
                    This platform is for educational assistance only - Not an official university service
                </p>
            </div>
        </div>
    );
}


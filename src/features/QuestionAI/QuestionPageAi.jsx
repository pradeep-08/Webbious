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


// import React, { useState } from "react";
// import axios from "axios";

// export default function QuestionPageAi() {
//     const [subjectCode, setSubjectCode] = useState("UCC6A");
//     const [subjectName, setSubjectName] = useState("");
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [processingState, setProcessingState] = useState(null);
//     const [logs, setLogs] = useState([]);
//     const [viewStateData, setViewStateData] = useState(null);

//     const addLog = (message, type = "info") => {
//         setLogs((prev) => [
//             ...prev,
//             { message, type, time: new Date().toLocaleTimeString() },
//         ]);
//     };

//     const fetchQuestionPapers = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setProcessingState("searching");
//         setLogs([]);
//         setResults([]);
//         setViewStateData(null);
//         setSubjectName("");

//         try {
//             addLog("Step 1: Connecting to university portal...");

//             const initialResponse = await axios.get(
//                 "/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE",
//                 { responseType: "text" }
//             );

//             const parser = new DOMParser();
//             const doc = parser.parseFromString(initialResponse.data, "text/html");

//             const vs = doc.getElementById("__VIEWSTATE")?.value;
//             const vsg = doc.getElementById("__VIEWSTATEGENERATOR")?.value;
//             const ev = doc.getElementById("__EVENTVALIDATION")?.value;

//             if (!vs) throw new Error("Failed to initialize session.");

//             addLog("Session initialized. Sending query...");

//             const formData = new URLSearchParams();
//             formData.append("__VIEWSTATE", vs);
//             formData.append("__VIEWSTATEGENERATOR", vsg);
//             if (ev) formData.append("__EVENTVALIDATION", ev);
//             formData.append("HidFldDegree", "IDE");
//             formData.append("Txtsbcd", subjectCode);
//             formData.append("CmdGo", "GO");

//             const searchResponse = await axios.post(
//                 "/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE",
//                 formData,
//                 { responseType: "text" }
//             );

//             const resultDoc = parser.parseFromString(
//                 searchResponse.data,
//                 "text/html"
//             );

//             // ✅ Extract subject name
//             const subjectLabel =
//                 resultDoc.getElementById("LabSubname")?.innerText?.trim();

//             if (subjectLabel) {
//                 // Example: "UCC6A - SOFTWARE ENGINEERING"
//                 const cleanName = subjectLabel
//                     .replace(subjectCode, "")
//                     .replace("-", "")
//                     .trim();
//                 setSubjectName(cleanName);
//             }

//             setViewStateData({
//                 __VIEWSTATE:
//                     resultDoc.getElementById("__VIEWSTATE")?.value || vs,
//                 __VIEWSTATEGENERATOR:
//                     resultDoc.getElementById("__VIEWSTATEGENERATOR")?.value || vsg,
//                 __EVENTVALIDATION:
//                     resultDoc.getElementById("__EVENTVALIDATION")?.value || ev,
//             });

//             const table = resultDoc.getElementById("GrdView");
//             if (!table) throw new Error("No results found.");

//             const rows = Array.from(table.querySelectorAll("tr")).slice(1);

//             const parsed = rows
//                 .map((row, index) => {
//                     const cells = row.querySelectorAll("td");
//                     const btn = row.querySelector('input[type="image"]');
//                     if (cells.length < 3) return null;

//                     return {
//                         id: index,
//                         slNo: cells[0].innerText.trim(),
//                         subCode: cells[1].innerText.trim(),
//                         monthYear: cells[2].innerText.trim(),
//                         downloadBtnName: btn?.name,
//                     };
//                 })
//                 .filter(Boolean);

//             setResults(parsed);
//             addLog(`Found ${parsed.length} papers.`, "success");
//         } catch (err) {
//             addLog(err.message, "error");
//         } finally {
//             setLoading(false);
//             setProcessingState(null);
//         }
//     };

//     const downloadPaper = async (item) => {
//         try {
//             addLog(`Downloading ${item.monthYear}...`);

//             const formData = new URLSearchParams();
//             Object.entries(viewStateData).forEach(([k, v]) =>
//                 v && formData.append(k, v)
//             );
//             formData.append("Txtsbcd", subjectCode);
//             formData.append(item.downloadBtnName + ".x", "10");
//             formData.append(item.downloadBtnName + ".y", "10");

//             const res = await axios.post(
//                 "/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE",
//                 formData,
//                 { responseType: "blob" }
//             );

//             const url = URL.createObjectURL(res.data);
//             const link = document.createElement("a");
//             link.href = url;
//             link.download = `${item.monthYear}_${subjectCode}.pdf`;
//             link.click();
//             URL.revokeObjectURL(url);

//             addLog(`Downloaded ${item.monthYear}`, "success");
//         } catch (err) {
//             addLog("Download failed.", "error");
//         }
//     };

//     return (
//         <div className="w-full pt-24 max-w-[900px] mx-auto p-4">
//             <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
//                 <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
//                     Question Paper Search Tool
//                 </p>
//                 <h1 className="text-2xl font-bold text-slate-800 mt-2">
//                     Previous Year Question Papers
//                 </h1>
//                 <p className="text-slate-500 mb-6">
//                     Find and review past exam question papers easily
//                 </p>

//                 <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-md p-3 mb-6">
//                     Disclaimer: This is an independent student-support tool and not
//                     officially affiliated with any university.
//                 </div>

//                 <form onSubmit={fetchQuestionPapers} className="flex gap-4 mb-6">
//                     <input
//                         value={subjectCode}
//                         onChange={(e) =>
//                             setSubjectCode(e.target.value.toUpperCase())
//                         }
//                         className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Example: UVE6A"
//                         disabled={loading}
//                     />
//                     <button
//                         disabled={loading}
//                         className="bg-blue-600 text-white px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
//                     >
//                         {loading ? "..." : "Go"}
//                     </button>
//                 </form>

//                 {logs.length > 0 && (
//                     <div className="bg-slate-100 text-left text-sm rounded-md p-3 mb-6 max-h-32 overflow-y-auto">
//                         {logs.map((l, i) => (
//                             <div
//                                 key={i}
//                                 className={
//                                     l.type === "error"
//                                         ? "text-red-500"
//                                         : "text-slate-600"
//                                 }
//                             >
//                                 {l.message}
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {results.length > 0 && (
//                     <div className="mt-6 text-left">
//                         {/* Subject display */}
//                         {subjectName && (
//                             <div className="mb-4">
//                                 <p className="text-sm text-slate-500">Subject</p>
//                                 <p className="font-semibold text-slate-800">
//                                     {subjectCode} – {subjectName}
//                                 </p>
//                             </div>
//                         )}

//                         <h3 className="font-semibold mb-2">
//                             Results Found ({results.length})
//                         </h3>

//                         <div className="overflow-x-auto">
//                             <table className="w-full text-sm border-collapse">
//                                 <thead>
//                                     <tr className="border-b">
//                                         <th className="p-2">S.No</th>
//                                         <th className="p-2">Month & Year</th>
//                                         <th className="p-2 text-right">Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {results.map((item) => (
//                                         <tr
//                                             key={item.id}
//                                             className="border-b hover:bg-slate-50"
//                                         >
//                                             <td className="p-2">{item.slNo}</td>

//                                             <td className="p-2">
//                                                 {item.monthYear}
//                                             </td>
//                                             <td className="p-2 text-right">
//                                                 <button
//                                                     onClick={() =>
//                                                         downloadPaper(item)
//                                                     }
//                                                     className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-semibold hover:bg-blue-100"
//                                                 >
//                                                     Download
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 )}

//                 <p className="text-xs text-slate-300 mt-10">
//                     Educational assistance only – not an official university service
//                 </p>
//             </div>
//         </div>
//     );
// }

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
            addLog("Step 1: Connecting to university portal...");

            const initialResponse = await axios.get(
                "/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE",
                { responseType: "text" }
            );

            const parser = new DOMParser();
            const doc = parser.parseFromString(initialResponse.data, "text/html");

            const vs = doc.getElementById("__VIEWSTATE")?.value;
            const vsg = doc.getElementById("__VIEWSTATEGENERATOR")?.value;
            const ev = doc.getElementById("__EVENTVALIDATION")?.value;

            if (!vs) throw new Error("Failed to initialize session.");

            addLog("Session initialized. Sending query...");

            const formData = new URLSearchParams();
            formData.append("__VIEWSTATE", vs);
            formData.append("__VIEWSTATEGENERATOR", vsg);
            if (ev) formData.append("__EVENTVALIDATION", ev);
            formData.append("HidFldDegree", "IDE");
            formData.append("Txtsbcd", subjectCode);
            formData.append("CmdGo", "GO");

            const searchResponse = await axios.post(
                "/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE",
                formData,
                { responseType: "text" }
            );

            const resultDoc = parser.parseFromString(
                searchResponse.data,
                "text/html"
            );

            setViewStateData({
                __VIEWSTATE:
                    resultDoc.getElementById("__VIEWSTATE")?.value || vs,
                __VIEWSTATEGENERATOR:
                    resultDoc.getElementById("__VIEWSTATEGENERATOR")?.value || vsg,
                __EVENTVALIDATION:
                    resultDoc.getElementById("__EVENTVALIDATION")?.value || ev,
            });

            const table = resultDoc.getElementById("GrdView");
            if (!table) throw new Error("No results found.");

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

            setResults(parsed);
            addLog(`Found ${parsed.length} papers.`, "success");
        } catch (err) {
            addLog(err.message, "error");
        } finally {
            setLoading(false);
            setProcessingState(null);
        }
    };

    const downloadPaper = async (item) => {
        try {
            addLog(`Downloading ${item.monthYear}...`);

            const formData = new URLSearchParams();
            Object.entries(viewStateData).forEach(([k, v]) =>
                v && formData.append(k, v)
            );
            formData.append("Txtsbcd", subjectCode);
            formData.append(item.downloadBtnName + ".x", "10");
            formData.append(item.downloadBtnName + ".y", "10");

            const res = await axios.post(
                "/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE",
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
        } catch {
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





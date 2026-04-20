import React, { useState, useRef } from 'react';
import { UploadCloud, FileType, CheckCircle, AlertTriangle, Download, XCircle, Code } from 'lucide-react';

export interface ConversionResult {
  total: number;
  mapped: number;
  unmatched: number;
  unmatchedSteps: string[];
  previewCode: string;
}

const ExcelToCanPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const processFile = async (uploadedFile: File) => {
    setFile(uploadedFile);
    setIsProcessing(true);
    setResult(null);

    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      // NOTE: Ensure your Python backend is running and replace this URL with your actual endpoint if different.
      // Expected backend response matches the ConversionResult interface.
      const response = await fetch('https://py-script-xi.vercel.app/api/convert-excel-to-can', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data: ConversionResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to process file. Please ensure your Python backend is running at https://py-script-xi.vercel.app/.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!result?.previewCode) return;
    const blob = new Blob([result.previewCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const baseName = file ? file.name.replace(/\.[^/.]+$/, "") : "generated_script";
    a.download = `${baseName}.can`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearProcess = () => {
    setFile(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 mb-4">
            Excel to CAPL Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Convert your test specification Excel files directly into ready-to-run .can scripts.
          </p>
        </div>

        {/* Upload Section */}
        {!result && (
          <div
            className={`transition-all duration-300 border-2 border-dashed rounded-2xl p-12 text-center bg-white ${isProcessing ? 'border-blue-300' : 'border-gray-300 hover:border-blue-500 hover:shadow-lg'
              }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <h3 className="text-xl font-semibold text-gray-800">Processing '{file?.name}'...</h3>
                <p className="text-sm text-gray-500">Mapping test steps to CAPL instructions.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full">
                  <UploadCloud size={48} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Upload Excel File</h3>
                  <p className="text-gray-500 mb-6">Drag and drop your .xlsx or .xls file here, or click to browse.</p>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".xlsx, .xls"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center space-x-2"
                >
                  <FileType size={20} />
                  <span>Select File</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                <CheckCircle className="text-green-500" />
                Conversion Complete
                <span className="text-sm font-normal text-gray-500 ml-2">({file?.name})</span>
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={clearProcess}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium border border-gray-200 bg-white"
                >
                  Convert Another
                </button>
                <button
                  onClick={handleDownload}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md flex items-center gap-2"
                >
                  <Download size={18} />
                  Download .can
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Steps</span>
                <span className="text-4xl font-bold mt-2 text-gray-800">{result.total}</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <span className="text-sm font-medium text-green-600 uppercase tracking-wider">Mapped</span>
                <span className="text-4xl font-bold mt-2 text-green-600 flex items-center gap-2">
                  {result.mapped}
                </span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100 flex flex-col bg-orange-50/30">
                <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">Unmatched</span>
                <span className="text-4xl font-bold mt-2 text-orange-600">{result.unmatched}</span>
              </div>
            </div>

            {/* Unmatched Warnings (Prominent) */}
            {result.unmatchedSteps.length > 0 && (
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
                <div className="flex gap-3 mb-3">
                  <AlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-orange-800">Action Required: Unmatched Steps</h3>
                    <p className="text-sm text-orange-700 mt-1">
                      The following steps could not be automatically mapped to CAPL instructions. They have been added as comments in the generated script for you to implement manually.
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 ml-9">
                  {result.unmatchedSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-2 text-orange-800 bg-orange-100/50 p-2 rounded items-start font-mono text-sm">
                      <XCircle size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Large Preview Pane */}
            <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col border border-gray-800">
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2 text-gray-300">
                  <Code size={18} />
                  <span className="font-mono text-sm tracking-wide">generated_script.can</span>
                </div>
                <button
                  onClick={handleDownload}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <Download size={14} /> Download
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-gray-300 font-mono text-sm leading-relaxed">
                  <code>
                    {result.previewCode}
                  </code>
                </pre>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ExcelToCanPage;

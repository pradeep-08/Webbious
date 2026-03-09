import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AIChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [messageCount, setMessageCount] = useState(() => {
        return parseInt(localStorage.getItem('webbiousAiMessageCount') || '0', 10);
    });
    const MAX_MESSAGES = 20;

    const [messages, setMessages] = useState([
        { role: 'assistant', content: "👋 Hi there! I'm your AI assistant. How can I help you build better digital products today?" }
    ]);

    const messagesEndRef = useRef(null);

    // Auto-scroll to latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    // Tooltip Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen && messageCount === 0) {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 20000); // Auto hide after 20s
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen, messageCount]);

    const handleOpenToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setShowTooltip(false);
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading || messageCount >= MAX_MESSAGES) return;

        const userMessage = { role: 'user', content: input };
        const prevMessages = [...messages, userMessage];
        setMessages(prevMessages);
        setInput('');
        setIsLoading(true);

        // Increment conversation limit
        const newCount = messageCount + 1;
        setMessageCount(newCount);
        localStorage.setItem('webbiousAiMessageCount', newCount.toString());

        if (newCount >= MAX_MESSAGES) {
            setIsLoading(false);
            return;
        }

        try {
            const systemPrompt = {
                role: 'system',
                content: `You are an expert AI assistant for Webbious. Webbious specializes in custom software development, UI/UX design, modern websites, and digital transformation solutions. 
        RULE: You MUST ONLY answer questions related to Webbious, web development, software applications, UI/UX design, AI solutions, and related digital services. 
        If a user asks something completely unrelated (e.g. general knowledge, math, non-tech advice), kindly decline and steer the conversation back to how Webbious can help them with software solutions.`
            };

            const apiMessages = [
                systemPrompt,
                ...prevMessages.map(m => ({ role: m.role, content: m.content }))
            ];

            const apiKey = import.meta.env.VITE_GROQ_API_KEY?.trim();
            if (!apiKey) {
                throw new Error("GROQ API key is missing. Add VITE_GROQ_API_KEY to your .env file and manually restart the development server.");
            }

            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'groq/compound-mini',
                    messages: apiMessages,
                    temperature: 0.7,
                    max_tokens: 500
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || "There was an error communicating with the AI.");
            }

            if (data.choices && data.choices[0]) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I couldn't process that response correctly. Could you try asking another way?" }]);
            }
        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: error.message || "Sorry, I'm having trouble connecting to the AI server right now. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button & Tooltip Wrapper */}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
                {showTooltip && (
                    <div className="relative bg-black text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg mb-4 animate-bounce">
                        Interact with our agent
                        {/* Tooltip caret */}
                        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-black transform rotate-45"></div>
                    </div>
                )}

                <div
                    onClick={handleOpenToggle}
                    className={`w-14 h-14 bg-[#0070F3] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.2)] cursor-pointer hover:scale-110 transition-all duration-300 ${isOpen ? 'scale-110 bg-gray-900' : 'hover:-translate-y-1'}`}
                >
                    {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px] ml-[2px]">
                            <path d="M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H16L21 21V15C21.6569 14.1 22 13.1 22 12V6C22 4.34315 20.6569 3 19 3H6Z" fill="white" />
                            <path d="M8.5 10.5C8.5 10.5 10.5 13 12.5 13C14.5 13 16.5 10.5 16.5 10.5" stroke="#0070F3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 w-[350px] h-[500px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-[100] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}`}
            >
                {/* Header */}
                <div className="bg-[#0070F3] p-4 text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded-full shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1px] ml-[1px]">
                            <path d="M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H16L21 21V15C21.6569 14.1 22 13.1 22 12V6C22 4.34315 20.6569 3 19 3H6Z" fill="white" />
                            <path d="M8.5 10.5C8.5 10.5 10.5 13 12.5 13C14.5 13 16.5 10.5 16.5 10.5" stroke="#0070F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[15px] leading-tight">Webbi Agent</h3>
                        <p className="text-white/80 text-xs">We typically reply instantly</p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-2 items-end ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            {msg.role === 'assistant' && (
                                <div className="w-6 h-6 bg-[#0070F3] rounded-full flex items-center justify-center shrink-0 mb-1">
                                    <span className="text-white text-[10px] font-bold">W</span>
                                </div>
                            )}
                            <div className={`${msg.role === 'user' ? 'bg-[#0070F3] text-white rounded-br-sm' : 'bg-white border border-gray-100 text-gray-700 rounded-bl-sm'} p-3 rounded-2xl text-[13.5px] shadow-sm max-w-[85%] leading-relaxed ${isLoading && idx === messages.length - 1 && msg.role === 'user' ? 'opacity-70' : ''}`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex gap-2 items-end">
                            <div className="w-6 h-6 bg-[#0070F3] rounded-full flex items-center justify-center shrink-0 mb-1">
                                <span className="text-white text-[10px] font-bold">W</span>
                            </div>
                            <div className="bg-white border border-gray-100 px-4 py-4 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Limit Reached UI */}
                {messageCount >= MAX_MESSAGES ? (
                    <div className="p-5 bg-white border-t border-gray-100 text-center">
                        <p className="text-[13px] text-gray-600 font-medium mb-3">You've reached the free chat limit to prevent abuse.</p>
                        <Link to="/contact">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full py-2.5 bg-black text-white text-[13.5px] font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                            >
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                ) : (
                    /* Input Area */
                    <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isLoading}
                            placeholder="Type your message..."
                            className="flex-1 bg-gray-100/80 px-4 py-2.5 rounded-full text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#0070F3]/30 transition-all text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="w-9 h-9 bg-[#0070F3] rounded-full flex items-center justify-center shrink-0 text-white hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:hover:bg-[#0070F3] disabled:cursor-not-allowed"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

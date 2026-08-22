import React, { useState, useRef, useEffect } from 'react';
import { getAIAnswer } from '../data/aiKnowledgeBase';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Janu's AI assistant. Ask me anything about her projects, technical stack, experience, or background!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    "What is Janu's strongest project?",
    "Tell me about TripNest.",
    "What AI projects has she built?",
    "What technologies does she use?",
    "What is she currently learning?",
    "Tell me about Macramazing.",
    "How can I contact her?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const answer = getAIAnswer(query);
      setMessages([...newMessages, { sender: 'bot', text: answer }]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full bg-stone-900 text-white dark:bg-[#1E1729] dark:text-stone-100 shadow-2xl border border-stone-800 dark:border-rose-900/60 hover:scale-105 transition-all flex items-center gap-2.5 group cursor-pointer"
        aria-label="Ask Janu's AI"
      >
        <div className="p-1.5 rounded-full bg-rose-500/20 text-rose-300">
          <Bot className="w-4 h-4" />
        </div>
        <span className="text-xs font-mono font-bold tracking-tight text-white dark:text-stone-100">
          Ask Janu's AI
        </span>
        <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
      </button>

      {/* AI Assistant Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-fade-up">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#1C1526] sm:rounded-2xl rounded-t-2xl shadow-2xl border border-rose-200 dark:border-rose-900/60 flex flex-col h-[580px] overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-rose-100 dark:border-rose-900/60 flex items-center justify-between bg-rose-50/90 dark:bg-[#231A2F]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-500/15 text-rose-700 dark:text-rose-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-serif-editorial text-stone-900 dark:text-stone-100">
                    Janu's AI Portfolio Guide
                  </h3>
                  <span className="text-[10px] font-mono text-stone-600 dark:text-stone-300">
                    Contextual AI • 100% Fact-Checked
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100 hover:bg-rose-500/10 dark:hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-stone-100/80 dark:bg-[#161021] border-b border-rose-100/60 dark:border-rose-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono whitespace-nowrap bg-white dark:bg-[#231A2F] text-stone-800 dark:text-stone-200 border border-rose-200 dark:border-rose-900/40 hover:border-rose-400 transition-colors shadow-2xs"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs sm:text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="p-1.5 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-400 shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-stone-900 text-white dark:bg-rose-600 dark:text-white font-medium rounded-tr-xs shadow-xs'
                        : 'bg-stone-100 dark:bg-[#251D31] text-stone-900 dark:text-stone-100 rounded-tl-xs border border-stone-200 dark:border-rose-900/40 font-normal'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="p-1.5 rounded-full bg-stone-800 text-stone-100 dark:bg-stone-700 dark:text-stone-200 shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs italic">
                  <Bot className="w-4 h-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-rose-100 dark:border-rose-900/60 flex items-center gap-2 bg-white dark:bg-[#1C1526]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about TripNest, AI projects, skills, contact..."
                className="flex-1 bg-stone-100 dark:bg-[#251D31] text-stone-900 dark:text-stone-100 placeholder:text-stone-500 dark:placeholder:text-stone-400 px-4 py-2.5 rounded-full text-xs sm:text-sm focus:outline-hidden border border-stone-200 dark:border-stone-700 focus:border-rose-400 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-stone-900 text-white dark:bg-rose-600 dark:text-white hover:bg-stone-800 dark:hover:bg-rose-500 transition-colors shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

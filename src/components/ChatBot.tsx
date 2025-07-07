
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  content: string;
  sender: 'user' | 'bot';
}

const INITIAL_BOT_MESSAGE: Message = {
  content: "Hi there! I'm Ponselvam. Thanks for visiting my portfolio. How can I help you today?",
  sender: 'bot'
};

const ChatBot: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string>('');
  const [keySubmitted, setKeySubmitted] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Try to get the API key from localStorage on component mount
  useEffect(() => {
    const storedKey = localStorage.getItem('AIzaSyAqNYbCMBk7mAtWv9TCNRJnBo7uDqmlPT4');
    if (storedKey) {
      setApiKey(storedKey);
      setKeySubmitted(true);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAPIKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Claude API key.",
        variant: "destructive",
      });
      return;
    }
    
    // Store the API key in localStorage
    localStorage.setItem('claude_api_key', apiKey);
    setKeySubmitted(true);
    
    toast({
      title: "API Key Saved",
      description: "Your Claude API key has been saved for this session.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
  
    const userMessage: Message = { content: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
  
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAqNYbCMBk7mAtWv9TCNRJnBo7uDqmlPT4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'model',
              parts: [{ text: msg.content }]
            })),
            {
              role: "user",
              parts: [{ text: inputValue }]
            }
          ]
        })
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error?.message || "Failed to get response from Gemini.");
      }
  
      const data = await response.json();
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
  
      const botMessage: Message = {
        content: botText,
        sender: "bot"
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini API error:", error);
      toast({
        title: "API Error",
        description: error instanceof Error ? error.message : "Something went wrong with Gemini.",
        variant: "destructive"
      });
  
      setMessages(prev => [
        ...prev,
        { content: "Sorry, I encountered an error. Please try again.", sender: "bot" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
      {/* Chat toggle button */}
      <Button 
        onClick={toggleChat} 
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-lg"
        aria-label="Chat with us"
      >
        <MessageSquare size={24} />
      </Button>

      {/* Chat dialog */}
      <div className={cn(
        "fixed bottom-24 right-6 w-80 md:w-96 max-h-[500px] bg-navy border border-slate-dark rounded-lg shadow-lg flex flex-col transition-all transform duration-300 z-50",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        {/* Chat header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-dark">
          <h3 className="text-lg font-medium text-white">Chat with Selva</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleChat} 
            className="h-8 w-8 rounded-full"
            aria-label="Close chat"
          >
            <X size={18} />
          </Button>
        </div>

        {!keySubmitted ? (
          // API Key submission form
          <div className="flex-1 p-4 flex flex-col">
            <p className="text-white mb-4">Please enter your Claude API key to use the chatbot:</p>
            <form onSubmit={handleAPIKeySubmit} className="space-y-4">
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full bg-slate-dark text-white"
              />
              <Button type="submit" className="w-full">
                Submit API Key
              </Button>
              <p className="text-xs text-slate">
                Your API key is stored locally in your browser and never sent to our servers.
              </p>
            </form>
          </div>
        ) : (
          <>
            {/* Messages container */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 min-h-[300px] max-h-[350px]">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "rounded-lg px-3 py-2 max-w-[90%]",
                    message.sender === 'user' 
                      ? "bg-mint text-navy self-end" 
                      : "bg-slate-dark text-white self-start"
                  )}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-slate-dark text-white self-start rounded-lg px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-dark flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded bg-slate-dark text-white focus:outline-none focus:ring-1 focus:ring-mint"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
              >
                <Send size={18} />
              </Button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBot;

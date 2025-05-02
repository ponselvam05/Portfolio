
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  sender: 'user' | 'bot';
}

const INITIAL_BOT_MESSAGE: Message = {
  content: "Hi there! I'm an AI assistant. How can I help you today?",
  sender: 'bot'
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message to the conversation
    const userMessage: Message = { content: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Simulate bot thinking and response (replace this with actual AI API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple response patterns (replace with actual AI functionality)
      let botResponse = '';
      const lowerCaseInput = inputValue.toLowerCase();
      
      if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
        botResponse = "Hello there! How can I help you today?";
      } else if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('reach')) {
        botResponse = "You can contact us through the form below or by email at hello@example.com.";
      } else if (lowerCaseInput.includes('service') || lowerCaseInput.includes('offer')) {
        botResponse = "We offer web development, app development, and design services. Is there something specific you'd like to know about?";
      } else if (lowerCaseInput.includes('price') || lowerCaseInput.includes('cost')) {
        botResponse = "Our pricing varies based on project requirements. For a custom quote, please fill out the contact form with your project details.";
      } else if (lowerCaseInput.includes('thank')) {
        botResponse = "You're welcome! Feel free to ask if you have any other questions.";
      } else {
        botResponse = "Thanks for your message! While I'm just a simple bot right now, our team will be happy to help with your inquiry. Would you like to use the contact form to reach out?";
      }
      
      const botMessage: Message = { content: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in chat response:', error);
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
          <h3 className="text-lg font-medium text-white">Chat Assistant</h3>
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
      </div>
    </>
  );
};

export default ChatBot;

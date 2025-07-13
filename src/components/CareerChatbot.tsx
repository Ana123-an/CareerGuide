import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface CareerChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareerChatbot: React.FC<CareerChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI Career Counselor. I can help you with career guidance, college selection, and aptitude-related questions. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'logical reasoning': "Great question! High logical reasoning aptitude suggests you'd excel in fields like:\n\n• Software Engineering & Programming\n• Data Science & Analytics\n• Management Consulting\n• Research & Development\n• Law & Legal Studies\n\nThese fields value problem-solving and analytical thinking. Would you like specific college recommendations for any of these areas?",
    
    'artistic mind': "Wonderful! Artistic minds have many exciting career paths:\n\n• Graphic Design & UI/UX\n• Architecture & Interior Design\n• Film & Media Production\n• Creative Writing & Content\n• Fashion Design\n• Digital Marketing & Branding\n\nMany of these fields now blend creativity with technology. Which artistic area interests you most?",
    
    'low cost': "Here are some excellent low-cost, high-return options:\n\n• Government Colleges (IITs, NITs, IIMs)\n• State Universities with good placement records\n• Online certifications + freelancing\n• Skill-based courses (coding bootcamps)\n• Community colleges abroad\n\nGovernment colleges often have fees under ₹2 lakhs with placements above ₹10 LPA. Would you like specific recommendations based on your domain?",
    
    'engineering': "Engineering offers diverse opportunities:\n\n• Computer Science: ₹6-25 LPA starting\n• Electronics: ₹5-20 LPA starting\n• Mechanical: ₹4-15 LPA starting\n• Civil: ₹3-12 LPA starting\n\nTop colleges: IITs, NITs, BITS. Entrance: JEE Main/Advanced. Skills needed: Math, Physics, Problem-solving. Want specific college recommendations?",
    
    'medical': "Medical field paths:\n\n• MBBS: 5.5 years, NEET required\n• Nursing: 4 years, good job security\n• Pharmacy: 4 years, pharma industry\n• Physiotherapy: 4.5 years, growing field\n\nTop colleges: AIIMS, CMC, JIPMER. Starting salaries: ₹3-15 LPA. High job satisfaction and social impact. Which medical field interests you?",
    
    'commerce': "Commerce career options:\n\n• CA: High earning potential (₹8-50 LPA)\n• Investment Banking: ₹10-40 LPA\n• Digital Marketing: ₹3-15 LPA\n• Business Analytics: ₹6-25 LPA\n\nTop colleges: SRCC, LSR, St. Xavier's. Entrance: CUET, college-specific tests. Skills: Analytics, Communication, Finance knowledge.",
    
    'abroad': "Studying abroad benefits:\n\n• Global exposure & networking\n• Better research opportunities\n• Higher starting salaries\n• Immigration opportunities\n\nPopular destinations:\n• USA: High costs, great ROI\n• Germany: Low/no fees, good placements\n• Canada: Moderate costs, immigration friendly\n• Australia: Good work opportunities\n\nWhich country interests you most?",
    
    'salary': "Salary expectations by field (starting):\n\n• Engineering: ₹4-25 LPA\n• Medical: ₹3-15 LPA\n• Commerce: ₹3-20 LPA\n• Arts: ₹2-10 LPA\n• Law: ₹3-18 LPA\n\nFactors affecting salary:\n• College reputation\n• Skills & certifications\n• Location\n• Industry demand\n\nRemember, growth potential matters more than starting salary!"
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    // Default responses for common patterns
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm here to help with your career questions. You can ask me about different fields, college recommendations, salary expectations, or study abroad options.";
    }
    
    if (message.includes('thank')) {
      return "You're welcome! Feel free to ask more questions about your career path. I'm here to help! 😊";
    }
    
    if (message.includes('college') && message.includes('recommend')) {
      return "I'd be happy to recommend colleges! Could you tell me:\n\n• Which field interests you? (Engineering, Medical, Commerce, etc.)\n• Your budget preference?\n• Location preference (India/Abroad)?\n• Your academic performance level?\n\nThis will help me give you personalized recommendations.";
    }

    // Default response
    return "That's an interesting question! While I have information about career guidance, college selection, and aptitude-related topics, I might not have specific details about that. \n\nYou can ask me about:\n• Career options for different aptitudes\n• College recommendations\n• Salary expectations\n• Study abroad options\n• Entrance exam guidance\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What career suits an artistic mind?",
    "Low-cost but high-return college options?",
    "Best engineering colleges in India?",
    "How to study abroad on a budget?",
    "What can I do with logical reasoning skills?"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-slideInUp">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">AI Career Counselor</h3>
            <p className="text-sm text-blue-100">Online now</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-white/20 p-1 rounded-lg transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-sm'
                  : 'bg-gray-100 text-gray-900 rounded-bl-sm'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-gray-600" />
              </div>
              <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Quick questions you can ask:</p>
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInputText(question)}
                className="block w-full text-left p-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all duration-300"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about careers, colleges, or aptitude..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerChatbot;
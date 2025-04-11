import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const qa = {
    'How much is spring replacement?':
      '💰 Spring replacement typically ranges from $149–$199 depending on your door size and spring type.',
    'Do you offer 24/7 emergency service?':
      '🚨 Yes! We offer emergency garage door repair 24 hours a day, 7 days a week.',
    'Where do you service?':
      '📍 We service Broward County and West Palm Beach with same-day availability.',
    'How much does opener installation cost?':
      '🔧 Garage door opener installs usually start at $299 depending on the model and motor type.'
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Chat bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600"
        >
          💬 Chat
        </button>
      )}

      {/* Chat box */}
      {isOpen && (
        <div className="w-80 bg-white shadow-2xl rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-800">Ask a question</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-700 text-sm">✕</button>
          </div>
          <div className="space-y-2 mb-3">
            {Object.keys(qa).map((q) => (
              <button
                key={q}
                onClick={() => setSelectedQuestion(q)}
                className="text-left text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-lg w-full hover:bg-gray-200"
              >
                {q}
              </button>
            ))}
          </div>
          {selectedQuestion && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-sm text-gray-800">
              <strong>Answer:</strong> <br />
              {qa[selectedQuestion]}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

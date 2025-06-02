import React, { useState, useEffect } from 'react';

const codeSnippets = [
  `function greet() {\n  console.log("Hello, NEXACODE!");\n}`,
  `const app = () => {\n  return <div>Welcome</div>;\n}`,
  `class Developer {\n  constructor(name) {\n    this.name = name;\n  }\n}`,
  `// NEXACODE: Next-gen editor\nconst run = () => {\n  // Your code here\n}`
];

const CodeAnimation = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let timer;

    if (isTyping) {
      // Typing effect
      if (displayedCode.length < snippet.length) {
        timer = setTimeout(() => {
          setDisplayedCode(snippet.substring(0, displayedCode.length + 1));
        }, 50);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      // Deleting effect
      if (displayedCode.length > 0) {
        timer = setTimeout(() => {
          setDisplayedCode(snippet.substring(0, displayedCode.length - 1));
        }, 30);
      } else {
        setIsTyping(true);
        setCurrentSnippet((currentSnippet + 1) % codeSnippets.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedCode, currentSnippet, isTyping]);

  return (
    <div className="w-full max-w-2xl bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex p-3 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4 text-green-400 font-mono text-sm md:text-base">
        <code>{displayedCode}</code>
      </pre>
    </div>
  );
};

export default CodeAnimation;

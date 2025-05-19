import React, { useState, useEffect } from 'react';

const codeLines = [
  'function automateTask() {',
  '  const devinAI = new DevinAgent();',
  '  // Initialize the AI agent',
  '  await devinAI.loadContext(repository);',
  '  const solution = await devinAI.solveTask({',
  "    description: 'Fix authentication bug',",
  "    priority: 'high',",
  '    testCases: testSuite',
  '  });',
  '  return solution;',
  '}',
];

const getColor = (line) => {
  if (line.includes('function')) return 'text-blue-400';
  if (line.includes('//')) return 'text-gray-400';
  if (line.includes('await devinAI.loadContext')) return 'text-purple-400';
  if (line.includes('const solution')) return 'text-green-400';
  if (
    line.includes('description') ||
    line.includes('priority') ||
    line.includes('testCases')
  )
    return 'text-yellow-400';
  if (line.includes('});')) return 'text-green-400';
  return '';
};

const CodeAnimation = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (lineIndex < codeLines.length) {
      const currentLine = codeLines[lineIndex];
      if (charIndex < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + currentLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + '\n');
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 150);
      }
    } else {
      timeout = setTimeout(() => {
        // Reset after complete typing
        setDisplayedCode('');
        setLineIndex(0);
        setCharIndex(0);
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), 500);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, isTyping]);

  const lines = displayedCode.split('\n');

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-700 font-mono text-sm text-gray-300 relative overflow-hidden w-full max-w-xl h-[300px]">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed h-full overflow-hidden">
        {lines.map((line, idx) => (
          <div key={idx} className={getColor(line)}>
            {line}
          </div>
        ))}
        {isTyping && <span className="inline-block  h-4 animate-ping  ml-1"> |</span>}
      </pre>
    </div>
  );
};

export default CodeAnimation;

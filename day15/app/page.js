'use client'

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const text = 'Welcome';  // Define the text you want to display

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200);  // Adjust typing speed (200ms)
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
        <h1 className="text-6xl font-bold text-blue-600">
          {displayedText}
          <span className="border-4 border-blue-600 animate-blink"></span> {/* Blinking cursor */}
        </h1>
     
    </main>
  );
}

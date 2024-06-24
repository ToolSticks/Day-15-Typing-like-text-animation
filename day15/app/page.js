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
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);  // Ensure the dependency array correctly includes the text variable

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
        <h1 className="text-6xl font-bold text-blue-600">
          {displayedText}
        </h1>
  
    </main>
  );
}

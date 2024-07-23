import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 30,
  pauseTime = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [charIndex, setCharIndex] = useState(-1);

  useEffect(() => {
    if (isDeleting) {
      if (charIndex >= 0) {
        setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setShowCursor(false);
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < texts[currentTextIndex].length) {
        setTimeout(() => {
            if (charIndex === -1) {
                setCharIndex(charIndex + 1);
            } else {
                setDisplayedText((prev) => prev + texts[currentTextIndex].charAt(charIndex));
                setCharIndex(charIndex + 1);
            }
        }, typingSpeed);
        setShowCursor(false);
      } else {
        setShowCursor(true);
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }
  }, [charIndex, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return <span className="typewriter">
          {displayedText}
          {
            showCursor && !isDeleting ? <span className="cursor">|</span> : null
          }
        </span>;
};

export default Typewriter;

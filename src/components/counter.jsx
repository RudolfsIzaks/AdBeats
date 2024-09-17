import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start counting when the element is visible
          observer.disconnect(); // Disconnect observer after it's triggered
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const incrementTime = Math.abs(Math.floor(duration / end));
    const counterInterval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(counterInterval);
      }
    }, incrementTime);

    return () => clearInterval(counterInterval); // Cleanup on unmount
  }, [isVisible, end, duration]);

  return <div ref={counterRef}>{count}</div>;
};

export default Counter;

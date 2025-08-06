"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = ({
  targetDate,
  className = "",
  showLabels = true,
  compact = false,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-red-500 font-bold">Event has started!</p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <span className="font-mono text-lg font-bold">
          {timeLeft.days}d {formatNumber(timeLeft.hours)}:
          {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="text-center">
        <div className="text-3xl font-bold font-mono">
          {formatNumber(timeLeft.days)}
        </div>
        {showLabels && (
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            Days
          </div>
        )}
      </div>

      <div className="text-2xl font-bold text-gray-400">:</div>

      <div className="text-center">
        <div className="text-3xl font-bold font-mono">
          {formatNumber(timeLeft.hours)}
        </div>
        {showLabels && (
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            Hours
          </div>
        )}
      </div>

      <div className="text-2xl font-bold text-gray-400">:</div>

      <div className="text-center">
        <div className="text-3xl font-bold font-mono">
          {formatNumber(timeLeft.minutes)}
        </div>
        {showLabels && (
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            Minutes
          </div>
        )}
      </div>

      <div className="text-2xl font-bold text-gray-400">:</div>

      <div className="text-center">
        <div className="text-3xl font-bold font-mono">
          {formatNumber(timeLeft.seconds)}
        </div>
        {showLabels && (
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            Seconds
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;

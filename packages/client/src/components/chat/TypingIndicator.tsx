import React from 'react';

const TypingIndicator = () => {
   return (
      <div className="flex self-start gap-2 px-3 py-1 rounded-xl bg-gray-200">
         <Dot />
         <Dot className="[animation-delay:200ms]" />
         <Dot className="[animation-delay:400ms]" />
      </div>
   );
};

type DotProps = {
   className?: string;
};

const Dot = ({ className }: DotProps) => {
   return (
      <p
         className={`w-2 h-2 bg-gray-800 rounded-full animate-pulse ${className}`}
      ></p>
   );
};

export default TypingIndicator;

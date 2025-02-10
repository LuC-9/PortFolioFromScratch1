// src/components/ui/BlurryBlob.tsx

import React from 'react';
import { cn } from '@/lib/utils';  // Importing the utility function

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export function BlurryBlob({ className, firstBlobColor, secondBlobColor }: BlobProps) {
  return (
    <div className={`min-h-52 min-w-52 items-center justify-center ${className}`}>
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            'absolute -right-10 -top-14 h-36 w-36 animate-pop-blob rounded-sm p-8 opacity-75 mix-blend-multiply blur-3xl filter',
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            'absolute -left-14 -top-32 h-36 w-36 animate-pop-blob rounded-sm p-8 opacity-75 mix-blend-multiply blur-3xl filter',
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}

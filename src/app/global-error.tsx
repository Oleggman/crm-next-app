'use client';

import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body className='flex items-center justify-center h-screen'>
        <div>
          <p className='text-blue-950 text-xl'>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
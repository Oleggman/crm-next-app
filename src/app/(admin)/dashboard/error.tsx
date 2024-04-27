'use client';

import React from 'react';
import { Button } from '@/app/components/button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex-col items-center justify-center'>
        <p className='text-lg'>{`Something went wrong. ${error.message}`}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
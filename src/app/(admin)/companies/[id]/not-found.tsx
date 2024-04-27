'use client';

import React from 'react';
import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex-col items-center justify-center'>
	      <p className='text-lg mb-3'>Could not found company</p>
	      <Link
		      href="/companies"
		      className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded hover:bg-gray-800 active:bg-gray-950">
	        Back to companies
	      </Link>
      </div>
    </div>
  );
}
'use client';

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
	const router = useRouter();
	useEffect(() => {
		router.replace('/dashboard');
	}, [router]);

  return (
    <div className="py-6 px-10">
      <p>Redirecting to Dashboard...</p>
    </div>
  );
}
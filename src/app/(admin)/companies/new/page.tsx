'use client';

import React from 'react';
import { CompanyForm } from '@/app/components/companyForm';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
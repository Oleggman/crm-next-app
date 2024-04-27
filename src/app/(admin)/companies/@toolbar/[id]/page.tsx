import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

export async function generateStaticParams() {
  const ids = ['1', '2', '3'];
  return ids.map((id) => ({
    params: { id },
  }));
}

export default function Page({}: PageProps) {
  return null;
}
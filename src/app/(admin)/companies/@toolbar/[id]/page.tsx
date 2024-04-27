import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page({}: PageProps) {
  return null;
}
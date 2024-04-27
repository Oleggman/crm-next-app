'use client';

import { Button } from '@/app/components/button'
import { useRouter } from 'next/navigation'

export const AddCompanyButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new')}>Add company</Button>
  );
}
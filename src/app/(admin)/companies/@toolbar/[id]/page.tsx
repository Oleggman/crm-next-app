import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/searchInput';
import { AddPromotionButton } from '@/app/components/addPromotionButton';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
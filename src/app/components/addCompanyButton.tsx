'use client';

import { CompanyFormProps } from '@/app/components/companyForm'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Button } from '@/app/components/button'
import { CompanyFormModal } from '@/app/components/companyFormModal'

// const CompanyFormModal = dynamic<CompanyFormProps>(
// 	() => import('./companyFormModal'),
// 	{ ssr: false }
// );

export const AddCompanyButton = () => {
	const [show, setShow] = useState(false);
	
	return (
		<>
			<Button onClick={() => setShow(true)}>Add company</Button>
			<CompanyFormModal
				onSubmit={console.log}
				show={show}
				onClose={() => setShow(false)}
			/>
		</>
	);
}
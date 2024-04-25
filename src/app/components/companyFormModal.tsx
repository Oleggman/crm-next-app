'use client';

import React from 'react'
import { ModalProps } from '@/app/components/modal'
import { CompanyForm, CompanyFormProps } from '@/app/components/companyForm'
import { Modal } from '@/app/components/modal'

export interface CompanyFormModalProps extends ModalProps {
	onSubmit: CompanyFormProps['onSubmit'];
}

export const CompanyFormModal = ({ onSubmit, ...rest }: CompanyFormModalProps) => {
	return (
		<Modal {...rest}>
			<CompanyForm onSubmit={onSubmit} />
		</Modal>
	);
}
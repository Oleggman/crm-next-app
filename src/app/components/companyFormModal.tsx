'use client';

import React from 'react';
import { CompanyForm } from '@/app/components/companyForm';
import { ModalProps, Modal } from '@/app/components/modal';

export const CompanyFormModal = ({ onClose, ...rest }: ModalProps) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
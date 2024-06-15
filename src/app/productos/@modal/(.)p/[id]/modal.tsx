'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }


  const handleReload = () => {
    window.location.reload(); // Actualiza la página
};

  return createPortal(
    <div>
      <div className="modal-backdrop" onClick={onDismiss} />
      <dialog ref={dialogRef} className="modal flex flex-col" onClose={onDismiss}>
        {children}
        <button className='text-sm' onClick={handleReload}>Más Información...</button>
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-products')!
  );
}
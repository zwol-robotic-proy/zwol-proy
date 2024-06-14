'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export function Modal({ children, link }: { children: React.ReactNode, link:string }) {
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

  return createPortal(
    <div>
      <div className="modal-backdrop" onClick={onDismiss} />
      <dialog ref={dialogRef} className="modal flex flex-col" onClose={onDismiss}>
        {children}
        <Link className='mt-5 text-sm bottom-2' href={`/${link}`} >Más Información...</Link>
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-products')!
  );
}
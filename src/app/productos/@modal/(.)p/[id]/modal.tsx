'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

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
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center z-[1000]" onClick={onDismiss} />
      <dialog ref={dialogRef} className="max-w-[500px] max-h-[500px] border-none rounded-xl flex justify-center items-center size-12 font-medium nth-1:relative nth-1:z-[1000] nth-1:object-contain h-full w-full" onClose={onDismiss}>
        {children}
        <div className='z-[1001] absolute bottom-5'>
          <button className='text-sm hover:font-semibold ' onClick={handleReload}>Más Información...</button>
        </div>
        <button onClick={onDismiss} className="absolute top-2.5 right-2.5 w-12 h-12 bg-transparent border-none rounded-2xl cursor-pointer flex items-center justify-center font-medium size-6 hover:bg-slate-100 after:text-black after:content-['X']" />
      </dialog>
    </div>,
    document.getElementById('modal-products')!
  );
}
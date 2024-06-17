'use client';
import React, { type ElementRef, useEffect, useRef } from 'react';
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
  };

  const handleReload = () => {
    window.location.reload();
  };

  return createPortal(
    <div className={`select-none`} >
      <div className="absolute w-full top-0 -bottom-[57%] bg-black/70 z-[1001]" onClick={onDismiss} />
      <dialog ref={dialogRef} className="min-w-[500px] min-h-[500px] border-none rounded-xl flex justify-center items-center size-12 font-medium nth-1:object-contain" onClose={onDismiss}>
        {children}
        <div className='w-full h-10 bottom-0 flex items-center justify-center absolute border-solid border-zwol-1 border-t-2 hover:bg-zwol-1/50 hover:text-white'>
          <button className='text-sm h-full w-full' onClick={handleReload}>Más Información...</button>
        </div>
        <button onClick={onDismiss} className="absolute top-2.5 right-2.5 p-1 rounded-full bg-transparent hover:bg-zwol-1 after:hover:text-white cursor-pointer flex items-center justify-center font-medium size-6 after:text-zwol-1 after:content-['X']" />
      </dialog>
    </div>,
    document.getElementById('modal-products')!
  );
}
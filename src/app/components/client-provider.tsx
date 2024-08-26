'use client';

import React from 'react';
import { AuthContextProvider } from '@/app/context/AuthContext';
import Navbar from '@/app/components/navbar';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <Navbar />
      {children}
    </AuthContextProvider>
  );
}

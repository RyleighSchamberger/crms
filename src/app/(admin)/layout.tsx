import React from 'react';

import Navbar from '../components/navbar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export interface NavbarProps {}

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <nav className='p-4 bg-[#b0beb3]'>
      <div className='container mx-auto flex items-center justify-between '>
        <Link href='/' passHref>
          <Image width={149} height={48} src='/icons/logo.svg' alt='Logo' />
        </Link>
        <div className='flex space-x-4'>
          {user ? (
            <button
              className='text-white hover:text-gray-100'
              onClick={() => {
                logout();
                router.push('/login');
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link href='/signup' passHref>
                <span className='text-white hover:text-gray-100 cursor-pointer'>
                  Signup
                </span>
              </Link>
              <Link href='/login' passHref>
                <span className='text-white hover:text-gray-100 cursor-pointer'>
                  Login
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

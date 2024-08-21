'use client';

import InputField from '@/app/components/input-field';
import React from 'react';

interface AuthFormProps {
  title: string;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

export default function AuthForm({
  title,
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  buttonText,
}: AuthFormProps) {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md  bg-white rounded-lg shadow-md'>
        <div className='bg-[#4ac384] rounded-t-lg py-2'>
          <h2 className='text-2xl font-bold text-center '>{title}</h2>
        </div>
        <div className='p-8'>
          <form className='space-y-4' onSubmit={onSubmit}>
            <InputField
              id='email'
              label='Email Address'
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              id='password'
              label='Password'
              type='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              showPassword={true}
            />

            <div>
              <button
                type='submit'
                className='w-full px-4 py-2 font-medium bg-[#4ac384] rounded-lg shadow-lg hover:bg-[#39ad71] hover:shadow-sm focus:outline-none  focus:ring--[#2a7d52] '
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

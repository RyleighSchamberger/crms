'use client';

import InputField from '@/app/components/input-field';
import React, { useState } from 'react';

interface AuthFormProps {
  title: string;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  onGoogleLogin: () => void;
}

export default function AuthForm({
  title,
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  buttonText,
  onGoogleLogin,
}: AuthFormProps) {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    let valid = true;
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md'>
        <div className='bg-[#4ac384] rounded-t-lg py-2'>
          <h2 className='text-2xl font-bold text-center'>{title}</h2>
        </div>
        <div className='p-8'>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <InputField
                id='email'
                label='Email Address'
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
              )}
            </div>

            <div>
              <InputField
                id='password'
                label='Password'
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                showPassword={true}
              />
              {errors.password && (
                <p className='mt-1 text-sm text-red-500'>{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type='submit'
                className='w-full px-4 py-2 font-medium bg-[#4ac384] rounded-lg shadow-lg hover:bg-[#39ad71] hover:shadow-sm focus:outline-none focus:ring--[#2a7d52]'
              >
                {buttonText}
              </button>
            </div>
            <div>
              <button
                type='button'
                onClick={onGoogleLogin}
                className='w-full px-4 py-2 font-medium bg-[#4ac384] rounded-lg shadow-lg hover:bg-[#39ad71] hover:shadow-sm focus:outline-none focus:ring--[#2a7d52]'
              >
                Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

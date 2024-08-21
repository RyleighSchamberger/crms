'use client';

import AuthForm from '@/app/components/auth-form';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const { signup } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm
      title='Sign Up'
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      buttonText='Sign Up'
    />
  );
}

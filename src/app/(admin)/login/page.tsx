'use client';

import AuthForm from '@/app/components/auth-form';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm
      title='Login'
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      buttonText='Login'
    />
  );
}

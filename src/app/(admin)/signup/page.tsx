'use client';

import AuthForm from '@/app/components/auth-form';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const { signup, googleLogin } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.push('/dashboard');
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
      onGoogleLogin={handleGoogleLogin}
    />
  );
}

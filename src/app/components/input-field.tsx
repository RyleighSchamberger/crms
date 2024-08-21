import { useState } from 'react';
import Image from 'next/image';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  placeholder: string;
}

export default function InputField({
  id,
  label,
  type,
  value,
  onChange,
  showPassword,
  placeholder,
}: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className='relative'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={showPassword && isPasswordVisible ? 'text' : type}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-[#2f885a] focus:border-[#2a7d52] sm:text-sm'
      />
      {showPassword && (
        <div
          className='absolute right-0 flex items-center pr-3 top-[32px] cursor-pointer'
          onClick={handlePasswordVisibility}
        >
          <Image
            src={isPasswordVisible ? '/icons/eye-slash.svg' : '/icons/eye.svg'}
            alt='Toggle password visibility'
            width={18}
            height={18}
          />
        </div>
      )}
    </div>
  );
}

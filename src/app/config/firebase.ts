import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASRUgwHz9ISYsIYUJFktYvtJHRadzSygs',
  authDomain: 'crm-nextjs-824f8.firebaseapp.com',
  projectId: 'crm-nextjs-824f8',
  storageBucket: 'crm-nextjs-824f8.appspot.com',
  messagingSenderId: '891925658019',
  appId: '1:891925658019:web:940acd665ae09bc0b08216',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

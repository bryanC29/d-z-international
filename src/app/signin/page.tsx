'use client';

import Link from 'next/link';
import Carousel_signin from '@/components/carousel_signin/page';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  validateName,
  validateEmail,
  validateMobile,
  validatePasswords,
} from '@/util/validate/validate';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const mobileError = validateMobile(mobile);
    const passwordError = validatePasswords(password, confirmPassword);

    if (nameError || emailError || mobileError || passwordError) {
      setError({
        name: nameError,
        email: emailError,
        mobile: mobileError,
        password: passwordError,
      });
      return;
    }

    setError({ name: '', email: '', mobile: '', password: '' });

    const data = { password, email, name, number: mobile };

    try {
      const response = await axios.post(
        'https://d-z-international-backend.onrender.com/auth/register',
        data
      );

      if (response.status === 201) {
        router.push('/');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 409) {
          setError((prev) => ({
            ...prev,
            email: 'User with this email already exists.',
          }));
        } else {
          alert(
            `Registration failed: ${error.response?.data?.message || 'Something went wrong.'}`
          );
        }
      } else {
        alert('Unexpected error occurred. Check console for details.');
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="bg-neutral-800 flex justify-center items-center">
        <div className="md:w-[60%] w-[90%] my-10 flex items-center justify-center rounded-2xl shadow-lg md:h-[110vh]">
          <div className="w-full hidden rounded-l-md h-[110vh] md:inline-block">
            <Carousel_signin />
          </div>
          <div className="bg-black p-7 md:p-4 w-full rounded-2xl md:h-[110vh] md:rounded-l-none flex flex-col justify-center ">
            <p className="text-3xl text-center font-bold py-10 pt-5 text-white">
              Sign In
            </p>
            <form onSubmit={handleSubmit} className="pb-5" action="">
              <label className="block text-lg text-white" id="name" htmlFor="">
                Name:
              </label>
              {error.email && <p className="text-red-500">{error.name}</p>}
              <input
                className="w-full mb-3 border-2 border-black rounded-md p-2"
                placeholder="John Doe"
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="block text-lg text-white" id="email" htmlFor="">
                Email:
              </label>
              {error.email && <p className="text-red-500">{error.email}</p>}
              <input
                className="w-full mb-3 border-2 border-black rounded-md p-2"
                placeholder="john.doe@example.com"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className="block text-lg text-white"
                id="contact"
                htmlFor=""
              >
                Contact number:
              </label>
              {error.mobile && <p className="text-red-500">{error.mobile}</p>}
              <input
                className="w-full mb-3 border-2 border-black rounded-md p-2"
                placeholder="+91 1234567890"
                type="tel"
                name="contact"
                id="contact"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <label
                className="block text-lg text-white"
                id="password"
                htmlFor=""
              >
                Password:
              </label>
              <input
                className="block w-full mb-3 border-2 border-black rounded-md p-2"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="block text-lg text-white"
                id="confirmpassword"
                htmlFor=""
              >
                Confirm Password:
              </label>
              {error.password && (
                <p className="text-red-500">{error.password}</p>
              )}
              <input
                className="block w-full mb-5 border-2 border-black rounded-md p-2"
                placeholder="Repeat Password"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className="mb-7 mr-2"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className="text-lg text-white " id="remember" htmlFor="">
                Remember Me
              </label>
              <button
                className="bg-slate-700 rounded-md mb-6 px-3 py-1 block w-full text-lg text-white border-white hover:bg-slate-800"
                type="submit"
              >
                Register
              </button>
              <hr className="m-4"></hr>
              {/* <Link href="/signin"className="bg-black rounded-md  px-3 py-1 mb-7 block w-full text-white text-lg border-2 border-white hover:text-black hover:bg-white" type="submit">Register</Link> */}
              <p className="text-white text-center text-lg">
                Already a user? |{' '}
                <Link href="/login" className="underline italic">
                  Login In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

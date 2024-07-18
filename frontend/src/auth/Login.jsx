import React from 'react'
import bgImg from '../assets/backgroung_img.png'
import dentistImg from '../assets/dentist.png'
import { IoLogoGithub } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { startTransition } from 'react';

const InputField = ({type, placeholder, labelText}) => {
  return(
    <div className='flex flex-col gap-2'>
      <label className='text-[#616161] font-semibold'>{labelText}</label>
      <input type={type}  placeholder={placeholder} className='outline-none w-[25rem] h-12 pl-4 rounded-md border-2 border-[#E0E0E0]'/>
    </div>
  )
}

const Login = () => {
  const navigate = useNavigate();
  const loginButtonStyle = 'flex flex-row justify-center items-center gap-2 w-48 bg-[#FAFAFA] border-[#EEEEEE] border-2 rounded-full text-sm h-11 text-[#616161] font-regular'
  
  const handleRegisterNavigate = () => {
    startTransition(() => {
      navigate("/register")
    })
  }

  return (
    <div className='flex flex-row w-screen h-screen px-0 py-0'>
      <img className=' z-0 w-full h-full object-cover absolute left-[-8rem]' src={bgImg} alt='bg-img'/>
      <div className=' z-10 w-1/2'>
        <h1 className='text-white text-[2.5rem] mt-20 ml-20 font-outfit font-semibold'>
          Welcome Back
        </h1>
        <img className='absolute w-[800px] bottom-10' src={dentistImg} alt='dentist-img'/>
      </div>
      <div className=' w-1/2 z-10 flex pt-20 flex-col gap-4 font-zenkaku'>
        <h1 className='tracking-wider text-[2.5rem] bg-gradient-to-r from-[#30AFF6] to-[#516FD7] w-fit text-transparent bg-clip-text font-semibold font-outfit'>
          Login to your account
        </h1>
        <div className='flex flex-row gap-2'>
          <button className={loginButtonStyle}>
            <FcGoogle style={{fontSize: '1.2rem'}}/>
            Log in with Google
          </button>
          <button className={loginButtonStyle}>
            <IoLogoGithub style={{fontSize: '1.2rem'}} />
            Log in with Github
          </button>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <span className='w-36 h-[1px] bg-[#E0E0E0]'></span>
          <p className='text-[#616161] w-fit'>Or use email</p>
          <span className='w-36 h-[1px] bg-[#E0E0E0]'></span>
        </div>
        <InputField type="text" placeholder="Enter your username" labelText="Username"/>
        <InputField type="password" placeholder="Enter your password" labelText="Password"/>
        <InputField type="password" placeholder="Confirm your username" labelText="Confirm Password"/>
        <div>
          <button className='bg-gradient-to-r from-[#25BEEF] to-[#3B82F6] w-[25rem] h-12 font-black tracking-wider rounded-full text-lg text-white hover:border-[3px] transition-all hover:border-[#3B82F6] hover:from-white hover:text-[#3B82F6]'>
            Login
          </button>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <span className='w-44 h-[1px] bg-[#E0E0E0]'></span>
          <p className='text-[#616161] w-fit'>Or </p>
          <span className='w-44 h-[1px] bg-[#E0E0E0]'></span>
        </div>
        <div className='flex justify-center rounded-full p-[3px] bg-gradient-to-r from-[#25BEEF] to-[#3B82F6] w-[25rem] h-12'>
          <button onClick={handleRegisterNavigate} className='h-full w-full bg-white font-bold tracking-wider rounded-full text-lg text-[#3B82F6] hover:bg-transparent hover:text-white transition-all'>
            Create a new account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

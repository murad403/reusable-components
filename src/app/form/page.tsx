"use client"
import FormHandle from '@/components/form/FormHandle'
import FormInput from '@/components/form/FormInput'
import React from 'react'

type TRegisterData = {
    name: string;
    email: string;
    password: string;
}

const FormPage = () => {
    const onsubmit = (data: TRegisterData) =>{
        console.log(data)
    }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-1/3 p-5 rounded-lg bg-gray-100'>
      <h2 className='text-gray-800 font-semibold text-xl text-center'>Register Form With Zod Validation</h2>
        <FormHandle onSubmit={onsubmit}>
            <FormInput type='text' name='name' label='name'></FormInput>
            <FormInput type='email' name='email' label='email'></FormInput>
            <FormInput type='text' name='password' label='password'></FormInput>
            <button className='bg-purple-400 rounded-lg py-2 w-full text-white font-semibold'>Register</button>
        </FormHandle>
      </div>
    </div>
  )
}

export default FormPage

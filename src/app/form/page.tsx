"use client"
import FormHandle from '@/components/form/FormHandle'
import FormInput from '@/components/form/FormInput'
import z from "zod";

const RegisterZodValidation = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 character long")
    .refine((val) => /[A-Z]/.test(val), {
        message: "At least one uppercase letter (A-Z) is required."
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "At least one lowercase letter (a-z) is required",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "At least one number (0-9) is required",
    })
    .refine((val) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val), {
      message: "At least one special character (!@#$%^&*) is required",
    })
})

type TRegisterData = {
    name: string;
    email: string;
    password: string;
}

const FormPage = () => {
    const onsubmit = (data: TRegisterData) =>{
        console.log("data", data)
    }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-1/3 p-5 rounded-lg bg-gray-100'>
      <h2 className='text-gray-800 font-semibold text-xl text-center'>Register Form With Zod Validation</h2>
        <FormHandle onSubmit={onsubmit} resolver={RegisterZodValidation}>
            <FormInput type='text' name='name' label='name'></FormInput>
            <FormInput type='email' name='email' label='email'></FormInput>
            <FormInput type='text' name='password' label='password'></FormInput>
            <button type='submit' className='bg-purple-400 rounded-lg py-2 w-full text-white font-semibold cursor-pointer'>Register</button>
        </FormHandle>
      </div>
    </div>
  )
}

export default FormPage

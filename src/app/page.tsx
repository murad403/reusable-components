"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import z from 'zod';

// zod validation=====================
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long.")
    .refine((val) => /[A-Z]/.test(val), {
      message: "At least one uppercase letter (A-Z) is required.",
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

// type define============================
type TFormData = z.infer<typeof loginSchema>


// main components============================
const HomePage = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<TFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: TFormData) => {
    console.log("Form input data", data);
  };

  return (
    <div className='text-black'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='block text-sm'>Email</label>
          <input {...register("email")} type="email" className='appearance-none outline-none border border-gray-700 rounded-sm px-5 py-2' />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className='block text-sm'>Email</label>
          <input {...register("password")} type="text" className='appearance-none outline-none border border-gray-700 rounded-sm px-5 py-2' />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type='submit' className='bg-green-300 rounded-sm px-5 py-2 text-white cursor-pointer'>Login</button>
      </form>
      <Link href={'/form'}>Form</Link>
    </div>
  )
}

export default HomePage

// "use client"
import { useFormContext } from 'react-hook-form'

type TProps = {
    label: string,
    type: string,
    name: string
}

const FormInput = ({label, type, name}: TProps) => {
    const {register} = useFormContext();
  return (
    <div className='mb-2'>
      <label className='text-sm font-semibold text-gray-800 block capitalize'>
        {label ? label : ''}
      </label>
      <input type={type} {...register(name)} className='w-full border border-purple-400 rounded-lg py-2 bg-white outline-purple-400 px-3'/>
    </div>
  )
}

export default FormInput

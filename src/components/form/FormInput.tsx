"use client"
import { useFormContext } from 'react-hook-form'

type TProps = {
    label: string,
    type: string,
    name: string
}

const FormInput = ({ label, type, name }: TProps) => {
    const { 
        register,
        formState: { errors }  
    } = useFormContext();

    const error = errors[name]; 

    return (
        <div className="mb-4">
            <label className="text-sm font-semibold text-gray-800 block capitalize">
                {label}
            </label>
            <input 
                type={type} 
                {...register(name)} 
                className={`w-full border rounded-lg py-2 px-3 bg-white outline-purple-400 mt-1 
                    ${error ? 'border-red-500' : 'border-purple-400'}`} 
            />
            
            {/* এখানে error message দেখাবে */}
            {error && (
                <p className="text-red-500 text-xs mt-1">
                    {error.message as string}
                </p>
            )}
        </div>
    )
}

export default FormInput
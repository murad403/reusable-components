/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TProps = {
    onSubmit: SubmitHandler<any>,
    children: ReactNode,
    resolver?: any
}

const FormHandle = ({ onSubmit, children, resolver }: TProps) => {
    const methods = useForm({
        resolver: resolver ? zodResolver(resolver) : undefined,
        mode: "onTouched",           // <-- এটা যোগ কর
        reValidateMode: "onChange",  // <-- এটা যোগ কর
        defaultValues: {             // <-- এটা যোগ কর (সবচেয়ে গুরুত্বপূর্ণ)
            name: "",
            email: "",
            password: ""
        }
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default FormHandle
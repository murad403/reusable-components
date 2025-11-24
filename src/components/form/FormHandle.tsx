/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TProps = {
    onSubmit: SubmitHandler<any>,
    children: ReactNode,
    resolver?: any
}

const FormHandle = ({ onSubmit, children, resolver }: TProps) => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default FormHandle

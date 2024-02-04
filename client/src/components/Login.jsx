
import React from 'react'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from "@hookform/error-message"
import { useFormState } from "react-dom";
import { NavLink } from 'react-router-dom';

const Login = ({handleLogin,error}) => {
   // const [state, formAction] = useFormState(registerAction, { error: null })
   const { register, formState: { errors, touchedFields, isDirty, isValid, isSubmitting },handleSubmit } = useForm({
    mode: 'onBlur' || 'onSubmit'
})

  return (
    <div className='my-16'>
            <h1 className="text-center  font-bold text-4xl my-5">Login</h1>

            <section className=" w-1/4 mx-auto max-h-fit" >
            {error && (
        <div role="alert" className="alert alert-error mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
                {/* {state?.error && (<div role="alert" className="alert alert-error mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{state.error}</span>
                </div>)} */}
                <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className=" mb-4">
                        <label htmlFor="email" className=" text-sm block mr-7 mb-2 w-full">Email</label>
                        <input type="text" className={` input input-bordered 
                        ${errors.email && 'input-error'}  ${(touchedFields.email && !errors.email) && 'input-success'} w-full `} name="email" id="title" {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: 'Please enter a valid email address.'
                            },
                        
                        })}
                            autoComplete='off'
                        />
                        <ErrorMessage errors={errors} name="email" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="password" className=" text-sm block mr-7 mb-2 w-full">Password</label>
                        <input type="password" className={` input input-bordered 
                        ${errors.password && 'input-error'}  ${(touchedFields.password && !errors.password) && 'input-success'} w-full `} name="password" id="title" {...register('password', {
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long.'
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'Password should contain a mix of uppercase, lowercase, numbers, and special characters for security.'
                            },
                            required: 'Password is required.',

                        })}

                        />
                        <ErrorMessage errors={errors} name="password" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                    </div>


                    <div className="w-full text-center my-6">

                        <button type="submit" disabled={!isDirty || !isValid || isSubmitting} className=" text-md  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg  bg-[#2ea44f] mx-3 text-[#ffffff] px-4 py-2 w-24">Login</button>
                    </div>
                </form>
                <p className='text-center text-sm '>Don't have an account? <NavLink  to="/register" className='text-blue-600 hover:underline underline-offset-2'>Register</NavLink></p>
            </section>
        </div>
  )
}

export default Login 
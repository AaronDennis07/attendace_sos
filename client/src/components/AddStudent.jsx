import { ErrorMessage } from "@hookform/error-message"
import { useState } from "react"
import { useForm } from 'react-hook-form'



const AddStudent = ({handleNewStudent,error}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting }
  } = useForm({
    mode: 'onBlur' || 'onSubmit',
  });
  const [subError, setSubError] = useState({ error: null });

  return (
    <div>
      <h1 className="text-center  font-bold text-4xl my-5">Add Student</h1>

      <section className=" w-1/2 mx-auto">
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
            <span>{subError.error}</span>
          </div>
        )}
        <form className="w-full    min-h-screen " onSubmit={handleSubmit(handleNewStudent)}>
          <div className=" mb-4">
            <label htmlFor="name" className=" text-lg block mr-7 mb-2 w-full">
              Name
            </label>
            <input
              type="text"
              className={` input input-bordered 
         ${errors.name && 'input-error'}  ${
                touchedFields.name && !errors.name && 'input-success'
              } w-full `}
              name="name"
              id="name"
              {...register('name', {
                required: 'name is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="department"
              className="text-lg block mr-7 mb-2 w-full"
            >
              {' '}
              USN
            </label>
            <input
              type="text"
              className={` input input-bordered 
         ${errors.usn && 'input-error'}  ${
                touchedFields.usn && !errors.usn && 'input-success'
              } w-full `}
              name="usn"
              id="usn"
              {...register('usn', {
                required: ' usn is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="usn"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="department"
              className="text-lg block mr-7 mb-2 w-full"
            >
              {' '}
              Department
            </label>
            <input
              type="text"
              className={` input input-bordered 
         ${errors.department && 'input-error'}  ${
                touchedFields.department &&
                !errors.department &&
                'input-success'
              } w-full `}
              name="department"
              id="department"
              {...register('department', {
                required: ' department is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="department"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-lg block mr-7 mb-2 w-full"
            >
              {' '}
              Email
            </label>
            <input
              type="text"
              className={` input input-bordered 
         ${errors.email && 'input-error'}  ${
                touchedFields.email &&
                !errors.email &&
                'input-success'
              } w-full `}
              name="email"
              id="email"
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>
          {/* <div className=" mb-4">
            <label htmlFor="email" className=" text-sm block mr-7 mb-2 w-full">
              Email
            </label>
            <input
              type="text"
              className={` input input-bordered 
                        ${errors.email && 'input-error'}  ${
                touchedFields.email && !errors.email && 'input-success'
              } w-full `}
              name="email"
              id="title"
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Please enter a valid email address.',
                },
              })}
              autoComplete="off"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="semester" className="text-lg block mr-7 mb-2 w-full">
              {' '}
              semester
            </label>
            <input
              type="number"
              className={` input input-bordered 
         ${errors.semester && 'input-error'}  ${
                touchedFields.semester && !errors.semester && 'input-success'
              } w-full `}
              name="semester"
              id="semester"
              {...register('semester', {
                required: ' semester is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="semester"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="section" className="text-lg block mr-7 mb-2 w-full">
              {' '}
              Section
            </label>
            <input
              type="text"
              className={` input input-bordered 
              ${errors.section && 'input-error'}  ${
                touchedFields.section && !errors.section && 'input-success'
              } w-full `}
              name="section"
              id="section"
              {...register('section', {
                required: ' section is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="section"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>

          <div className="w-full text-center my-6">
            <button className="btn text-lg bg-[#bb1a34]">Cancel</button>
            <button type="submit" className="bg-[#2c974b] btn text-lg mx-7">
              {isSubmitting ? 'Submitting..' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddStudent;

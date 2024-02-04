import { ErrorMessage } from "@hookform/error-message"
import { useState } from "react"
import { useForm } from 'react-hook-form'





const NewApplication = ({handleNewApplication,error,uploadFile}) => {
  const { register, handleSubmit, formState: { errors, touchedFields,isSubmitting } } = useForm({
    mode: 'onBlur' || 'onSubmit'
})
const [subError, setSubError] = useState({ error: null })

const handleImageChange = (e)=>{
    console.log("hi")
   uploadFile( e.target.files[0])
}

  return (
    <div>
       <h1 className="text-center  font-bold text-4xl my-5">New Application</h1>

<section className=" w-1/2 mx-auto" >
    {error&& (<div role="alert" className="alert alert-error mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
    </div>)}
    <form  className="w-full    min-h-screen " onSubmit={handleSubmit(handleNewApplication)}>
        <div className=" mb-4">
            <label htmlFor="reason" className=" text-lg block mr-7 mb-2 w-full">Reason</label>
            <input type="text" className={` input input-bordered 
            ${errors.reason && 'input-error'}  ${(touchedFields.reason && !errors.reason) && 'input-success'} w-full `} name="reason" id="reason"  {...register('reason', {
                required: 'Reason is required',
            })}

            />
            <ErrorMessage errors={errors} name="reason" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>
        <div className="mb-4">
            <label htmlFor="days" className="text-lg block mr-7 mb-2 w-full">No. of days</label>
            <input type="text" className={` input input-bordered 
            ${errors.days && 'input-error'}  ${(touchedFields.days && !errors.days) && 'input-success'} w-full `} name="days" id="days"  {...register('days', {
                required: 'No. of days is required',
            })}

            />
            <ErrorMessage errors={errors} name="days" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>
        <div className="mb-4">
            <label htmlFor="document" className="text-lg block mr-7 mb-2 w-full">Document </label>
            <input type="file" onChange={handleImageChange} className={` file-input file-input-bordered 
            ${errors.document && 'file-input-error'}  ${(touchedFields.document && !errors.document) && 'file-input-success'} w-full `} name="document" id="document"  {...register('document', {
                required: 'document is required',
                onChange:handleImageChange
            },

            )}

            />
            <ErrorMessage errors={errors} name="document" render={({ message }) => <p className='text-red-600'>Document</p>} />          </div>
        <div className="mb-4">
            <label htmlFor="title" className="text-lg block mr-7 mb-2 w-full">Description</label>
            <textarea className={`textarea textarea-bordered w-full h-56  ${errors.description && 'textarea-error'}  ${(touchedFields.description && !errors.description) && 'input-success'} w-full `} name="description" id="description"  {...register('description', {
                required: 'Description is required',
                maxLength: {
                    value: 100,
                    message: 'Description must contain atmost 100 characters'
                }
            })} ></textarea>
            <ErrorMessage errors={errors} name="description" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>

        <div className="w-full text-center my-6">
            <button className="btn text-lg bg-[#bb1a34]">Cancel</button>
            <button type="submit" className='bg-[#2c974b] btn text-lg mx-7'>{isSubmitting ? 'Submitting..' :'Submit'}</button>
        </div>
    </form>
</section>
    </div>
  )
}

export default NewApplication
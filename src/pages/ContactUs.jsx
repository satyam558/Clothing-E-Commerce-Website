import { useForm } from "react-hook-form"

const FormValidation = ()=>{
    const {register,handleSubmit,reset} = useForm();

    function SignUp(data){
        console.log(data);
        alert(JSON.stringify(data));
        reset();
        
    }

    return(
        <>
          <form action="" onSubmit={handleSubmit(SignUp)} className="col-lg-6 mx-auto my-5 shadow p-5 w-50">
            <h1 className="text-center text-capitalize">contact us</h1>
             <div className="mt-4">
                <input type="text" {...register('username')} placeholder="enter your name" className="form-control text-capitalize p-3" />
             </div>
             <div className="mt-4">
                <input type="text" {...register('usernumber')} placeholder="enter your number" className="form-control text-capitalize p-3" />
             </div>
             <div className="mt-4">
                <input type="text" {...register('userEmail')} placeholder="enter your email" className="form-control text-capitalize p-3" />
             </div>
             <div className="mt-4 input-group-text text-capitalize text-indent-2 gap-2">
                <input type="checkbox" className="form-check-input p-3" {...register('checkbox')} value="Agreed via phone/email" />i agree to be contacted via email/phone.
             </div>
             <div className="mt-4">
                <button className="btn btn-outline-success">submit</button>
             </div>
          </form>
        </>
    )
}

export default FormValidation;
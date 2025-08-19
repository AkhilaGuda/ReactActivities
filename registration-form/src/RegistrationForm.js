import React,{  useState} from "react";
import validator from 'validator';
export  default function RegistrationForm (){
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[errors,setErrors]=useState({});
    const[success,setSuccess]=useState(false);

    const handleForm =(e)=>{
        e.preventDefault();
        let formErrors={};
        if(!userName.trim()){
            formErrors.userName="UserName is required";
        }
        if(password.length<8){
            formErrors.password="Password should atleast 8 characters";
        }
        if(!confirmPassword.trim()){
            formErrors.confirmPassword="confirm password is required";
        }
        if(password!==confirmPassword){
            formErrors.notMatched="confirm password did not matched with password "
        }
        setErrors(formErrors);
        if(Object.keys(errors).length===0){
            setSuccess(true);
            setFormData();
        }
        else{
            setSuccess(false);
        }
    }
    const setFormData =()=>{
        setUserName("");
        setPassword("");
        setConfirmPassword("");
    }
    const evaluateStrength =(password)=>{
        if(password.length<6){
            return 'weak';
        }
        else if(validator.isStrongPassword(password,{ minLength:8, minLowerCase:1,minUppeCase:1,minNumber:1})){
            return 'Strong';
        }
        else{
            return 'medium';
        }
    }
   
    return(
        <>
        <h1>RegistrationForm</h1>
        <form onSubmit={handleForm}>
        <div>
            <label>UserName: </label>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div>
            <label>Password :</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {password && (<p>Password strength: {evaluateStrength(password)}</p>)}
            {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        {errors.notMatched && <p>{errors.notMatched}</p>}
        
        <button type="submit">Register</button>
        
        </form>
          
        {success && <p>Successfully registered</p> }
        </>
    )
}
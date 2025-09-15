import React, { useState } from 'react'

const Validation = () => {

  const [name , setName]=  useState();
  const [email, setEmail]=useState();
  const [nameError,setNameError]= useState(false);
  const [emailError, setEmailError]= useState(false);
  const emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleName = (e)=>{
    let name = e.target.value;
    if(name.length<3){
setNameError(true);
    }
    else{

      setNameError(false)
    }

  }
  const handleEmail=(e)=>{
   let email = e.target.value;
   if(!email.match(emailregex)){

    setEmailError(true)
   }
   else{
    setEmailError(false)
   }



  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(e.target[0].value + "" +e.target[1].value)
  }

  return (
    <div>
 <h1>Form validation Demo</h1>

 <form onSubmit={handleSubmit}>
 <label htmlFor=''>Enter Name:</label>
 <input type='text' name='name' onChange={handleName} value={name} required></input>
 <br/>
 { nameError ? <span style={{color:'red'}}>Name Length must be greater than 2 Characters</span> : ""  }
 <br/><br/>
 <label htmlFor=''>Enter Email:</label>
 <input type='text' name='email' onChange={handleEmail} value={email} required></input>
 <br/>
 {emailError ? <span style={{color:'red'}}>Invalid Email </span> : ""}
 <br/><br/>
 <input type="submit" value="Submit"/>



 </form>

    </div>
  )
}

export default Validation
import React, { useState } from 'react'
import  Bg1 from '../images/bg1.jfif'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { NavLink } from 'react-router-dom';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import Axios from 'axios';


const Signup = () => {

   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [roll, setRoll] = useState()
   const [mobile, setMobile] = useState()
   const [branch, setBranch] = useState()
   const [password, setPassword] = useState()
   const [cpassword, setCpassword] = useState()


   const handleData = async (e)=>{
     e.preventDefault();

    //  const res = await fetch('/register' , {
    //    method:"POST",
    //    headers:{
    //      "content-type":"application/json",
    //    },
    //    body:JSON.stringify({
    //      name , email , roll , mobile , branch , password , cpassword
    //    })
    //  })

    //  const data = await res.json()

    //  const {data1 , data2} = data;

    //  console.log("DATA: "+ data1 + data2);

    //  if(data === 422 && !data)
    //  {
    //    window.alert("Invalid Registration");
    //    console.log("Invalid registration");
    //  }else{
    //     window.alert(" Registration successfull");
    //    console.log("Registration successfull");
    //  }

        try {
         await Axios.post('http://localhost:8000/register' , {
         name , email , roll , mobile , branch , password , cpassword
       }) 
       console.log("USER SUCCESSFULLY REGISTRED");
       } catch (error) {
         console.log("ERROR " + error);
       }

   }

    return (
        <>

        <p>Demo DaTa </p>
        <p>{name} {email} {roll} {mobile} {branch} {password} {cpassword}</p>
            <section className="signup">
              <div className=" container mt-6">
                <div className="row">
                  <div className=" col-sm-10 col-md-5 m-auto ">
                    <form method="POST">
                        <h1 className="mb-3"> Sign Up</h1>
                        <div class="form-group
                        ">  
                          <label htmlFor="name">
                            <PersonIcon/>
                          </label>
                          <input type="text"  name= "name" id="name" autoComplete="off"  placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} required class="form-control"  />
                       </div>

                       <div class="form-group">  
                          <label htmlFor="name">
                            <EmailIcon/>
                          </label>  
                          <input  type="email" name= "email" id="email" autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}}  required class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                       </div>

                       <div class="form-group"> 
                          <label htmlFor="roll">
                            <CreateSharpIcon/>
                          </label> 
                          <input  type="text" name= "roll" id="roll" autoComplete="off" value={roll} onChange={(e)=>{setRoll(e.target.value)}}  required class="form-control"  placeholder="University Roll Number"/>
                       </div>

                       <div class="form-group"> 
                          <label htmlFor="mobile">
                            <CallIcon/>
                          </label> 
                          <input type="text" required class="form-control" minLength="10" maxLength="10" placeholder="Mobile Number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                       </div>

                        
                       <div class="form-group">
                           <label htmlFor="branch">
                            <LibraryBooksIcon/>
                           </label>  
                          <input  type="text"  name= "branch" id="branch" autoComplete="off" value={branch} onChange={(e)=>{setBranch(e.target.value)}} required class="form-control"  placeholder="Branch"/>
                       </div>

                        <div class="form-group">
                       <label htmlFor="password">
                            <LockIcon/>
                           </label>   
                          <input type="password" required class="form-control"   value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                       </div>

                       <div class="form-group">
                           <label htmlFor="cpassword">
                            <LockIcon/>
                           </label>  
                          <input  type="password" name= "cpassword" id="cpassword" autoComplete="off" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}required class="form-control"  placeholder="Confirm Password"/>
                       </div>

                       <button type="submit" class="btn btn-primary"  onClick={handleData}>Register</button>
                    </form>

                    <small>
                         <NavLink to="/login"> Already Registered</NavLink>
                    </small>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Signup

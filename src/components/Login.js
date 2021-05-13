import React from 'react'
import {NavLink} from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

const Login = () => {
    return (
        <>
             <section className="signin">
                <div className=" container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6  m-auto">
                    <form>
                        <h1 className="mb-3"> Log In</h1>
                       <div class="form-group">  
                          <label htmlFor="email">
                            <EmailIcon/>
                          </label>  
                          <input type="email" required class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                       </div>
                       
                       <div class="form-group">
                       <label htmlFor="password">
                            <LockIcon/>
                           </label>   
                          <input type="password" required class="form-control"  placeholder="Password"/>
                       </div>
                      
                       <button type="submit" class="btn btn-primary">Login</button>
                    </form>

                    <small>
                         <NavLink to="/signup"> Not Registered</NavLink>
                    </small>
                 </div>
                 </div>
                </div>
            </section>
        </>
    )
}

export default Login

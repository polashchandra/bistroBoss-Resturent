import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/Authprovider';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2'
import Sociallogin from '../../../component/sociallogin/Sociallogin';
const Login = () => {
    const chaptchaRef = useRef(null);
    const [disblat, setdisablat] = useState(true)

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const loginhandle = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User login succsesd",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, { replace: true });
            })
    }

    const handlechaptchaalidition = () => {

        const user_captcha_value = chaptchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setdisablat(false)
        }

        else {
            setdisablat(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>BistroBoss | login</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={loginhandle} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" ref={chaptchaRef} name='chaptcha' placeholder="Type the captcha" className="input input-bordered" required />
                                    <button onClick={handlechaptchaalidition} className="btn btn-outline btn-accent">Accent</button>
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disblat} className='btn btn-primary' type="submit" value="login" />
                                </div>
                            </form>
                            <p className='text-center'><small>new here ? <Link to="/signup">create a new account</Link></small></p>
                        <Sociallogin></Sociallogin>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
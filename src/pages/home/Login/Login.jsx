import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const chaptchaRef = useRef(null);
const [disblat,setdisablat]=useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const loginhandle = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
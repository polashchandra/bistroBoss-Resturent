import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../provider/Authprovider';
import { Link } from 'react-router-dom';
import Sociallogin from '../../../component/sociallogin/Sociallogin';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
            })
            .catch(error => {
                console.error("Error creating user: ", error);
            });
    };

    return (
        <>
            <Helmet>
                <title>BistroBoss | Signup</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                                        maxLength: { value: 20, message: "Password must not exceed 20 characters" },
                                        pattern: {
                                            value: /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{8,}$/,
                                            message: "Password must include at least one number and one special character"
                                        }
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'><small>Already have an account? <Link to="/login">Login here</Link></small></p>
                        <Sociallogin></Sociallogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

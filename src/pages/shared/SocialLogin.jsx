import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () =>{
        googleSignIn()
           .then(res=>{
            const loggedInUser = result.user;
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            axios.post('http://localhost:5000/users',saveUser)
            .then(data=>{
              console.log(data)
            })
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
           })
    }
    return (
        <div>
            <div className="flex flex-col  gap-2">
            <button onClick={handleGoogleSignIn} className=" justify-center px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
    );
};

export default SocialLogin;
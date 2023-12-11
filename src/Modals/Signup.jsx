import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from '../../Redux/actions/Auth';
import { signUpAction } from '../Redux/actions/Auth';
import { toast } from "react-toastify";
// import { clearSignUpStatus } from '../../Redux/reducers/authReducer';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';



function Signup() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [redirectingText, setRedirectingText] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission processing
    setShowModal(true);

    // Show the account created message after 2 seconds
    setTimeout(() => {
      // Proceed to redirecting message after 2 seconds
      setRedirectingText(true);

      // Redirect to Dashboard after 4 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 4000);
    }, 2000);
  };

  const dispatch = useDispatch();
    const authSelector = useSelector((state) => state.authenticationSlice);
    // console.log(authSelector);

    useEffect(() => {
        if (authSelector.signingUpStatus == "loading") {
          setIsloading(true);
          return;
        }
      }, [authSelector.signingUpStatus]);
    
      useEffect(() => {
        if (authSelector.signingUpStatus == "completed") {
            setSuccessMessage(true);
            setTimeout(() => {
              window.location.href = 'https://github.com/JabulaniUsen';
            }, 3000);
            return;
          }
        // dispatch(clearLoginStatus());
      }, [authSelector.signingUpStatus]);// dispatch(clearLoginStatus
    
      useEffect(() => {
        if (authSelector.signingUpStatus == "failed") {
            toast.error(`${authSelector.signingUpError}`);
          setIsloading(false);
          return;
        }
        dispatch(clearSignUpStatus());
      }, [authSelector.signingUpStatus]);


    const handleSignUp = (values) => {
      setSuccessMessage(true);
        dispatch(signUpAction({
            fullName:fullName,
            email:email,
            password:password,
        }));
      };

  return (
    <div>
      <Header />
      <div className="px-10 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className='text-3xl'>Hey there, Sign Up!</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className='form'>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Name</p>
              <input 
                type="text" 
                name="" 
                placeholder='Full Name' 
                className='bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm' id="" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}/>
                
            </div>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Email</p>
              <input 
                type="email" 
                name="" 
                placeholder='Email' 
                className='bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm' id="" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Password</p>
              <input 
                type="password" 
                name="" 
                placeholder='Password' 
                className='bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm' id="" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="w-[400px] flex gap-3 items-baseline my-7" >
              <input type="checkbox" name="" id="" required/>
              <p className='text-[#898A8B] text-xs'>By creating an account, you have agreed to the terms of use and our privacy policy </p>
            </div>
            <button  onClick={handleSignUp} type="submit" className='signup text-white font-semibold py-3 bg-[#186BAD] w-[400px]  rounded-lg'>Sign up</button>
            <p className='text-[#898A8B] text-center py-5'>Already have an account? <span className='text-[#186BAD] ml-2'><Link to='/signin'>Sign in</Link></span></p>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {/* {showModal && (
        <div className="popup-modal">
          <FontAwesomeIcon icon={faCheckCircle} className='text-6xl text-[#186BAD]' />
          <h2 className='text-2xl font-bold'>Account Created Successfully!</h2>
          {redirectingText && <p className='my-3 text-[#186BAD] font-semibold'>Redirecting to Dashboard...</p>}
        </div>
      )} */}
    </div>
  );
}

export default Signup;

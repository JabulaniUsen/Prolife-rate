import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';

function Signup2() {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [full_nameEmpty, setFull_nameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false); // Added state for emailEmpty
  const [showModal, setShowModal] = useState(false);
    // New state for redirecting text
    const [redirectingText, setRedirectingText] = useState(false);
    const [is_tutor, setIs_tutor] = useState(null)
  
    const navigate = useNavigate();
  
    const dispatch = useDispatch();
    const authSelector = useSelector((state) => state.authenticationSlice);
  
    // useEffect(() => {
    //   if (authSelector.signUpActionStatus === 'loading') {
    //     setIsloading(true);
    //     return;
    //   }
    // }, [authSelector.signUpActionStatus]);
  
    useEffect(() => {
      if (authSelector.signUpActionStatus === 'failed') {
        toast.error(`${authSelector.signUpActionError}`);
        setIsloading(false);
        dispatch (clearSignUpStatus())
        return;
      }
    }, [authSelector.signUpActionStatus]);
  
    useEffect(() => {
      if (authSelector.signUpActionStatus === 'completed') {
        // Show toast message
        toast.success('Account created', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // 3 seconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setRedirectingText(true);
        setTimeout(() => {
          setRedirectingText(false);
          navigate('/tutordashboard', { state: { full_name: full_name, email: email } });
        }, 3000);
        dispatch (clearSignUpStatus())
      } 
    }, [authSelector.signUpActionStatus, navigate]);

    const handleSignUp = () => {
      // Check for empty fields
      // if (!firstName || !lastName || !username || !email || !password || !password2) {
      //   setFirstNameEmpty(!firstName);
      //   setLastNameEmpty(!lastName);
      //   setEmailEmpty(!email);
      //   setPasswordEmpty(!password);
      //   setFirstNameEmpty(!firstName)
      //   return;
      // }
  
      // Check for password match
      // if (password !== password2) {
      //   setPasswordMatch(false);
      //   return;
      // }
  
      // Dispatch the signup action
      dispatch(
        signUpAction({
          // firstName: firstName,
          // lastName: lastName,
          full_name: full_name,
          email: email,
          password: password,
          password2: password2,
          is_tutor:is_tutor || true
        })
  
      );
      // setIsloading(true);
    };

  return (
    <div>
      <Header />
      <div className="px-5 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className="lg:text-3xl text-2xl font-bold">Sign up as a Tutor</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className="form">
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Name</p>
              <input
                type="text"
                name=""
                placeholder="Full Name"
                className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${full_nameEmpty ? 'border-red-500' : ''}`}
                value={full_name}
                onChange={(e) => {
                  setFull_name(e.target.value);
                  setFull_nameEmpty(false);
                }}
                required
              />
              {full_nameEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Email</p>
              <input
                type="email"
                name=""
                placeholder="Email"
                className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${emailEmpty ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailEmpty(false);
                }}
                required
              />
              {emailEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>

            {/* Passwords */}
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Password</p>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name=""
                  placeholder="Password"
                  className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${passwordEmpty ? 'border-red-500' : ''}`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordEmpty(false);
                    setPasswordMatch(true);
                  }}
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
              {passwordEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>

            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Confirm Password</p>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name=""
                  placeholder="Confirm Password"
                  className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${!passwordMatch ? 'border-red-500' : ''}`}
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                    setPasswordEmpty(false);
                    setPasswordMatch(true);
                  }}
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
              {!passwordMatch && <p className="text-red-500 text-xs mt-1">Passwords do not match</p>}
            </div>
            {/* Passwords */}

            <div className="lg:w-[400px] w-[300px] flex gap-3 items-baseline my-7">
              {/* <input type="checkbox" name="" id="" required />
              <p className="text-[#898A8B] text-xs">
                By creating an account, you have agreed to the terms of use and our privacy policy
              </p> */}
            </div>
            <button className='text-right poppins cursor-pointer text-lg font-semibold'
            onClick={handleSignUp}>
              Next <FontAwesomeIcon icon={faChevronRight} className='text-xl font-bold ml-5' />
            </button>
            {/* <Link to='/dashboard'><button
              onClick={handleSignUp}
              type="submit"
              className={`signup text-white font-semibold py-3 bg-[#186BAD] lg:w-[400px] w-[300px]  rounded-lg ${
                !full_name || !email || !password || !password2 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!full_name || !email || !password || !password2}
            >
              Sign up
            </button></Link>
            <p className="text-[#898A8B] text-center py-5">
              Already have an account? <span className="text-[#186BAD] ml-2"><Link to="/signin">Sign in</Link></span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup2;


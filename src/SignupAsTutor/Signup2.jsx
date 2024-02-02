import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { registerTutorAction } from '../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';

function Signup2() {
  const [username, setusername] = useState('')
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordWeak, setPasswordWeak] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [first_nameEmpty, setfirst_nameEmpty] = useState(false);
  const [usernameEmpty, setusernameEmpty] = useState('')
  const [last_nameEmpty, setlast_nameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  // New state for redirecting text
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authenticationSlice);

  useEffect(() => {
    if (authSelector.registerTutorActionStatus === 'failed') {
      toast.error(`${authSelector.registerTutorActionError}`);
      dispatch(clearSignUpStatus());
    }
  }, [authSelector.registerTutorActionStatus, dispatch]);

  useEffect(() => {
    if (authSelector.registerTutorActionStatus === 'completed') {
      // Show toast message
      toast.success('Account created', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate('/tutordashboard', { state: { first_name: first_name, email: email } });
        dispatch(clearSignUpStatus());
      }, 3000);
    }
  }, [authSelector.registerTutorActionStatus, first_name, email, navigate, dispatch]);

  const handleSignUp = () => {
    if (!first_name || !last_name || !email || !password || !password2 || !username) {
      setfirst_nameEmpty(!first_name);
      setlast_nameEmpty(!last_name)
      setusernameEmpty(!username)
      setEmailEmpty(!email);
      setPasswordEmpty(!password);
      return;
    }
    

    // Check for password match
    if (password !== password2) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    // Check for password requirements
    const passwordRequirementsRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    if (!passwordRequirementsRegex.test(password)) {
      setPasswordWeak(false);
      return;
    } else {
      setPasswordWeak(true);
    }

    // Dispatch the signup action
    dispatch(
      registerTutorAction({
        email: email,
        password: password,
        password2: password2,
        first_name: first_name,
        username: username,
        last_name: last_name,
      })
    );
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
            <p className="text-[#186BAD] text-sm mb-1 font-semibold">Username</p>
            <div className=" border border-[#e9eaf0]">
              <input
                type="text"
                name=""
                placeholder="Username"
                className={`bg-transparent p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${usernameEmpty ? 'border-red-500' : ''}`}
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                  setusernameEmpty(false);
                }}
                required
              />
            </div>
            {usernameEmpty && <p className="text-red-500 text-xs mt-1 mb-4">This must not be empty</p>}
            <p className="text-[#186BAD] text-sm my-1 font-semibold">First Name</p>
            <div className=" border border-[#e9eaf0]">
              <input
                type="text"
                name=""
                placeholder="First Name"
                className={`bg-transparent p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${first_nameEmpty ? 'border-red-500' : ''}`}
                value={first_name}
                onChange={(e) => {
                  setfirst_name(e.target.value);
                  setfirst_nameEmpty(false);
                }}
                required
              />
            </div>
            {first_nameEmpty && <p className="text-red-500 text-xs mt-1 mb-4">This must not be empty</p>}
            <p className="text-[#186BAD] text-sm my-1 font-semibold">last Name</p>
            <div className=" border border-[#e9eaf0]">
              <input
                type="text"
                name=""
                placeholder="Last Name"
                className={`bg-transparent p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${last_nameEmpty ? 'border-red-500' : ''}`}
                value={last_name}
                onChange={(e) => {
                  setlast_name(e.target.value);
                  setlast_nameEmpty(false);
                }}
                required
              />
            </div>
            {last_nameEmpty && <p className="text-red-500 text-xs mt-1 mb-4">This must not be empty</p>}
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Email</p>
            <div className="mb-3 border border-[#e9eaf0]">
              <input
                type="email"
                name=""
                placeholder="Email"
                className={`bg-transparent p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${emailEmpty ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailEmpty(false);
                }}
                required
              />
            </div>
            {emailEmpty && <p className="text-red-500 text-xs mt-1 mb-4">This must not be empty</p>}


            {/* Passwords */}
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Password</p>
              <div className="relative border border-[#e9eaf0]">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name=""
                  placeholder="Password..."
                  className={`p-3 w-[250px] outline-none rounded-sm ${passwordEmpty ? 'border-red-500' : ''}`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordEmpty(false);
                    setPasswordMatch(true);
                    setPasswordWeak(true);
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
              {!passwordMatch && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
              {!passwordWeak && (
                <p className="text-red-500 text-xs mt-1 w-[300px]">
                  Password must contain at least one uppercase letter, one number, and be at least 6 characters long.
                </p>
              )}
            </div>

            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Confirm Password</p>
              <div className="relative border border-[#e9eaf0]">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name=""
                  placeholder="Confirm Password"
                  className={`bg-transparent p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${!passwordMatch ? 'border-red-500' : ''}`}
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

            <button 
            className=' poppins cursor-pointer text-lg font-semibold bg-[#186BAD] text-white px-5 py-2 rounded-lg' 
            onClick={handleSignUp}>
              Next <FontAwesomeIcon icon={faChevronRight} className='text-xl font-bold ml-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup2;

import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
  const [passwordWeak, setPasswordWeak] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [full_nameEmpty, setFull_nameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  // New state for redirecting text
  const [redirectingText, setRedirectingText] = useState(false);
  const [is_tutor, setIs_tutor] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authenticationSlice);

  useEffect(() => {
    if (authSelector.signUpActionStatus === 'failed') {
      toast.error(`${authSelector.signUpActionError}`);
      dispatch(clearSignUpStatus());
    }
  }, [authSelector.signUpActionStatus, dispatch]);

  useEffect(() => {
    if (authSelector.signUpActionStatus === 'completed') {
      // Show toast message
      // toast.success('Account created', {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 3000, // 3 seconds
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // });
      setRedirectingText(true);
      setTimeout(() => {
        setRedirectingText(false);
        navigate('/signupastutor', { state: { full_name: full_name, email: email } });
        dispatch(clearSignUpStatus());
      }, 3000);
    }
  }, [authSelector.signUpActionStatus, full_name, email, navigate, dispatch]);

  const handleSignUp = () => {
    // Check for empty fields
    if (!full_name || !email || !password || !password2) {
      setFull_nameEmpty(!full_name);
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
      signUpAction({
        full_name: full_name,
        email: email,
        password: password,
        password2: password2,
        is_tutor: is_tutor || true,
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
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Name</p>
            <div className=" border border-[#e9eaf0]">
              <input
                type="text"
                name=""
                placeholder="Full Name"
                className={`bg-transparent p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${full_nameEmpty ? 'border-red-500' : ''}`}
                value={full_name}
                onChange={(e) => {
                  setFull_name(e.target.value);
                  setFull_nameEmpty(false);
                }}
                required
              />
            </div>
            {full_nameEmpty && <p className="text-red-500 text-xs mt-1 mb-4">This must not be empty</p>}
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

            <button className=' poppins cursor-pointer text-lg font-semibold' onClick={handleSignUp}>
              Next <FontAwesomeIcon icon={faChevronRight} className='text-xl font-bold ml-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup2;

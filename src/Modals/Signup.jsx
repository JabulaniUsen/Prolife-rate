import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [fullNameEmpty, setFullNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false); // Added state for emailEmpty
  const [showModal, setShowModal] = useState(false);
  // New state for redirecting text
  const [redirectingText, setRedirectingText] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authenticationSlice);

  useEffect(() => {
    if (authSelector.signingUpStatus === 'loading') {
      setIsloading(true);
      return;
    }
  }, [authSelector.signingUpStatus]);

  useEffect(() => {
    if (authSelector.signingUpStatus === 'failed') {
      toast.error(`${authSelector.signingUpError}`);
      setIsloading(false);
      return;
    }
    dispatch(clearSignUpStatus());
  }, [authSelector.signingUpStatus]);

  useEffect(() => {
    if (authSelector.signingInStatus === 'completed') {
      // Show the popup modal
      setShowModal(true);
      setRedirectingText(true); // Set redirecting text to true
      // Set a timer to hide the popup and navigate to the dashboard after 3 seconds
      setTimeout(() => {
        setShowModal(false);
        setRedirectingText(false); // Set redirecting text back to false
        // Use navigate instead of history
        navigate('/dashboard');
      }, 3000);
    }
  }, [authSelector.signingInStatus, navigate]);

  const handleSignUp = () => {
    // Check for empty fields
    if (!fullName || !email || !password || !password2) {
      setFullNameEmpty(!fullName);
      setEmailEmpty(!email);
      setPasswordEmpty(!password);
      return;
    }

    // Check for password match
    if (password !== password2) {
      setPasswordMatch(false);
      return;
    }

    // Dispatch the signup action
    dispatch(
      signUpAction({
        // fullName: fullName,
        email: email,
        password: password,
        password2: password2
      })
    );
    // setIsloading(true);
  };

  return (
    <div>
      <Header />
      <div className="px-10 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className="text-3xl">Hey there, Sign Up!</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className="form">
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Name</p>
              <input
                type="text"
                name=""
                placeholder="Full Name"
                className={`bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm ${fullNameEmpty ? 'border-red-500' : ''}`}
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setFullNameEmpty(false);
                }}
                required
              />
              {fullNameEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Email</p>
              <input
                type="email"
                name=""
                placeholder="Email"
                className={`bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm ${emailEmpty ? 'border-red-500' : ''}`}
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
                  className={`bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm ${passwordEmpty ? 'border-red-500' : ''}`}
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
                  className={`bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm ${!passwordMatch ? 'border-red-500' : ''}`}
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

            <div className="w-[400px] flex gap-3 items-baseline my-7">
              <input type="checkbox" name="" id="" required />
              <p className="text-[#898A8B] text-xs">
                By creating an account, you have agreed to the terms of use and our privacy policy
              </p>
            </div>
            <button
              onClick={handleSignUp}
              type="submit"
              className={`signup text-white font-semibold py-3 bg-[#186BAD] w-[400px]  rounded-lg ${
                !fullName || !email || !password || !password2 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!fullName || !email || !password || !password2}
            >
              Sign up
            </button>
            <p className="text-[#898A8B] text-center py-5">
              Already have an account? <span className="text-[#186BAD] ml-2"><Link to="/signin">Sign in</Link></span>
            </p>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="popup-modal">
          <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-[#186BAD]" />
          <h2 className="text-2xl font-bold">Account Created Successfully!</h2>
          {redirectingText && <p className="my-3 text-[#186BAD] font-semibold">Redirecting to Dashboard...</p>}
        </div>
      )}
    </div>
  );
}

export default Signup;


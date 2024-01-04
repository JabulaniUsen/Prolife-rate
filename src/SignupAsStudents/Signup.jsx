import React, { useState, useEffect } from 'react';
import { useUser } from '../Components/UserContext';
import Header from '../Components/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';

function Signup() {
  console.log(location.state);
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [full_name, setfull_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [usernameEmpty, setUsernameEmpty] = useState(false);
  const [firstNameEmpty, setFirstNameEmpty] = useState(false);
  const [lastNameEmpty, setLastNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // New state for redirecting text
  const [redirectingText, setRedirectingText] = useState(false);
  const [is_student, setIs_student] = useState(null)

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
        navigate('/dashboard', { state: { fullName: full_name } });
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
        is_student:is_student || true
      })

    );
    // setIsloading(true);
  };

  return (
    <div>
      <Header />
      <div className="px-10 lg:px-28 my-16 ">
        <div className="poppins header text-center inter">
          
          <h1 className=" lg:text-3xl text-2xl font-bold">Basic Information</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className="form inter">
          <p className=" text-sm mb-1 font-semibold">Full Name</p>
            <div className="full_name flex flex-col lg:flex-row lg:justify-end lg:items-end gap-5">
            <div className="mb-3 border border-[#e9eaf0]">
              <input
                type="text"
                name=""
                placeholder="First Name..."
                className={`p-3 lg:w-[250px]  outline-none rounded-sm ${firstNameEmpty ? 'border-red-500' : ''}`}
                value={full_name}
                onChange={(e) => {
                  setfull_name(e.target.value);
                  // setFirstNameEmpty(false);
                }}
                required
              />
              {/* {firstNameEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>} */}
            </div>
            <div className="mb-3 border border-[#e9eaf0]">
  
              <input
                type="text"
                name=""
                placeholder="Last Name..."
                className={`p-3 lg:w-[250px]  outline-none rounded-sm ${lastNameEmpty ? 'border-red-500' : ''}`}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameEmpty(false);
                }}
                required
              />
              {lastNameEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>
            </div>

            <p className=" text-sm mb-1 font-semibold">Username</p>
            <div className="mb-3 border border-[#e9eaf0]">
              <input
                type="text"
                name=""
                placeholder="Username..."
                className={`p-3 lg:w-[400px] w-[200px] outline-none rounded-sm ${usernameEmpty ? 'border-red-500' : ''}`}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameEmpty(false);
                }}
                required
              />
              {usernameEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>
            <p className=" text-sm mb-1 font-semibold">Email</p>
            <div className="mb-3 border border-[#e9eaf0]">
              <input
                type="email"
                name=""
                placeholder="Email"
                className={`p-3 lg:w-[400px] w-[200px] outline-none rounded-sm ${emailEmpty ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailEmpty(false);
                }}
                required
              />
              {emailEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>


            <div className="flex gap-5 flex-col lg:flex-row">
                <div className="mb-3">
                  <p className=" text-sm mb-1 font-semibold">Password</p>
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
                  <p className=" text-sm mb-1 font-semibold">Confirm Password</p>
                  <div className="relative border border-[#e9eaf0]">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      name=""
                      placeholder="Confirm Password..."
                      className={`p-3 w-[250px] outline-none rounded-sm ${!passwordMatch ? 'border-red-500' : ''}`}
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
            </div>
            

            <div className=" flex justify-between items-stretch gap-2 my-5">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" required />
                <p className="text-[#898A8B] text-xs">
                  I Agree with all of your <a href="" className='text-[#186bad] font-semibold'>Terms & Conditions</a>
                </p>
              </div>
              <button 
                onClick={handleSignUp}
                  className='text-right poppins cursor-pointer text-lg font-semibold'>
                    Next <FontAwesomeIcon icon={faChevronRight} className='text-xl font-bold ml-5' />
              </button>
            </div>
            
            <p className="text-[#898A8B] flex gap-5 justify-center items-center py-5">
              <span>--------------------</span>     Sign up with     <span>--------------------</span>
            </p>

            <div className="socialsSignup flex justify-between">
              <div className="flex">
                <span className=' border border-[#e9eaf0] px-3 text-red-600 text-3xl p-1 font-bold'>G</span>
                <span className='p-1 px-7 border border-[#e9eaf0] flex items-center'>Google</span>
              </div>
              <div className="flex">
                <span className=' border border-[#4267B2] px-3 text-red-600 text-3xl p-1 font-bold'>F</span>
                <span className='p-1 px-7 border border-[#4267B2] flex items-center'>Facebook</span>
              </div>
              <div className="flex">
                <span className=' border border-[#e9eaf0] px-3 text-red-600 text-3xl p-1 font-bold'>A</span>
                <span className='p-1 px-7 border border-[#e9eaf0] flex items-center'>Apple</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Signup;


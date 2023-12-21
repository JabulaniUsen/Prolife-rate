import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';
import ReactTags from 'react-tag-input';


function BuildProfile() {
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



  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    // You can perform additional validations or processing here if needed
    setImage(URL.createObjectURL(selectedImage));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedImage = event.dataTransfer.files[0];
    // You can perform additional validations or processing here if needed
    setImage(URL.createObjectURL(droppedImage));
  };

  const [tags, setTags] = useState([]);

  const handleDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };


  return (
    <div>
      <Header />
      <div className="px-5 lg:px-28 my-16">
        <div className="poppins header text-center">
        <h1 className="lg:text-3xl text-2xl font-bold text-[#186BAD]">Build Your Tutor Profile</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className="form">
          <div className="flex items-center justify-center my-5">
            <label htmlFor="imageInput" className="relative cursor-pointer">
                <input
                type="file"
                id="imageInput"
                className="hidden"
                accept="image/*"
                />
                <div
                className="lg:w-[400px] w-[300px] h-[150px] border-dashed border-2 border-gray-300 flex items-center justify-center"
                // style={{ maxWidth: '400px', maxHeight: '400px' }}
                >
                <p className="text-gray-500">Drop image here or click to upload</p>
                </div>
            </label>
        </div>
            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Bio</p>
              <textarea
                type="text"
                name=""
                placeholder="Write something about yourself"
                className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${fullNameEmpty ? 'border-red-500' : ''}`}
                value={fullName}
                required
              />
              {fullNameEmpty && <p className="text-red-500 text-xs mt-1">This must not be empty</p>}
            </div>
            <div className="mb-3">
                <p className="text-[#186BAD] text-sm mb-1 font-semibold">Subjects</p>
                <input
                    type="text"
                    name=""
                    className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${fullNameEmpty ? 'border-red-500' : ''}`}
                    value={fullName}
                    onChange={(e) => {
                    setFullName(e.target.value);
                    setFullNameEmpty(false);
                    }}
                    required
                />
                {/* <ReactTags
                    tags={tags}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    placeholder="Add tags"
                    allowDragDrop={false}
                /> */}
            </div>

            <div className="mb-3">
                <p className="text-[#186BAD] text-sm mb-1 font-semibold">Grades you taught</p>
                <input
                    type="text"
                    name=""
                    className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${fullNameEmpty ? 'border-red-500' : ''}`}
                    value={fullName}
                    onChange={(e) => {
                    setFullName(e.target.value);
                    setFullNameEmpty(false);
                    }}
                    required
                />
                {/* <ReactTags
                    tags={tags}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    placeholder="Specify the subjects and topics you excel in"
                    allowDragDrop={false}
                /> */}
            </div>

            <div className="mb-3">
              <p className="text-[#186BAD] text-sm mb-1 font-semibold">Session Rates ($/hr)</p>
              <div className="relative">
                <input
                  type='number'
                  name=""
                  className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm }`}
                  required
                />
              </div>
            </div>

            <div className="lg:w-[400px] w-[300px]gap-3 items-baseline my-7 flex flex-col">
                <p className="text-[#186BAD] text-lg mb-1 font-semibold">Availability</p>
                <p className="text-[#186BAD] text-sm mb-1">Available Days</p>
                <div className="poppins flex gap-3 flex-wrap">
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Mondays" id="" /> <p className='font-bold text-sm'>Mondays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Tuesdays" id="" /> <p className='font-bold text-sm'>Tuesdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Wednesdays" id="" /> <p className='font-bold text-sm'>Wednesdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Thursdays" id="" /> <p className='font-bold text-sm'>Thursdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Fridays" id="" /> <p className='font-bold text-sm'>Fridays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Saturdays" id="" /> <p className='font-bold text-sm'>Saturdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Sundays" id="" /> <p className='font-bold text-sm'>Sundays</p></div>
                </div>
            </div>

            <div className="lg:w-[400px] w-[300px]gap-3 items-baseline my-7 flex flex-col">
                <p className="text-[#186BAD] text-sm mb-1">Available Time</p>
                <div className="poppins flex gap-3 flex-wrap">
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Mondays" id="" /> <p className='font-bold text-sm'>Mondays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Tuesdays" id="" /> <p className='font-bold text-sm'>Tuesdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Wednesdays" id="" /> <p className='font-bold text-sm'>Wednesdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Thursdays" id="" /> <p className='font-bold text-sm'>Thursdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Fridays" id="" /> <p className='font-bold text-sm'>Fridays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Saturdays" id="" /> <p className='font-bold text-sm'>Saturdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Sundays" id="" /> <p className='font-bold text-sm'>Sundays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Mondays" id="" /> <p className='font-bold text-sm'>Mondays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Tuesdays" id="" /> <p className='font-bold text-sm'>Tuesdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Wednesdays" id="" /> <p className='font-bold text-sm'>Wednesdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Thursdays" id="" /> <p className='font-bold text-sm'>Thursdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Fridays" id="" /> <p className='font-bold text-sm'>Fridays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Saturdays" id="" /> <p className='font-bold text-sm'>Saturdays</p></div>
                    <div className='bg-[#d9d9d9] p-2 rounded-xl flex gap-3'><input type="checkbox" name="Sundays" id="" /> <p className='font-bold text-sm'>Sundays</p></div>
                </div>
            </div>
            <Link to='/tutordashboard'><p className='text-right poppins cursor-pointer text-lg font-semibold'>Next <FontAwesomeIcon icon={faChevronRight} className='text-xl font-bold ml-5' /></p></Link> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default BuildProfile;


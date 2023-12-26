import React, { useState } from 'react';
import '../Components/Slider.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Settings() {

  const [sliderValue, setSliderValue] = useState(0);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [isCredentialsSaved, setIsCredentialsSaved] = useState(false);

  const handleRangeChange = (event) => {
    const tempSliderValue = event.target.value;
    setSliderValue(tempSliderValue);
  };

  const calculateBackgroundColor = () => {
    const progress = (sliderValue / event.target.max) * 100;
    const backgroundColor = progress <= 50 ? '#FFA500' : '#000';
    return backgroundColor;
  };

  const handleTagInputChange = (event) => {
    setNewTag(event.target.value);
  };

  const handleAddTag = (event) => {
    if (event.key === 'Enter' && newTag.trim() !== '' && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleSave = () => {
    // Save credentials logic goes here

    // Show toast message
    toast.success('Credentials saved!', {
      position: 'top-right',
      autoClose: 2000, // 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });

    // Navigate to Home after the toast disappears
    setTimeout(() => {
      history.push('./');
    }, 2000);
  };

  return (
    <div className='poppins flex justify-between mx-20'>
      <div className="side1 w-[500px]">
        <h1 className='text-[#1669AA] my-3 font-bold text-2xl'>Student Info</h1>
        <form action="" className='flex flex-col gap-3'>
          <input required type="text" placeholder='Surname' className='bg-[#f2f1f1] p-3'/>
          <input required type="text" placeholder='First Name' className='bg-[#f2f1f1] p-3' />
          <input required type="text" placeholder='Highest Educational Qualifications. (100 char. limits0)' className='bg-[#f2f1f1] p-3' />
          <div className="bg-[#f2f1f1] p-3">
            <select name="" id="" className='bg-transparent outline-none w-[100px]'>
              <option value="Grade..." className='text-[#dadada]'>Grade...</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 1">Grade 2</option>
              <option value="Grade 1">Grade 3</option>
              <option value="Grade 1">Grade 4</option>
              <option value="Grade 1">Grade 5</option>

            </select>
          </div>
          <input required type="text" placeholder='Experience (eg. 2 years experience)' className='bg-[#f2f1f1] p-3' />          
          <textarea name="" id="" cols="10" rows="4" placeholder='Bio' className='bg-[#f2f1f1] p-3'></textarea>

          <input required type="number" placeholder='Phone number' className='bg-[#f2f1f1] p-3' />
          <input required type="email" placeholder='Email' name="" id="" className='bg-[#f2f1f1] p-3' />
          <input required type="password" placeholder='Password' name="" id="" className='bg-[#f2f1f1] p-3' />

          <p className='text-[#1669aa] mt-4'>Payment Information</p>
          <input required type="text" placeholder='Account Name' className='bg-[#f2f1f1] p-3' />
          <input required type="number" placeholder='Account Number' name="" id="" className='bg-[#f2f1f1] p-3' />
          <input required type="text" placeholder='Bank Name' name="" id="" className='bg-[#f2f1f1] p-3' />
        </form>
      </div>
      <div className="side2 flex flex-col item-center gap-6 mx-auto mt-[3.5rem]">
        <div className="">
          <p>Set Hourly Rate</p>
          <div className="bg-[#f2f1f1] p-3">
            <select name="" id="" className='bg-transparent outline-none w-[200px]'>
              <option value="Select Rate" className='text-[#dadada]'>Select Rate</option>
              <option value="$10">$10</option>
              <option value="$20">$20</option>
              <option value="$30">$30</option>
              <option value="$40">$40</option>
              <option value="$50">$50</option>
              <option value="$60">$60</option>
              <option value="$70">$70</option>
              <option value="$80">$80</option>
              <option value="$90">$90</option>
              <option value="$100">$100</option>
            </select>
          </div>
        </div>
        <div className="">
          <p>Paid</p>
          <input required type="number" placeholder='Est. %Paid' name="" id="" className='bg-[#f2f1f1] p-3' />
        </div>
        <div className=" ">
          <p className="mb-2">Set Rate per hour</p>

            <div className="bg-[#f2f1f1] p-3 pt-8 flex flex-col">
              <input required
                type="range"
                id="range"
                value={sliderValue}
                onChange={handleRangeChange}
                style={{
                  background: `linear-gradient(to right, ${calculateBackgroundColor()} 0%, ${calculateBackgroundColor()} ${sliderValue}%, #E15115 ${sliderValue}%, #E15115 100%)`,
                }}
                className="" />
              <p className="mt-2 font-semibold m-auto">${sliderValue}</p>
            </div>
        </div>
        <div className="">
          <p>Set Hourly Rate</p>
          <div className="tags">
 
            <div className="tag-input required bg-[#f2f1f1] p-3">
              <input required
                type="text"
                placeholder="Add tag and press Enter"
                value={newTag}
                onChange={handleTagInputChange}
                onKeyPress={handleAddTag}
                className='bg-transparent'
              />
            </div>

            <div className="grid grid-cols-2 my-2">
            {tags.map((tag, index) => (
              <div key={index} className="tag p-3 flex items-center gap-3">
                <span className='text-lg'>{tag}</span>
                <button className='text-2xl' onClick={() => handleRemoveTag(tag)}>&times;</button>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="">
          <button onClick={handleSave} className='bg-[#1669AA] text-white p-2 px-10 my-2 rounded-full'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
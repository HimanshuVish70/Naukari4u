import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center heroSection'>
            <div className='flex flex-col gap-5 my-10'>
                {/* <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Portal</span> */}
                <h1 className='text-5xl font-bold'>Discover, Pursue & Secure the Career  <br /><span className='textColor'>You Deserve</span></h1>
                <p>Discover tailored job opportunities connect with top employers, and apply effortlessly.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 items-center gap-5 mx-auto searchContainer'>
                    <input
                        type="text"
                        placeholder='Uncover Careers Tailored to Your Ambitions'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full heroInput'

                    />
                    <Button onClick={searchJobHandler} className="searchBtn ">
                        <Search className='h-8 w-12 ' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
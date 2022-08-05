import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [page, setPage] = useState('')
    const classLink = 'flex justify-end items-center py-2 mr-5 border-r-8 text-gray-500'
    const classLinkActive = ' text-orange-500 border-orange-300'

    return (
        <div className='col-span-1'>
            <nav>
                <Link 
                    onClick={()=>setPage("js")} 
                    to="/js" 
                    className={page == "js" ? classLink + classLinkActive : classLink}
                >
                    <li>JavaScript</li>
                    <i class="fa-brands fa-square-js text-2xl mx-2 "></i>
                </Link>

                <Link 
                    onClick={()=>setPage("react")} 
                    to="/react" 
                    className={page == "react" ? classLink + classLinkActive : classLink}
                >
                    <li>React</li>
                    <i class="fa-brands fa-react text-2xl mx-2 "></i>
                </Link>
                <Link 
                    onClick={()=>setPage("nextjs")} 
                    to="/nextjs" 
                    className={page == "nextjs" ? classLink + classLinkActive : classLink}
                >
                    <li>NextJs</li>
                    <i class="fa-brands fa-react text-2xl mx-2 "></i>
                </Link>
                <Link 
                    onClick={()=>setPage("nodejs")} 
                    to="/nodejs" 
                    className={page == "nodejs" ? classLink + classLinkActive : classLink}
                >
                    <li>NodeJs</li>
                    <i class="fa-brands fa-node-js text-2xl mx-2 "></i>
                </Link>

                <div className='flex justify-center'>
                    <div className='border-t  w-4/5 my-2'></div>
                </div>

                <Link 
                    onClick={()=>setPage("css")} 
                    to="/css" 
                    className={page == "css" ? classLink + classLinkActive : classLink}
                >
                    <li>CSS</li>
                    <i class="fa-brands fa-css3-alt text-2xl mx-2 "></i>
                </Link>
                <Link 
                    onClick={()=>setPage("tailwind")} 
                    to="/tailwind" 
                    className={page == "tailwind" ? classLink + classLinkActive : classLink}
                >
                    <li>Tailwind</li>
                    <i class="fa-brands fa-css3-alt text-2xl mx-2 "></i>
                </Link>

            </nav>
        </div>
    );
};

export default Nav;
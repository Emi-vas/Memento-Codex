import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col items-center bg-white'>
            <div className='flex items-center justify-between w-4/5 py-7 '>
                <div className='text-2xl  border-b px-3 pb-2 text-gray-400'>Memento Codex</div>
                <div className='relative flex items-center '>
                    <i class="fa-solid fa-magnifying-glass absolute left-4 text-gray-400 text-xl z-10"></i>
                    <input type="text" className='transform scale-75 focus:scale-100 transition duration-200 text-2xl text-gray-500 rounded-full px-2 py-3 pl-12 border border-gray-300 focus:outline-none focus:shadow-md' placeholder='Search'/>
                </div>
            </div>
        </div>

    );
};

export default Header;
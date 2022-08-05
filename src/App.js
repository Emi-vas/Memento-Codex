import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className=' bg-gray-100 text-gray-700'>
        <Header />
        <main className='grid grid-cols-5'>
            <Nav />
            <Content />
        </main>
    </div>
  );
};

export default App;
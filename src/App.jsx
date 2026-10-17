import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/banner'; 
import Footer from './Components/Footer';
import Looding from './Components/Looding';
import MainLayout from './Components/MainLayout';


const fetchData = async () => {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const dataPromise = fetchData();

function App() {
  return (
    <div>
      <Navbar />
      <Banner />

  
      <Suspense fallback={<Looding />}>
        <MainLayout dataPromise={dataPromise} />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;

import './App.css'
import Section from './Components/Navbar/Section'
import Register from './Components/Register/Register'
import { Routes, Route } from 'react-router-dom'
import ClickHere from './Components/Register/ClickHere'
import User from './Components/Register/User'
import Rooms from './Components/Rooms/PopularDestination'
import RecommendedHotels from './Components/Recommended/RecommendedHotels'
import AboutUs from './Components/About/AboutUs'
import RentalCars from './Components/RentalCars/RentalCars'
import Contact from './Components/Contact/Contact'
import Bookcar from './Components/RentalCars/Bookcar'
import Destination from './Components/Destination/Destination'
import HotelList from './Components/HotelLists/HotelList'
import Floatingbtn from './Components/FloatingButton/FloatingIcon'
import PreLoader from './Components/PreLoader/PreLoader'
import Blog from './Components/Blog/Blog'
import Error from './Components/404Page/Error'
import { useState, useEffect } from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //  Show loader first
  if (loading) {
    return <PreLoader />
  }
  return (
    <>

      <Routes>
        <Route path="/home" element={
          <>
            <Section />
            <Rooms />
            <RecommendedHotels />
          </>
        } />
        <Route path="/home/aboutus" element={<AboutUs />} />
        <Route path="/home/rentalCars" element={<RentalCars />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ClickHere" element={<ClickHere />} />
        <Route path="/User" element={<User />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/bookcar" element={<Bookcar />} />
        <Route path="/home/Destination" element={<Destination />} />
        <Route path="/hotellist" element={<HotelList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Floatingbtn />
    </>
  )
}

export default App
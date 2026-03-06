import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Navbar/Section'
import Register from './Components/Register/Register'
import { Routes, Route } from 'react-router-dom'
import ClickHere from './Components/Register/ClickHere'
import User from './Components/Register/User'
import Rooms from './Components/Rooms/PopularDestination'
import RecommendedHotels from './Components/Recommended/RecommendedHotels'
import Footer from './Components/Footer/Footer'
import Subscribe from './Components/Footer/Subscribe'
import AboutUs from './Components/About/AboutUs'
import RentalCars from './Components/RentalCars/RentalCars'
import Contact from './Components/Contact/Contact'
import Bookcar from './Components/RentalCars/Bookcar'
import Destination from './Components/Destination/Destination'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Section />
          <Rooms />
          <RecommendedHotels />
        </>
        }
        />
        <Route path="/home/aboutus" element={<AboutUs />} />
        <Route path="/home/rentalCars" element={<RentalCars />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ClickHere" element={<ClickHere />} />
        <Route path="/User" element={<User />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/car/carbooking" element={<Bookcar />} />
        <Route path="/home/Destination" element={<Destination />} />
      </Routes>


    </>
  )
}

export default App
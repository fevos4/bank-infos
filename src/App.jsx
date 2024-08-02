import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Lists from "./components/Lists";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Rate from "./components/Rate";
import Rcards from "./components/Rcards";
import Top from "./components/Top";



export default function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Lists/>
      <Rate/>
      <Rcards/>
      <Top/>
      <News/>
      <Footer/>
      
    </div>
    
  )
}
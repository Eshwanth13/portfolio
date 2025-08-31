import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Project from "./project";
import Contact from "./contact";
import "./main-con.css";
function Maincon(){
    return(
        <div className="main-con">
            <Navbar/>
            <Hero/>
            <About/>
            <Project/>
            <Contact/>
        </div>
    )
}
export default Maincon;
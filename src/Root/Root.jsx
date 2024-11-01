import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div >
         <div className="w-11/12 mx-auto">
         <NavBar ></NavBar>
         <Outlet></Outlet>
         </div>
         <div>
         <Footer></Footer>
         </div>
        </div>
    );
};

export default Root;
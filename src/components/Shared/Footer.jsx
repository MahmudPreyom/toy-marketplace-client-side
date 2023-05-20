import React, { useContext } from "react";
import img from "../../assets/imagel.png"
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa"
import { MdDialerSip } from "react-icons/md"
import { BsFillTelephoneForwardFill } from "react-icons/bs"
import { ImLocation2 } from "react-icons/im"

const Footer = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <footer className="footer text-white p-10 bg-sky-800 text-base-content">
                <div>
                    <img className="w-24" src={img} alt="" />
                    <p>Toys Planet<br />Providing reliable toys since 1992</p>
                </div>
                <div >
                    <span className="footer-title">Contact</span>
                    <Link className="link link-hover"><ImLocation2></ImLocation2> Mymanshing Ful Baria, Dhaka</Link>
                    <Link className="link link-hover"><MdDialerSip></MdDialerSip> 01534178976</Link>
                    <Link className="link link-hover"><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill> 0099 6633</Link>
                </div>
                <div>
                    <span className="footer-title">Menu</span>
                    <Link to="/">Home</Link>
                    <Link to="alltoys">All Toys</Link>
                    <Link to="/blog">Blogs</Link>
                    {user && <><Link to="mytoys">My Toys</Link>
                        <Link to="/addtoysform">Add A Toy</Link></>}
                </div>
                <div>
                    <span className="footer-title">Social Contact</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.facebook.com/mahmud.preyom"><FaFacebook style={{fontSize: '1.5rem'}}></FaFacebook></Link>
                        <Link to="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40mahmudpreyom1306%3Ffbclid%3DIwAR1ZGDoVeUjVhSJnKa46mS8uLUWh6qFIjobq4v5eWizk707CarUJYeU-iac&h=AT20r9PFI3hdiER9SVEbFOUJpk8E9BoUHlCRH5JNgYPdOEJBJpj9jQQqsCvIbPDiHZe-3vHf20QbvI675kVoMTX8dfUiYX5bIIeN6drsLd7f7XxUxHIj5bWDyircoY0T8JaQiQ"><FaYoutube style={{fontSize: '1.5rem'}}></FaYoutube></Link>
                        <Link><FaTwitterSquare style={{fontSize: '1.5rem'}}></FaTwitterSquare></Link>
                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-sky-800 text-white text-base-content">
                <p>Copyright © 2023 - All right reserved by TPC Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;
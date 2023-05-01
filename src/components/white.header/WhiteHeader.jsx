import React from "react";
import "./WhiteHeader.css"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const WhiteHeader = ()=>{
    return(
        <>
            <section className="white-header">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" end 
                                >الرئيسية</NavLink>
                            </li>
                            <li>
                                <NavLink to="/myBookings">حجوزاتي</NavLink>
                            </li>
                            <li>
                                <NavLink to="/myFavourite">مفضلتي</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="white-header-btn">
                        <Link to="/showYourApartment" className="btn btn-primary">
                            <FontAwesomeIcon icon={faCirclePlus}/>
                            اعرض شقتك
                        </Link>

                        <Link to="/login" className="btn btn-light">
                            <FontAwesomeIcon icon={faCircleUser}/>
                            تسجيل الدخول
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhiteHeader
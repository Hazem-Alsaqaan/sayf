import React, { useState } from "react";
import "./Header.css"
import { Link, NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import {faCirclePlus, faCircleUser} from "@fortawesome/free-solid-svg-icons"
import {useDispatch, useSelector} from "react-redux"
import UserNotifications from "../user.notifications/UserNotifications";
import { getNotifications } from "../../redux/actions/unitsActions";

const Header = ()=>{
    const {user} = useSelector((state)=> state.authSlice)
    const [toggleNotifications, setToggleNotifications]= useState(false)
    const {token} = useSelector((state)=>state.authSlice)
    const dispatch = useDispatch()

    const handleShowNotifications = async()=>{
        setToggleNotifications(!toggleNotifications)
        dispatch(getNotifications(token))
    }
    return(
        <>
            <section className="header">
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
                    <div className="header-btn">
                        <Link to="/showYourApartment" className="btn btn-primary">
                            <FontAwesomeIcon icon={faCirclePlus}/>
                            اعرض شقتك
                        </Link>

                        {
                            user ? 
                            <div className="notifications-btn">
                                <Link to="/profile">
                                    <FontAwesomeIcon icon={faCircleUser}/>
                                </Link>
                                <FontAwesomeIcon 
                                icon={faBell}
                                onClick={handleShowNotifications}
                                />
                                {
                                    toggleNotifications && <UserNotifications/>
                                }
                            </div>
                            :
                            <Link to="/login" className="btn btn-outline-light">
                                <FontAwesomeIcon icon={faCircleUser}/>
                                تسجيل الدخول
                            </Link>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
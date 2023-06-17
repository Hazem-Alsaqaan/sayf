import React, { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faGlobe, faHome, faLock, faPowerOff, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./Profile.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyBooking, getUserProfileData } from "../../redux/actions/unitsActions";
import { logOut } from "../../redux/reducers/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Profile =()=>{
    const dispatch = useDispatch()
    const [profileRender, setProfileRender] = useState(false)
    const {token} = useSelector((state)=>state.authSlice)
    const {userProfile} = useSelector((state)=>state.unitsSlice)
    const {myBookings} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        setProfileRender(true)
        const cleanerGetUserProfile = async()=> {
            dispatch(getMyBooking(token))
            dispatch(getUserProfileData(token))
        }
        return()=> cleanerGetUserProfile()
    },[profileRender])

    const handleLogOut =()=>{
        dispatch(logOut())
    }
    return(
        <>
        <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />
            <WhiteHeader/>
            <section className="profile-body container">
                <div className="profile-image">
                    <img src={userProfile?.photo ? userProfile?.photo : `https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685201428/vectors/user_profile_g0jjum.png`} alt=""/>
                    <h2>{userProfile.username}</h2>
                </div>
                <nav className="profile-nav">
                    <ul>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faUser}/>
                                <Link to="/manageAccount">إدارة الحساب</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1687003506/sayf/622405_lock_security_password_protect_safety_icon_1_xutwon.svg" alt=""/>
                                <Link to="/changePassword">تغيير كلمه المرور</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685121637/bookings_number_icon_1_jfdoix.png" alt=""/>
                                <span>عدد الحجوزات</span>
                            </div>
                            <p className="left-side">{myBookings.length > 0 ? myBookings.length : 0}</p>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faHome} />
                                <Link to="/myUnits">الشقق المعروضه</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span>تقييمك</span>
                            </div>
                            <p className="left-side">5.0</p>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>اللغه</span>
                            </div>
                            <p className="left-side">عربي</p>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <Link to="/tirms-of-use">شروط الإستخدام</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685122365/locker_icon_1_faieya.png" alt=""/>
                                <Link to="/privacy-policy">سياسة الخصوصية</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon"
                            onClick={handleLogOut}
                            >
                                <FontAwesomeIcon icon={faPowerOff}/>
                                <span>تسجيل الخروج</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </section>
            <Footer/>
        </>
    )
}
export default Profile
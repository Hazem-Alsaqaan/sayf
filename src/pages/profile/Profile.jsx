import React, { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faGlobe, faHome, faPowerOff, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./Profile.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyBooking } from "../../redux/actions/unitsActions";
import { logOut } from "../../redux/reducers/authSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Profile =()=>{
    const dispatch = useDispatch()
    const [profileRender, setProfileRender] = useState(false)
    const [userProfile, setUserProfile] = useState({})
    const {token} = useSelector((state)=>state.authSlice)
    const {myBookings} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        setProfileRender(true)
        const cleanerGetUserProfile = async()=> {
            dispatch(getMyBooking(token))
            try{
                const res = await axios.get(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/users/profile`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setUserProfile(res.data)
            }catch(err){
                if(err.message === "Network Error"){
                    toast.error("تأكد من اتصالك بالانترنت")
                }else if(err.response.data.errorMessage){
                    toast.error(err.response.data.errorMessage)
                }
                throw(err.response.data.errorMessage)
            }
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
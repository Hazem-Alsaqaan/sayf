import React from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faGlobe, faPowerOff, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./Profile.css"
import { Link } from "react-router-dom";

const Profile =()=>{
    return(
        <>
            <WhiteHeader/>
            <section className="profile-body container">
                <div className="profile-image">
                    <img src={`https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683453987/sayf/user.notifications_kf746x.png`} alt=""/>
                    <h2>محمد أحمد</h2>
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
                            <p className="left-side">0</p>
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
                                <span>شروط الإستخدام</span>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685122365/locker_icon_1_faieya.png" alt=""/>
                                <span>سياسة الخصوصية</span>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
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
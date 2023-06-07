import React from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAndroid, faApple, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"

const Footer = ()=>{
    return(
        <>
            <section className="footer">
                <div className="container">
                    <section className="right-side">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">الرئيسية</Link>
                                </li>
                                <li>
                                    <Link to="/profile">حسابي</Link>
                                </li>
                                <li>
                                    <Link to="/tirms-of-use">الشروط والاحكام</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">سياسة الخصوصية</Link>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section className="center-side">
                        <h2>تنزيل التطبيق</h2>
                        <p>حمل تطبيق صيّف وابدأ رحلة بحثك للعثور على افضل الشقق في مصر. مجموعة لا نهائية متوفرة الأن! صيّف دليل عقاري يستحق ثقتك!</p>
                    </section>
                    <section className="left-side">
                        <div className="top-side">
                            <div className="btn-white">
                                <span className="text">
                                    <p>Download on the</p>
                                    <h4>App Store</h4>
                                </span>
                                <FontAwesomeIcon icon={faApple}/>
                            </div>
                            <div className="btn-white">
                                <span className="text">
                                    <p>ANDROID APP ON</p>
                                    <h4>Google Play</h4>
                                </span>
                                <FontAwesomeIcon icon={faAndroid}/>
                            </div>
                        </div>
                        <div className="bottom-side">
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
export default Footer
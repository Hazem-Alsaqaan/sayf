import React from "react";
import "./Register.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

const Register = ()=>{
    return(
        <>
            <section className="register">
                <div className="container">
                    <div className="register-content">
                        <section className="landing">
                            <div className="text">
                                <h1>أهلا بك</h1>
                                <p>قم بإنشاء حسابك باستخدام<br/>بريدك الالكتروني</p>
                            </div>
                            <div className="image">
                                <img 
                                src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155353/sayf/login_blxnkh.png" 
                                alt=""/>
                            </div>
                        </section>
                        <section className="auth-form">
                            <form>
                                <label htmlFor="username">الاسم</label>
                                <input
                                id="username"
                                name="username" 
                                type="text"
                                required
                                />
                                <label htmlFor="email">البريد الالكتروني</label>
                                <input
                                id="email"
                                name="email" 
                                type="email"
                                required
                                />
                                <label htmlFor="password">كلمة المرور</label>
                                <input
                                id="password"
                                name="password"  
                                type="password"
                                required
                                />
                                <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                                <input
                                id="confirmPassword"
                                name="confirmPassword"  
                                type="password"
                                required
                                />
                                <button
                                type="submit"
                                >إنشاء حساب</button>
                            </form>
                            <div className="new-account">
                                <span>لديك حساب بالفعل؟</span>
                                <Link to="/">تسجيل الدخول</Link>
                            </div>
                            <div className="fire-base">
                                <p>أو قم بالتسجيل التالي</p>
                                <div>
                                    <FontAwesomeIcon icon={faGooglePlus}/>
                                    <FontAwesomeIcon icon={faSquareTwitter}/>
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register
import React from "react";
import  {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faGooglePlus, faSquareTwitter} from "@fortawesome/free-brands-svg-icons"
import "./Login.css"

const Login =()=>{
    return(
        <>
            <section className="login">
                <div className="container">
                    <div className="login-content">
                        <section className="landing">
                            <div className="text">
                                <h1>أهلا بك</h1>
                                <p>سجل دخولك باستخدام بريدك <br/>الإلكتروني</p>
                            </div>
                            <div className="image">
                                <img 
                                src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155343/sayf/sign_up_ox2rhz.png" 
                                alt=""/>
                            </div>
                        </section>
                        <section className="auth-form">
                            <form>
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
                                <Link 
                                className="forget-password"
                                to="/forgetPassword"
                                >نسيت كلمة المرور؟</Link>
                                <button
                                type="submit"
                                >تسجيل الدخول</button>
                            </form>
                            <div className="new-account">
                                <span>ليس لديك حساب؟ </span>
                                <Link to="/register">حساب جديد</Link>
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
export default Login
import React from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.css"

const Forgetpassword =()=>{
    return(
        <>
        <section className="forget-password-content">
            <div className="container">
                <h1>نسيت كلمة المرور</h1>
                <h2>من فضلك أدخل البريد الالكتروني الذي استخدمته في التسجيل</h2>
                <section className="auth-form">
                    <form>
                        <label>البريد الالكتروني</label>
                        <input
                        type="email"
                        required
                        />
                        <button>التالي</button>
                    </form>
                </section>
                <div className="new-account">
                    <span>ليس لديك حساب؟ </span>
                    <Link to="/register">حساب جديد</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default Forgetpassword
import React from "react";
import "./ConfirmPassword.css"

const ConfirmPassword =()=>{
    return(
        <>
            <section className="confirm-password">
                <div className="container">
                    <h1>كلمة مرور جديدة</h1>
                    <h2>قم بادخال كلمة مرور قوية حتى تتمكن من حماية حسابك</h2>
                    <section className="auth-form">
                        <form>
                            <label htmlFor="newPassword">كلمة المرور</label>
                            <input
                            id="newPassword"
                            type="password"
                            />
                            <label htmlFor="confirmNewPassword">تأكيد كلمة المرور</label>
                            <input
                            id="confirmNewPassword"
                            type="password"
                            />
                            <button
                            >تسجيل الدخول
                            </button>
                        </form>
                    </section>
                </div>
            </section>
        </>
    )
}
export default ConfirmPassword
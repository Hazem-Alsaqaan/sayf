import React from "react";
import "./ConfirmCode.css"

const ConfirmCode =()=>{
    const myMail ="hazem@gmail.com"

    return(
        <>
            <section className="confirm-code">
                <div className="container">
                    <h1>نسيت كلمة المرور</h1>
                    <h2>{`تم إرسال الكود على البريد الالكتروني ${myMail}`}</h2>
                    <section className="auth-form">
                        <form>
                            <label>الرمز التأكيدي</label>
                            <div className="code-input">
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                />
                            </div>
                            {/* time */}
                            <button>تحقق</button>
                        </form>
                    </section>                    
                </div>
            </section>
        </>
    )
}
export default ConfirmCode
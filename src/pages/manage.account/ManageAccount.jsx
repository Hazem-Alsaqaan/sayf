import React from "react";
import "./ManageAccount.css"
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";


const ManageAccount = ()=>{
    return(
        <>
            <WhiteHeader/>
            <section className="manage-account-body container">
                <h1>تعديل الملف الشخصي</h1>
                <form>
                        <div>
                            <label htmlFor="userfirstName" >الإسم الاول</label>
                            <input
                            id="userfirstName"
                            placeholder="الإسم الاول"
                            type="text"/>
                        </div>
                        <div>
                            <label htmlFor="userLastName" >اسم العائله</label>
                            <input
                            id="userLastName"
                            placeholder="اسم العائله"
                            type="text"/>
                        </div>
                        <div>
                            <label htmlFor="userEmail" >البريد الإلكتروني</label>
                            <input
                            id="userEmail"
                            placeholder="البريد الإلكتروني"
                            type="email"/>
                        </div>
                        <div>
                            <label htmlFor="userPhoneNumber" >رقم الهاتف</label>
                            <input
                            id="userPhoneNumber"
                            placeholder="رقم الهاتف"
                            type="text"/>
                        </div>
                        <div>
                            <label htmlFor="userBirthDay" >تاريخ الميلاد</label>
                            <input
                            id="userBirthDay"
                            placeholder="تاريخ الميلاد"
                            type="date"/>
                        </div>
                        <div>
                            <label htmlFor="userAdress" >العنوان</label>
                            <input
                            id="userAdress"
                            placeholder="العنوان"
                            type="text"/>
                        </div>
                        <button>تعديل</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}
export default ManageAccount
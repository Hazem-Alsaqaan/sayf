import React from "react";
import "./NotFound.css"
import { Helmet } from "react-helmet-async";


const NotFound =()=>{
    return(
        <>
        <Helmet>
            <title>صيـف |  الصفحة غير موجودة </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <section className="not-found container">
                <h1>404 /PAGE NOT FOUND</h1>
            </section>
        </>
    )
} 
export default NotFound
import React from "react";
import "./VisitorsOpinions.css"
import starIcon from "../../assets/star.svg"


const VisitorsOpinions = ()=>{
    return(
        <>
            <section className="visitors-opinions">
                <div className="top-side">
                    <h2>آراء الزوار</h2>
                    <span>
                        <img src={starIcon} alt=""/>
                        <p>{`5.0 (12 تقييم)`}</p>
                    </span>
                </div>
                <div className="bottom-side">
                    <div className="opinion-single-box">
                        <div className="up-side">
                            <h6>محمد أحمد</h6>
                            <h5>5.0</h5>
                        </div>
                        <p className="date">12 يناير 2020</p>
                        <p className="description">
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال والموقع رائع
                            </p>
                    </div>
                    <div className="opinion-single-box">
                        <div className="up-side">
                            <h6>محمد أحمد</h6>
                            <h5>5.0</h5>
                        </div>
                        <p className="date">12 يناير 2020</p>
                        <p className="description">
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال والموقع رائع
                            </p>
                    </div>
                    <div className="opinion-single-box">
                        <div className="up-side">
                            <h6>محمد أحمد</h6>
                            <h5>5.0</h5>
                        </div>
                        <p className="date">12 يناير 2020</p>
                        <p className="description">
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال والموقع رائع
                            </p>
                    </div>
                    <div className="opinion-single-box">
                        <div className="up-side">
                            <h6>محمد أحمد</h6>
                            <h5>5.0</h5>
                        </div>
                        <p className="date">12 يناير 2020</p>
                        <p className="description">
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال
                            مكان نظيف وكما هو معروض بالصور والتعامل والاستقبال والموقع رائع
                            </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default VisitorsOpinions
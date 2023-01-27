import React from 'react'
import './OurPrograms.css'

const OurPrograms = () => {
    return (
        <>
            <div className="our-programs__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{ display: "flex", justifyContent: "center" }}>
                            <div className='our-prog__top'>
                                <h2 style={{ fontSize: "48px", fontWeight: 900 }}>Our Programs</h2>
                                <p style={{ color: "RGB(128, 128, 128)", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas
                                    quibusdam ullam, illum sed veniam!</p>
                            </div>
                        </div>


                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="col-6" style={{ margin: "100px 0" }}>
                                <img style={{ width: "100%" }} src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg" alt="" />
                            </div>
                            <div className="col-6" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                <div className='our-prog__bottom_content'>
                                    <h2 style={{ fontSize: "32px", fontWeight: 500 }} >We Are Excellent In Education</h2>
                                    <p style={{ color: "RGB(128, 128, 128)", fontSize: "18px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                                    <div className='university-about'>
                                        <i class="fa-solid fa-graduation-cap fa-icons"></i>
                                        <h3 style={{ color: "RGB(121, 113, 234)" }}>22,931 Yearly Graduates</h3>
                                    </div>
                                    <div className='university-about'>
                                        <i class="fa-solid fa-building-columns fa-icons"></i>
                                        <h3 style={{ color: "RGB(121, 113, 234)" }}>150 Universities Worldwide</h3>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div style={{ display: "flex", alignItems: "center", margin: "100px 0" }}>
                            <div className="col-6" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                <div className='our-prog__bottom_content'>
                                    <h2 style={{ fontSize: "32px", fontWeight: 500 }} >Strive for Excellent</h2>
                                    <p style={{ color: "RGB(128, 128, 128)", fontSize: "18px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                                    <div className='university-about'>
                                        <i class="fa-solid fa-graduation-cap fa-icons"></i>
                                        <h3 style={{ color: "RGB(121, 113, 234)" }}>22,931 Yearly Graduates</h3>
                                    </div>
                                    <div className='university-about'>
                                        <i class="fa-solid fa-building-columns fa-icons"></i>
                                        <h3 style={{ color: "RGB(121, 113, 234)" }}>150 Universities Worldwide</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{ width: "100%" }} src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="" />
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="col-6" style={{ margin: "100px 0" }}>
                                <img style={{ width: "100%" }} src="https://preview.colorlib.com/theme/oneschool/images/undraw_teacher.svg" alt="" />
                            </div>
                            <div className="col-6" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                <div className='our-prog__bottom_content'>
                                    <h2 style={{ fontSize: "32px", fontWeight: 500 }} >Education is life</h2>
                                    <p style={{ color: "RGB(128, 128, 128)", fontSize: "18px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                                    <div className='university-about'>
                                        <i class="fa-solid fa-graduation-cap fa-icons"></i>
                                        <h3 style={{ color: "RGB(121, 113, 234)" }}>22,931 Yearly Graduates</h3>
                                    </div>
                                    <div className='university-about'>
                                        <i class="fa-solid fa-building-columns fa-icons"></i>
                                        <h3 style={{ color: "RGB(121, 113, 234)" }}>150 Universities Worldwide</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OurPrograms
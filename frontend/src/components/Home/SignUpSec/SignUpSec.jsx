import React from 'react'
import './SignUpSec.css'

const SignUpSec = () => {
    return (
        <>
            <div className="signupsec-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 signup-left">
                            <div className='signup-left__content'>
                                <h1 style={{ color: "white", fontSize: "40px", fontWeight: 700 }}>Learn From The Expert</h1>
                                <p style={{ color: "RGBA(255, 255, 255, 0.5)", fontSize: "18px", margin: "40px 0" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum asperiores deleniti sed perspiciatis accusamus dolore unde iure consequuntur praesentium laborum.</p>
                                <button className='nav-btn'>ADMISSION NOW</button>
                            </div>
                        </div>
                        <div className="col-lg-6 signup-right">
                            <div className='signup-right__content signupsec-input__wrapper'>
                                <form action="">
                                    <h3 style={{ fontWeight: 500, fontSize: "24px" }}>Sign UP</h3>
                                    <input placeholder='Email Address' type="text" class="form-control signupsec-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    <input placeholder='Password' type="text" class="form-control signupsec-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    <input placeholder='Re-type Password' type="text" class="form-control signupsec-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    <button className='nav-btn'>Sign UP</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpSec
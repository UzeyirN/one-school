import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './OurTeachers.css'


const OurTeachers = () => {
    const [teacher, setTeachers] = useState(null)
    const [value, setValue] = useState("")
    const [sorted, setSorted] = useState({
        sorted: "gain", reversed: false
    })

    const getData = () => {
        fetch('http://localhost:3075/teachers')
            .then((response) => response.json())
            .then((data) => setTeachers(data));
    }

    const sortData = () => {
        setSorted({ sorted: "gain", reversed: !sorted.reversed })
        const dataCopy = [...teacher]

        dataCopy.sort((a, b) => {
            if (sorted.reversed) {
                return a.gain - b.gain
            }
            return b.gain - a.gain
        })
        setTeachers(dataCopy)
    }
    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3075/teachers/${id}`)
        getData()
    }

    const filterData = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="our-programs__wrapper">
                <div className="container">
                    <div className="raw">
                        <div className="col-12" style={{ display: "flex", justifyContent: "center" }}>
                            <div className='our-prog__top our-teacher__top'>
                                <h2 style={{ fontSize: "48px", fontWeight: 900 }}>Our Teachers</h2>
                                <p style={{ color: "RGB(128, 128, 128)", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas
                                    quibusdam ullam, illum sed veniam!</p>
                            </div>
                        </div>
                        <p>SORT</p>
                        <button onClick={sortData} style={{ marginBottom: "50px" }}>SORT</button>
                        <p>FILTER</p>
                        <input type="text" placeholder='filter' onChange={filterData} style={{ marginBottom: "100px " }} />
                        <div className="col-12  teachersCard__wrapper">
                            <div className="container">
                                <div className="row">

                                    {
                                        teacher?.filter(data => {
                                            return value.trim().toLowerCase() === "" ? data : data.name.toLowerCase().includes(value.toLowerCase())
                                        })
                                            .map(({ _id, image, name, speciality, comment, gain }) => (
                                                <div className="col-4" style={{ marginBottom: "150px" }}>
                                                    <div className="card-wrapper">
                                                        <div className='card-img'>
                                                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={image} alt="" />
                                                        </div>
                                                        <div className='card-content'>
                                                            <h3 style={{ fontWeight: 500, fontSize: "20px" }}>{name}</h3>
                                                            <p style={{ color: "RGB(173, 181, 189)", fontSize: "18px" }}>{speciality} teacher</p>
                                                            <p style={{ color: "RGB(128, 128, 128", fontSize: "18px" }}>{comment}</p>
                                                            <p style={{ color: "RGB(128, 128, 128", fontSize: "18px" }}>{gain}</p>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => deleteData(_id)}>DELETE</button>

                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OurTeachers
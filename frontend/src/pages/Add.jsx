import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/Add.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from './../schema/FormValidation';
import axios from 'axios'

const Add = () => {

    const [state, setState] = useState({
        image: "",
        name: "",
        speciality: "",
        comment: "",
        gain: null
    })

    const addData = () => {
        axios.post("http://localhost:3075/teachers", state)
        setState({
            image: "",
            name: "",
            speciality: "",
            comment: "",
            gain: ""
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log({ data });
        addData()
    }
    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>

            <div className="add-input__wrapper">
                <form onSubmit={handleSubmit(onSubmit)} action="" className='add-form'>
                    <input name='image' value={state.image} {...register('image')} type="text" placeholder='image link...' className='add-input' onChange={handleChange} />
                    <p>{errors.image?.message}</p>

                    <input name='name' value={state.name} {...register('name')} type="text" placeholder='name...' className='add-input' onChange={handleChange} />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>

                    <input name='speciality' value={state.speciality} {...register('speciality')} type="text" placeholder='speciality...' className='add-input' onChange={handleChange} />
                    <p style={{ color: "red" }}>{errors.speciality?.message}</p>

                    <input name='comment' value={state.comment} {...register('comment')} type="text" placeholder='comment...' className='add-input' onChange={handleChange} />
                    <p style={{ color: "red" }}>{errors.comment?.message}</p>

                    <input name='gain' value={state.gain} {...register('gain')} type="number" placeholder='gain...' className='add-input' onChange={handleChange} />
                    <p style={{ color: "red" }}>{errors.gain?.message}</p>

                    <button className='add-btn'>ADD</button>

                </form>
            </div>

        </>
    )
}


export default Add
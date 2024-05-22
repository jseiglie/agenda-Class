import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const FormComponent = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        if (actions.createContact(formData)) navigate('/')
    }

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })


    


    return (

        <form onSubmit={handleSubmit}>

            <input type="text" name="name" placeholder="name" onChange={e => handleChange(e)} value={formData.name} />
            <input type="text" name='phone' placeholder="phone" onChange={e => handleChange(e)} value={formData.phone} />
            <input type="text" name="email" placeholder="email" onChange={e => handleChange(e)} value={formData.email} />
            <input type="text" name="address" placeholder="address" onChange={e => handleChange(e)} value={formData.address} />
            <input type="submit" value={'Submit'} />
        </form>


    )
}
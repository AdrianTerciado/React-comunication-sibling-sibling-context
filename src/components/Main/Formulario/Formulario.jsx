import React, { useState } from 'react';
import './Formulario.css'
import { useContext } from 'react'
import { EmailContext } from '../../../context/EmailContext'

function Formulario ({ setUser }) {

    const { updateEmail } = useContext(EmailContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        img_url: "",
        age: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);  

        updateEmail(e.target.email.value);
    }

    return (
        <>
            <h2>Esto ya es el Formulario</h2>
            <form className='my-form' onSubmit={handleSubmit}>
                <input className='input-form' type="text" name='name' placeholder='Nombre' onChange={handleChange}/>
                <input className='input-form' type="text" name='email' placeholder='Email' onChange={handleChange}/>
                <input className='input-form' type="text" name='img_url' placeholder='URL foto' onChange={handleChange}/>
                <input className='input-form' type="text" name='age' placeholder='Edad' onChange={handleChange}/>
                <button className='button-form'type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Formulario
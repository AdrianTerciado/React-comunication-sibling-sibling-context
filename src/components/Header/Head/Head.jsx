import './Head.css'
import { useContext } from 'react'
import { EmailContext } from '../../../context/EmailContext'

function Head () {

    const { email } = useContext(EmailContext);

    return (
        <>
            <p>Aquí iría el Head</p>
            <p>Ultimo usuario registrado: {email}</p>
        </>
    )
}

export default Head
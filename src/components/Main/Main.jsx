import React, { useState } from 'react';
import Formulario from './Formulario/Formulario'
import Card from './Card/Card'

function Main (){
    const [user, setUser] = useState({})

    console.log(user);

    return(
        <main>
            <Formulario setUser={setUser}/>
            <Card user={user}/>
        </main>
    )
}

export default Main
import './Card.css'

function Card ({user}) {

    console.log("User en Card:", user); 

return (
    (user.age && user.name)
        ? <article className='user-card'>
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
            <p>E-mail: {user.email}</p>
            <img src={user.img_url} className='img-user'></img>
         </article>
        :  <></>
    )
}

export default Card
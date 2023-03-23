import React from 'react'
import './Style.css';
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import perfil from '../assets/perfil.jpg'

export default function UserSocial() {
  return (
    <div className='userSocial'>
      
      <div className='infoUserPerfil'>
      <img src={perfil} className="img-icons-perfil"/>
      <h1 className='infoNamePerfil'>Elias Nuñez</h1>
      <p className='infoBioPerfil'>@eliasnuunez</p>
      </div>
     

       <a href="https://twitter.com/eliasnuunez">
        <img src={twitter} className="img-icons"/>
        </a> 
       <a href="https://www.linkedin.com/in/eliasnuunez/">
        <img src={linkedin} className="img-icons"/>
       </a> 
    </div>
  )
}

import React from 'react'
import './ContactInfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ContactInfoCard = ({ iconUrl, text}) => {
  return (
    
    <div className="contact-details-card">
        <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />  
            </div>  
            <p>rabiashaikh4488@gmail.com</p>
            
            <div className="icon">
            <FontAwesomeIcon icon={faGithub} />  
            </div>
            <p>https://github.com/rabiidev</p>
            
</div>
  )
}

export default ContactInfoCard
import React, { useState } from 'react';
import "./ContactContent.css";

export const ContactContent: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{ height:'100vh'}}>
                <p className='mainHeadersText' id='float'>Let's Get In Touch!</p>
                <p className='descriptionText' id='float2'>Connect with me on <a href="https://www.linkedin.com/in/jamie-poole-062684155/" target="_blank">LinkedIn</a></p>
                <p className='descriptionText' id='float2'>Email me at <a href="mailto:jamieelizabethpoole@gmail.com" target="_blank">jamieelizabethpoole@gmail.com</a></p>
            </div>
        </>
    );

}

export default ContactContent;
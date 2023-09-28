import React, { useState } from 'react';
import "./ContactContent.css";

export const ContactContent: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{marginTop: '50px', height:'100vh'}}>
                <h1 id='float'>Let's Get In Touch!</h1>
                <h2 id='float2'>Connect with me on <a href="https://www.linkedin.com/in/jamie-poole-062684155/" target="_blank">LinkedIn</a></h2>
                <h2 id='float2'>Email me at <a href="mailto:jamieelizabethpoole@gmail.com" target="_blank">jamieelizabethpoole@gmail.com</a></h2>
            </div>
        </>
    );

}

export default ContactContent;
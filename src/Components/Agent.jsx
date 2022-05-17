import React from 'react';
import Agentbox from './Agentbox';
import agentImage1 from '../images/s1.png';
import agentImage2 from '../images/s2.png';
import agentImage3 from '../images/s3.png';

function Agent() {
    return (
        <div className='agent'>
            <div>
                <h1>Agents</h1>
                <p>Lorem Ipsum dolot ammer,<br/> asmrt dolot duer duellist</p>
            </div>
            <div className='b-container'>
                <Agentbox image={agentImage1} name="Yaqub"/>
                <Agentbox image={agentImage2} name="Abimelech"/>
                <Agentbox image={agentImage3} name="Maika"/>
            </div>
        </div>
    )
}

export default Agent
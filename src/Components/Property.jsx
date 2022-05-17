import React from 'react'
import Bproperty from './Bproperty'
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'

function Property() {
    return (
        <div className='product'>
            <div className='p-heading'>
                <h3>Property Product</h3>
                <p>Lorem ipsum dollar, sit amet Components elit, usimbrn ?</p>
            </div>
            <div className='product-container'>
                <Bproperty image={pimage1} name="Pride" price="$500,99"/>
                <Bproperty image={pimage2} name="Lust" price="$750,99"/>
                <Bproperty image={pimage3} name="Glutony" price="$1010,95"/>
            </div>
        </div>
    )
}

export default Property
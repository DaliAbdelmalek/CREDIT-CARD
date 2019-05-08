import React, { Component } from 'react';
import './creditcard.css'
import img2 from './images/pus.png'
import img3 from './images/CreditCard.png1.png'
class Creditcard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='cart' >
                <div className='titre'>
                    <p>CREDIT CARD</p>
                </div>
                <div className='pus'>
                    <img  src={img2}/>
                </div>
                <div className='container'>
                    <div className='part1'>
                        <div className='numero'>
                            <span>7253</span>
                            <span>3256</span>
                            <span>7895</span>
                            <span>1245</span>
                        </div>
                        <div className='contenue'> 
                        <div className='info'>
                            <div>
                                <span>5422</span>
                                <p>CARDHOLDER</p>
                            </div>
                    </div>
                            <div className='valid'>
                                <div className='thru'>
                                    <span>VALID</span> 
                                    <span>THRU</span>
                                </div>
                                <div className='month'>
                                    <p>MONTH/YEAR</p>
                                    <span>11/50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='visa'>
                        <img  src={img3}/>
                    </div>

                </div>

            </div>
         );
    }
}
 
export default Creditcard;
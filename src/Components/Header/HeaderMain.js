import React from 'react'
import './Header.css'
import Logo from '../../Assets/icons/logo.svg'
export default function HeaderMain() {
    return (
        <header>
            <nav>
                <div className='header-main'>
                    <div className='container-main container'>
                        <div className='contact'>
                            <i class="fal fa-phone-alt"></i>
                            <div>
                                <h5>Call us: (+84) 123 456 789</h5>
                                <h6>E-mail: support@freshfruit.com</h6>
                            </div>
                        </div>
                        <div className='Logo'>
                            <img src={Logo} />
                        </div>
                        <div className='time'>
                            <i class="fal fa-clock"></i>
                            <div>
                                <h5>Working Hours:</h5>
                                <h6>Mon - Sat (8.00am - 12.00am)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

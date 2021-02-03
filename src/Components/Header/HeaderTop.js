import React, {useState, useEffect} from 'react'
import './Header.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
export default function HeaderTop() {

    const [items, setItems] = useState(0);

    const [amount, setAmount] = useState(0.00);

    return (
        <div>
            <header className='header-top'>
            <Router>
                <div className='container-top'> 
                    <div className='icons-top'>
                        <Link to='#'><i class="fab fa-facebook-f"></i></Link>
                        <Link to='#'><i class="fab fa-twitter"></i></Link>
                        <Link to='#'><i class="fab fa-google"></i></Link>
                        <Link to='#'><i class="fab fa-instagram"></i></Link>
                        <Link to='#'><i class="fal fa-search"></i></Link>
                    </div>
                    <div className='auth-top'>
                        <div>
                            <i class="fal fa-user"></i>
                            <Link to='#'>Log in</Link>
                        </div>
                        <span className='divider'>|</span>
                        <div>
                            <i class="fal fa-edit"></i>
                            <Link to='#'>Register Now</Link>
                        </div>
                        <span className='divider'>|</span>
                        <div>
                            <i class="fal fa-shopping-cart"></i>
                            <Link to='#'>{items} Items - $({amount})</Link>
                        </div>
                    </div>
                </div>
                </Router>
            </header>
        </div>
    )
}

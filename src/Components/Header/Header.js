import React from 'react'
import './Header.css'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderBottom from './HeaderBottom'
export default function Header() {
    return (
        <div>
            <HeaderTop />
            <HeaderMain />
            <HeaderBottom />
        </div>
    )
}

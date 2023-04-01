import React from 'react'
import Link from 'next/link'
function Header() {
    return (<header>
        <h4 style={{
            fontWeight: 'bolder',
            color: "black",
            fontSize: '1.5rem',
            marginLeft: "20px"
        }}>EVENT</h4>

        <ul>
            <li>
                <Link href='/' passHref>Home</Link>
            </li>
            <li>
                <Link href='/about-us' passHref>About us</Link>
            </li>
            <li>
                <Link href='/events' passHref>Events</Link>
            </li>
        </ul>

    </header>
    )
}

export default Header
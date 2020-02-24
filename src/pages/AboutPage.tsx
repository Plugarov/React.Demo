import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage = () => {
    const history = useHistory()

    return (
        <>
        <h1>Information</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius labore quaerat in. Recusandae facere aliquid, obcaecati accusamus reprehenderit aliquam sapiente veritatis officiis similique esse, ipsa molestiae laborum. Ratione, nulla.</p>
        <button className="btn" onClick={() => history.push('/')}>Back</button>
        </>
    )
}

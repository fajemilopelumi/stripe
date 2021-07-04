import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
    <article className="hero-info">
      <h1>Payments infrasture for the internet</h1>
      <p>Millions of companies of all sizes-from startups to
         Fortune %00-use Stripe's software and APIS 
         to accept payments, send payouts, and manage
          their business online</p>
          <button className="btn">start now</button>
    </article>
    <article className="hero-images">
      <img src={phoneImg} className="phone-img" alt='phone'/>
    </article>
    </div>

  </section>
}

export default Hero

import React from 'react'
import Header from '../COMPONENTS/Header/Header'
import Footer from '../COMPONENTS/Footer/Footer'
import Hero from '../COMPONENTS/Hero/Hero'
import styles from "./about.module.css"

const About= () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>THIS IS ABOUT PAGE.</h1>
        <Header/>
        <p className={styles.para}>
        WE ARE THE FIRST ONLINE GROCERY STORE IN KARACHI SREVING IN DIFFERNT AREAS, SINCE 2016. </p>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default About




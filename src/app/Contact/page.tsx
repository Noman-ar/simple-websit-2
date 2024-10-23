import React from 'react'
import Header from '../COMPONENTS/Header/Header'
import Footer from '../COMPONENTS/Footer/Footer'
import Hero from '../COMPONENTS/Hero/Hero'
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> THIS IS Contact PAGE. </h1>
      <div> 
        <Header/>
        <Hero/>
        <Footer/>
      </div>
    </div>
  )
}
 
export default Contact
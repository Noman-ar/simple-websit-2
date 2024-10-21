import React from 'react'
import Header from '../COMPONENTS/Header/Header'
import Image from 'next/image'
import Footer from '../COMPONENTS/Footer/Footer'
import styles from "./services.module.css"
const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>THIS IS Services PAGE.</h1>
        <Header/>
         <p className={styles.para}> Delivering grocery all over Karachi, fresh, best quality, great prices, with excellent customer </p>
         <section className={styles.section}>
           <ol className={styles.list}>
            <li> fruits</li>
            <li>vegetables</li>
            <li>oil</li>
            <li>ghee</li>
            <li>rice</li>
            <li>sugar</li>
            <li>lentils</li>
            <li>breakfast itmes</li>
            <li>chiken</li>
            <li>beef</li>
            <li>mutton</li>
            <li>fish</li>
          </ol>
          </section>
        <Footer/>
      </div>
  )
}

export default Services
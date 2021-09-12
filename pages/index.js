import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
//import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Slider from "react-slick";
import ProductSlider from '../components/ProductSlider/ProductSlider';
import Footer from '../components/Footer/Footer';
import FirstNavbar from '../components/FirstNavbar/FirstNavbar';
import SecondNavbar from '../components/SecondNavbar/SecondNavbar';

export default function Home() {
  // const [data, setData] = useState("");

  // const getData = async () => {
  //   const response = await fetch("http://localhost:3080")
  //   const data = await response.json()
  //   setData(data.message)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <header >
        <FirstNavbar/>
        <SecondNavbar/>
      </header>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.bannerContainer}>
            <Slider {...settings}>
              <div className={styles.bannerAll}>
                <img className={styles.bannerOne} src="banner1.png" alt="logo loja"></img>
              </div>
              <div>
              <img className={styles.bannerOne} src="banner2.png" alt="logo loja secundário"></img>
              </div>
            </Slider>
          </div>

          <div className={styles.productsContainer}>
            <h2>Últimos lançamentos</h2>
            <div className={styles.ProductSlider}>
              <ProductSlider />
            </div>
          </div>

          <div className={styles.productsContainer}>
            <h2>Linha esportiva</h2>
            <div className={styles.ProductSlider}>
              <ProductSlider />
            </div>
          </div>

          {/* <Link href='/product'>ir para página de produto </Link> */}
        </div>
        <Footer/>
      </div>

    </>
  )
}

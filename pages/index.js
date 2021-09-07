import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Slider from "react-slick";
import ProductSlider from '../components/ProductSlider/ProductSlider';

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
        <nav className={styles.navBar}>
          <div className={styles.navbarContainer}>
            <img className={styles.logoImg} src="logo_size.jpg" alt="logo loja"></img>
            <input name="search" className={styles.searchNavBar} placeholder="Pesquisar" />
            <div className={styles.userAndCartBottom}>
              <UserCircleIcon className={styles.userIcon} />
              <ShoppingCartIcon className={styles.shoppingCartIcon} />
            </div>
          </div>
        </nav>
        <nav className={styles.containerNavBarSecond}>
          <div className={styles.bottomNav} >
            <Link href='/product' className={styles.linkNavBar} >Camisas </Link>
            <Link href='/product' className={styles.linkNavBar} >Calças </Link>
            <Link href='/product' className={styles.linkNavBar} > Shorts</Link>
            <Link href='/product' className={styles.linkNavBar} >Vestidos </Link>
          </div>
        </nav>
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
        <footer className={styles.footerPages} >

          <div className={styles.footerAllmessage}>
            <div className={styles.footerContact}>
              <h3>CONTATO</h3>
              <h4>+55 (013) 9 3235-6893 </h4>
            </div>
            <div className={styles.footerAdress}>
              <h3>ENDEREÇO</h3>
              <h4>Av. Morro de  São Bernado 695   </h4>
              <h4> Prédio comercial Augusto Severo</h4>
            </div>

            <div className={styles.footerTreatment}>
              <h3>ATENDIMENTO </h3>
              <h4>SEGUNDA A QUINTA </h4>
              <h4> 9h às 18h</h4>
              <h4> SEXTA  </h4>
              <h4>9h às 17h </h4>
            </div>


          </div>
        </footer>
      </div>

    </>
  )
}

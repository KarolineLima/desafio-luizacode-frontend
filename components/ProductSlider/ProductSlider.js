import Slider from "react-slick";
import styles from "./ProductSlider.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import ProductCard from '../ProductCard/ProductCard';

export default function ProductSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider} >
        <div className={styles.card}>
          <ProductCard title="Blusa de verão" price="R$ 25,90" imageSrc="blusa.png" />
        </div>
        <div className={styles.card}>
          <ProductCard title="Blusa de verão 2" price="R$ 25,90" imageSrc="roupa1.png" />
        </div>
        <div className={styles.card}>
        <ProductCard title="Blusa de verão 3" price="R$ 25,90" imageSrc="roupa2.png"/>
        </div>
        <div className={styles.card}>
          <ProductCard title="Blusa de verão 4" price="R$ 25,90" imageSrc="roupa3.png"/>
        </div>
        <div className={styles.card}>
          <ProductCard title="Blusa de verão 5" price="R$ 25,90" imageSrc="roupa4.png"/>
        </div>
        <div className={styles.card}>
        <ProductCard title="Blusa de verão 6" price="R$ 25,90" imageSrc="roupa5.png"/>
        </div>
        <div className={styles.card}>
        <ProductCard title="Blusa de verão 6" price="R$ 25,90" imageSrc="roupa6.png"/>
        </div>
        <div className={styles.card}>
        <ProductCard title="Blusa de verão 6" price="R$ 25,90" imageSrc="roupa7.png"/>
        </div>
      </Slider>
    </div>
  )
}
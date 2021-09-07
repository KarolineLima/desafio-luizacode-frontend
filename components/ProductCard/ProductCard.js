import styles from "./ProductCard.module.css";

export default function ProductCard({ title, imageSrc, price, link = '#' }) {
    return (
        <div className={styles.productCard}>
            <img className={styles.productImage} src={imageSrc} />
            <div className={styles.productInfo} >
                <p className={styles.productName}>{title}</p>
                <p className={styles.productPrice}>{price}</p>
            </div>
        </div>
    )
}
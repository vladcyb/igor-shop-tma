import styles from './product.module.scss'

interface IProps {
  title: string
  imgSrc: string
}

export const Product = ({ imgSrc, title }: IProps) => (
  <figure className={styles.Product}>
    <picture>
      <img
        className={styles.Product__img}
        src={`${import.meta.env.BASE_URL}${imgSrc}`}
        alt=""
      />
    </picture>
    <figcaption className={styles.Product__title}>{title}</figcaption>
  </figure>
)

interface IProps {
  title: string
  imgSrc: string
}

export const Product = ({ imgSrc, title }: IProps) => (
  <figure>
    <picture>
      <img src={`${import.meta.env.BASE_URL}${imgSrc}`} alt="" />
    </picture>
    <figcaption>{title}</figcaption>
  </figure>
)

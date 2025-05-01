import { Grid } from './components/grid'
import { Product } from './components/product'
import products from './shared/constants/catalog.json'

import styles from './app.module.scss'

export const App = () => (
  <div className={styles.App}>
    <Grid>
      {products.map((product) => (
        <Product key={product.id} title={product.title} imgSrc={product.img} />
      ))}
    </Grid>
  </div>
)

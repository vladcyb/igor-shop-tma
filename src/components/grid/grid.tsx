import { PropsWithChildren } from 'react'
import clsx from 'clsx'

import styles from './grid.module.scss'

interface IProps {
  className?: string
}

export const Grid = ({ children, className }: PropsWithChildren<IProps>) => (
  <div className={clsx(styles.Grid, className)}>{children}</div>
)

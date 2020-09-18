import React from 'react'
import { useSelector } from 'react-redux'
import { getCount } from '../store/slices/counter'
import styles from '../styles'

const Box = (props) => {
  const classes = styles()
  const count = useSelector(getCount)
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {count}
      </div>
    </div>
  )
}

export default React.memo(Box)

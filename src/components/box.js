import React from 'react'
import { useSelector } from 'react-redux'
import {createUseStyles} from 'react-jss'
import { getCount } from '../store/slices/counter'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#e3e3e3',
    color: '#333333',
    fontSize: '2rem',
    width: 'min(10vw, 8rem)',
    textAlign: 'center',
    margin: '2rem',
  },
})

const Box = (props) => {
  const classes = useStyles()
  const count = useSelector(getCount)
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        {count}
      </div>
    </div>
  )
}

export default React.memo(Box)

import React from 'react'
import { useDispatch } from 'react-redux'
import counterSlice from '../store/slices/counter'
import styles from '../styles'

const Button = ({children, handleClick}) => {
  const classes = styles()
  return (
    <button onClick={handleClick} className={classes.button} type='button'>
      {children}
    </button>
  )
}

const CounterButtons = (props) => {
  const dispatch = useDispatch()
  const classes = styles()
  
  return (
    <div className={classes.container}>
      <Button handleClick={() => dispatch(counterSlice.actions.decrement())}>-</Button>
      <Button handleClick={() => dispatch(counterSlice.actions.increment())}>+</Button>
    </div>
  )
}

export default React.memo(CounterButtons)

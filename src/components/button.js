import React from 'react'
import { useDispatch } from 'react-redux'
import counterSlice from '../store/slices/counter'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#9457EB',
    color: '#ffffff',
    fontSize: '2rem',
    margin: '0 0.5rem',
    minWidth: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Button = ({children, handleClick}) => {
  const classes = useStyles()
  return (
    <button onClick={handleClick} className={classes.button} type='button'>
      {children}
    </button>
  )
}

const CounterButtons = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  return (
    <div className={classes.root}>
      <Button handleClick={() => dispatch(counterSlice.actions.decrement())}>-</Button>
      <Button handleClick={() => dispatch(counterSlice.actions.increment())}>+</Button>
    </div>
  )
}

export default React.memo(CounterButtons)

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  box: {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#e3e3e3',
    color: '#333333',
    fontSize: '2rem',
    width: 'min(10vw, 8rem)',
    textAlign: 'center',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: theme.primary.main,
    color: theme.primary.contrast,
    fontSize: '2rem',
    margin: '0 0.5rem',
    minWidth: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default useStyles

import React from 'react';
import { Provider } from 'react-redux'
import CounterButtons from './components/button'
import Box from './components/box'
import { ThemeProvider } from 'react-jss'
import { theme } from './styles/theme'
import store from './store'

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Box />
          <CounterButtons />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux'
import CounterButtons from './components/button'
import Box from './components/box'

import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Box />
        <CounterButtons />
      </Provider>
    </div>
  );
}

export default App;

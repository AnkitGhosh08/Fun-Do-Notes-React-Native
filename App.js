import React from 'react';
import Providers from './Src/Navigations/Providers';
import {Provider} from 'react-redux';
import store from './Src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
};
export default App;

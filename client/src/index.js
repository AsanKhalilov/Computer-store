import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

/*РАБОТАЛО С REACT 18.2
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value={{
  user: new UserStore(),
  device: new DeviceStore()
}}>
    <App />
</Context.Provider>
);
*/

/*Как в обучалке*/
ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);

/*Дефолт
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

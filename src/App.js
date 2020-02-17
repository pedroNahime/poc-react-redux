import React from 'react';
import './config/reactotron';
import Main from './pages/Main'
import { Provider } from "react-redux";
import store from './app/app.store'

function App() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
}

export default App;

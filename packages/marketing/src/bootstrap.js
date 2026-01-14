import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount func to start the app
const mount = (el) => {
    ReactDOM.render(<App />, el);
}

// if we are in dev and in isolation call mount directly
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if (el) {
        mount(el);
    }
}

// we are running through container and should export mount
export { mount };
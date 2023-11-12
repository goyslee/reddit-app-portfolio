import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import './styles/App.css';

const container = document.getElementById('root'); // Get the container element
const root = createRoot(container); // Create a root.

// Use root.render() instead of ReactDOM.render()
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

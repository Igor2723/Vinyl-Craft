import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import VinylClocks from './Components/VinylClocks.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Cart from './Components/Cart.jsx';
import ProductPage from './Components/ProductPage.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import  store  from './features/store/store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "vinylclocks",
    element: <VinylClocks/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "product/productpage/:name",
    element: <ProductPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
     </PersistGate>  
    </Provider>
  </React.StrictMode>,
)


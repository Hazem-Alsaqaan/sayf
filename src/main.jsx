import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, HashRouter} from "react-router-dom"
import {Provider} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import store from './redux/store/store'
import 'react-toastify/dist/ReactToastify.css';
import {GoogleOAuthProvider} from "@react-oauth/google"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import {HelmetProvider } from 'react-helmet-async';


const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_ABLE_KEY)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          {/* <BrowserRouter> */}
            <HashRouter basename='/'>
              <GoogleOAuthProvider
              clientId= {import.meta.env.VITE_CLIENT_ID}>
                      <App />
              </GoogleOAuthProvider>
            </HashRouter>
          {/* </BrowserRouter> */}
        </Elements>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)

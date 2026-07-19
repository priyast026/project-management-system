import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { ClerkProvider } from '@clerk/react'

const PUBLISHABLE_KEY="pk_test_Y29tcG9zZWQtc3BhbmllbC02MC5jbGVyay5hY2NvdW50cy5kZXYk"

if(!PUBLISHABLE_KEY){
    throw new error('Missing Publishable Key')
}





createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <Provider store={store}>
                <App />
            </Provider>
    </ClerkProvider>
           
    </BrowserRouter>,
)
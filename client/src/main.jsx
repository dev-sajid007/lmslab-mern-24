import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { Toaster } from './components/ui/sonner'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>,
)

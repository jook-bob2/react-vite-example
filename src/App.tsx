import React from 'react'
import '@styles/App.scss'
import { Provider } from 'react-redux'
import DefaultRouter from './routes/DefaultRouter'
import { store } from '@store/store'

export default function App() {
    return (
        <Provider store={store}>
            <DefaultRouter />
        </Provider>
    )
}

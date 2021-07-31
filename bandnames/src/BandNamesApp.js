import React from 'react'
import { SocketProvider } from './context/SocketContext';

import App from './App'

export const BandNamesApp = () => {
    return (
        <SocketProvider>
            <App/>
        </SocketProvider>
    )
}

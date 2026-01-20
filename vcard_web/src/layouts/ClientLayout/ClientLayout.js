import React from 'react'
import './ClientLayout.scss'

export function ClientLayout(props) {
    const {children} = props; //{children} es el contenido que tiene nuestro layout

    return (
        <div>
            <p>Estmamos en el Layout del Cliente</p>
            {children}
        </div>
    )
}

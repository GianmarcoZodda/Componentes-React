import { useState } from 'react'


export const Prueba = (estadoInicial) => {

    const [prendido, setEstado] = useState(estadoInicial)

        const interruptor = () => {
            setEstado(!prendido)
        }

    const text = prendido ? "encendido" : "apagado"

        return(
        <button className="tw-followCard-button" onClick={interruptor}>
          <span className='tw-followCard-text'>{text}</span>
        </button>
        )

}
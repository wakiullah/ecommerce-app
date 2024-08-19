import React from 'react'

export default function Input({ tittle, type, placeholder }) {
    return (
        <div>
            <p>{tittle}</p>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

import React from 'react'
import './SectionTIttle.css'
export default function SectionTIttle({ tittle }) {
    return (
        <div className='section_tittle'>
            <h2>{tittle}</h2>
            <hr />
        </div>
    )
}

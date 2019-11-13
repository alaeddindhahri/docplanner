import React from 'react'

export default function Subsidiaries(props) {
    return (
        <div className='subsidiaries-links'>
            {props.myList.map((el)=>
                <a href='#'><img src={el.imageSource}/>{el.title}</a>
            )
            }
        </div>
    )
}

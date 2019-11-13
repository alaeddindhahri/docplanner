import React from 'react'

export default function Location(props) {
    return (
        <div className='openings-boxes'>
            {
                props.myList.map((el)=>
                    <div className={'openings-'+el.title.toLowerCase().replace(' ','')}>
                        <img src={el.imageSource}/>
                        <div className='openings-location-button'>
                            <h4>{el.title}</h4>
                            <a href='#' className='openings-buttons'>SEE OPENINGS</a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

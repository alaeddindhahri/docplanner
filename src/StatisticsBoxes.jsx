import React from 'react'

export default function StatisticsBoxes(props) {
    return (
        <div className="statistics-numbers">
            {
                props.myList.map((el)=>
                <div className={el.specialClass ? "statistics-numbers-boxes "+ el.specialClass:"statistics-numbers-boxes"}>
                    <img src={el.imageSource}/>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                </div>
                )}
          </div>
        
    )
}

import React from 'react'

export default function UsersCard(props) {
    return (
        <div className="patients-doctors">
            {props.myList.map((el)=>
                <div className={el.class}>
                    <h4>{el.title}</h4>
                    <h1>{el.description}</h1>
                    {el.options && 
                    <select id={el.optionsID}>
                        <option>Choose country</option>
                        {el.options.map((countries)=>
                            <option value={countries.link}>{countries.name}</option>
                        )
                        }
                    </select>
                    }
                    <img className={el.imageClass} src={el.imageSource}/>
                </div>
            )}
        </div>
    )
}

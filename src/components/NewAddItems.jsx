import "./NewAddItems.css"

import React from 'react'

 function NewAddItems(props) {
    // {console.log(props)}
  return (
    <div >
        {props.getItems.map((item)=>{
            return (
                <div className="childItems">
                    <p>{item.title}</p>
                </div>
            )
        })}
    </div>
    )

}
export default NewAddItems;

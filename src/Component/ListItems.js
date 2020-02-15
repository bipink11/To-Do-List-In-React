import React from 'react'
import './ListItems.css'
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    console.log(" props = " ,props)
    const listItems = items.map((item) =>{
        return <div className="list" key={item.key}>
        <p>
            {/* {item.text} */}
            <input type="text" 
            id={item.key}
            value={item.text}
            onChange = {
                (e) => {
                    props.setUpdate(e.target.value,item.key)
                }
        }
            />
            
            <span>
                <i className="fa fa-trash-o" 
                aria-hidden="true"
                onClick={ () => props.deleteItem(item.key)}
                />
            </span>
        </p>
           
        </div>
    })
      console.log("listeajsdhsa ",listItems) 
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
        
    )
}

export default ListItems

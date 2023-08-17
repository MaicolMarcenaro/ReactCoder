import React from 'react'
import './listitem.css'
import Item from '../Item'



export const ListItem = ({data = []}) => {
    return(
        <div className='productos'>
            {data.map(items => <Item key={items.id} info={items} />)}
        </div>
    )
}
export default ListItem
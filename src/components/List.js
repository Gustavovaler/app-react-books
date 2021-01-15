import React from 'react';
import Item from './Item';

function List(props){
    return (
        <div  className="list">
            {
                props.items.map(item => 
                    <Item title={item.title}
                          image={item.image}
                          rating={item.rating}
                          id={item.id}
                          key={item.id} />
                    )
            }
        </div>
    );
}

export default List;
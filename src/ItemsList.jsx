import React from 'react'
import Items from './items'
function ItemsList({items}){
    return(
        <>
        <div className='bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-2'>
        {items && items.map(function (item, index) {
          return (
            <Items
              key={index}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
              showDetails={item.showDetails}
            />
          );
        })}
        </div>
        </>
    );
}
export default ItemsList
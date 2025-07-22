import React from 'react'
import { Link } from 'react-router-dom';
function Items({ image, name, category, price, showDetails }) {
    // const handleDetails = () => {
    //     showDetails({ image, name, category, price });
    // };
    return (
        <div className='bg-white p-6 w-84 m-4 shadow rounded'>
            <img src={image} alt={name} className="w-64 h-64 object-cover rounded" />
            <p className="text-gray-600 mt-2">{category}</p>
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-lg font-semibold mt-2">${price}</p>
            {/* <button 
                onClick={handleDetails} 
                className='bg-blue-300 border-2 border-blue-500 text-white px-4 py-1 rounded mt-2 hover:bg-green-400'>
                MORE DETAILS
            </button> */}
            <Link className="bg-green-500 rounded text-white py-1 px-2 hover:bg-green-700"to='/productdetails'> View details </Link>
        </div>
    );
}
export default Items;
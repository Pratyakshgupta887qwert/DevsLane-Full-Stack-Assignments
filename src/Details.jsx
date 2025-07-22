import React from 'react'
import { Link } from 'react-router-dom';
// function Details({item , goBack}){
    function Details(){
    return(
        <>
        <div className=" bg-gray-300  flex items-center justify-center z-50 pt-10">
            <div className="flex bg-white rounded-lg shadow-lg w-4/5 h-3/4">
                <div className="flex items-center justify-center w-1/2 h-full p-8">
                    <img
                        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60"
                        alt="static Product image"
                        className="object-contain rounded-lg w-full h-full max-h-[400px] max-w-[400px] bg-gray-50"
                    />
                </div>
                <div className="w-1/2 h-full p-8 flex flex-col">
                    <div>
                        <h1 className="text-5xl mb-6">Static product Linked to all</h1>
                        <h2 className="text-3xl mb-4">Price: $99</h2>
                        <p className="mb-8">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet error et illum magnam aut iure
                            necessitatibus vero corporis maxime id cupiditate quia perspiciatis facilis, in sapiente modi ipsa
                            cum assumenda molestias laborum neque asperiores.
                        </p>
                        <div className="flex gap-4 mb-2 ">
                            <button className="bg-white border-2 h-12 w-16">1</button>
                            <button className="bg-red-500 text-white px-20 h-12 rounded">Add to Cart</button>
                            </div>
                             </div>
                    {/* <button
                        onClick={goBack}
                        className="self-start mt-2 px-6 py-2 bg-blue-500 text-white rounded">
                        Back
                    </button> */}
                    <Link className="bg-blue-500 text-white rounded self-start px-8 py-2 hover:bg-blue-700" to='/'> back </Link>
                </div>
            </div>
        </div>
        </>
    );
}
export default Details;
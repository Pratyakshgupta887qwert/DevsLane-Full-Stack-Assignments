import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer.jsx';
import Items from './components/Items.jsx';
function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className="bg-white m-12 mb-0 flex justify-end ">
          <label for="category" className=" text-black font-semibold "></label>
          <select name="category" id="category" className='mr-12 mt-4 border-4' >
            <option value="all">All</option>
            <option value="footwear">Footwear</option>
            <option value="cups">Cups</option>
            <option value="shirts">Shirts</option>
            <option value="headphones">Headphones</option>
          </select>
        </div>
        <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
          <Items
            image="https://www.incrediblegifts.in/wp-content/uploads/2023/09/Untitled-3-4.jpg"
            name="Stylish Cups"
            category="Cups"
            price="79.99"
            />
          <Items
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLv-evCSZONBP_NTbuSgua1FsqH-ITn6oYw&s"
            name="Stylish Sneakers"
            category="Footwear"
            price="109.99"
          />
          <Items
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p6KqY5h5t4nUlSfBZfRG6H55zR6p2SuzBw&s"
            name="Stylish Sneakers"
            category="Footwear"
            price="99.99"
          />
          <Items
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_Cfuuxo-m07hn4Sd6q4TBuqkkTcy6ErsGQ&s"
            name="Stylish Cups"
            category="Cups"
            price="79.99"
          />
          <Items
            image="https://www.incrediblegifts.in/wp-content/uploads/2023/09/Untitled-3-4.jpg"
            name="Stylish Sneakers"
            category="Footwear"
            price="59.99"
          />
          <Items
            image="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2393725.jpg"
            name="Amazon Product"
            category="Speaker"
            price="49.99"
          />
          <Items
            image="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1hem9uJTIwJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            name="Stylish Headphones"
            category="Headphones"
            price="49.99"
          />
          <Items
            image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnRzfGVufDB8fDB8fHww"
            name="Stylish Shirts"
            category="Shirt"
            price="99.99"
          />
          <Items
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dLc13RfolSfS4BoPIU020tOeGWS1U2C-YQ&s"
            name="Stylish Shirts"
            category="Shirt"
            price="59.99"
          />
          <Items
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLv-evCSZONBP_NTbuSgua1FsqH-ITn6oYw&s"
            name="Stylish Cups"
            category="Cups"
            price="79.99"
          />
          <Items
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Bj9aFMRM8tXD7J-mCj24YT8tla5SdfYaqA&s"
            name="Stylish Sneakers"
            category="Footwear"
            price="99.99"
          />
          <Items
            image="https://levi.in/cdn/shop/files/download_a6c8bb95-c3df-4957-b9ed-188ed283af0d.jpg?v=1745159964"
            name="Stylish Cups"
            category="Cups"
            price="79.99"
          />

        </div>
        <div className="flex m-12 pb-20  p-4 mt-0 bg-white  gap-2">

          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">1</button>
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">2</button>
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">3</button>
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App

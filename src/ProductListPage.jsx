import React, { useState } from 'react';
import ItemsList from './ItemsList';
import Details from './Details';

function ProductListPage() {
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");
    const [selectedItem, setSelectedItem] = useState(null);

    // const handleShowDetails = (item) => {
    //     setSelectedItem(item);
    // };

    const handleGoBack = () => {
        setSelectedItem(null);
    };

    const allData = [
        {
            image: "https://th.bing.com/th/id/OIP.oxk-NL-1_JfJUXFenTSzVAHaHK?w=178&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            name: "T shirt",
            category: "t shirt",
            price: 79.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://th.bing.com/th/id/OIP.mrrbzhnwco-f6H5i8xOLaAHaJQ?w=155&h=193&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            name: "T shirt",
            category: "t shirt",
            price: 109.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://ts2.mm.bing.net/th?id=OIP.44DWH6pvnzVqiSLG6mP_uwHaHa&pid=15.1",
            name: "Coffee Mug",
            category: "Mug",
            price: 99.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?w=600&auto=format&fit=crop&q=60",
            name: "Cups",
            category: "Cups",
            price: 79.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://images.unsplash.com/photo-1561909848-977d0617f275?w=600&auto=format&fit=crop&q=60",
            name: "Stylish Sneakers",
            category: "Footwear",
            price: 59.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://th.bing.com/th/id/OIP.H_NqElx0wouJFc56MSwtyAHaE8?w=300&h=200&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            name: "Amazon Product",
            category: "Speaker",
            price: 49.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60",
            name: "Stylish Headphones",
            category: "Headphones",
            price: 49.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://th.bing.com/th/id/OIP.zjFRWGN0vP3ISKbYw9qMJAHaHZ?w=174&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            name: "Stylish Mug",
            category: "Mug",
            price: 99.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60",
            name: "Stylish Shirts",
            category: "Shirt",
            price: 59.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?w=600&auto=format&fit=crop&q=60",
            name: "Stylish Cups",
            category: "Cups",
            price: 79.99,
            // showDetails: handleShowDetails
        },
        {
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60",
            name: "Stylish Sneakers",
            category: "Footwear",
            price: 99.99,
            // showDetails: handleShowDetails
        }
    ];

    const [data, setData] = useState(allData);

    function handleChange(event) {
        const newQuery = event.target.value;
        const filteredData = allData.filter(function (item) {
            const lowerCaseName = item.name.toLowerCase();
            const lowerCaseQuery = newQuery.toLowerCase();
            return lowerCaseName.indexOf(lowerCaseQuery) !== -1;
        });
        setQuery(newQuery);
        setData(filteredData);
    }

    function handleSort(event) {
        const selectedSort = event.target.value;
        setSort(selectedSort);

        let sortedData = [...data];

        if (selectedSort === "name") {
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === "pricelh") {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "pricehl") {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (selectedSort === "default") {
            sortedData = [...allData];
        }

        setData(sortedData);
    }

    return (
        <div className='bg-gray-300 min-h-screen'>
            {selectedItem ? (
                <Details item={selectedItem} goBack={handleGoBack} />
            ) : (
                <>
                    <div className="bg-white m-12 mt-5 mb-2 p-2 flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder='Search'
                            value={query}
                            onChange={handleChange}
                            className='border-1 rounded p-2 mr-4 mt-4 '
                        />
                        <label
                            htmlFor="sorting"
                            className="text-black font-semibold justify ml-auto"
                        ></label>
                        <select
                            onChange={handleSort}
                            value={sort}
                            name="sorting"
                            id="sorting"
                            className='mr-12 mt-4 border-4 border-gray-300'>
                            <option value="default">Default</option>
                            <option value="name">Sort By Title</option>
                            <option value="pricelh">Sort By Price Low to High</option>
                            <option value="pricehl">Sort By Price High to Low</option>
                        </select>
                    </div>
                    <ItemsList items={data} />
                    <div className="bg-white flex m-12 pb-20 p-4 mt-0 gap-2"></div>
                </>
            )}
        </div>
    );
}

export default ProductListPage;

import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import Spinner from '../Utils/Spinner'

 const ProductList = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
     const navigate = useNavigate();
    const { categoryId } = useParams();
    const location = useLocation();

    // Obtener el parámetro de búsqueda desde el query string
    useEffect(() => {
        setLoading(true)
        api.get('products')
            .then((response) => {
                setItems(response.data)
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search') || '';
        if (search.length > 0) {
            setFilteredItems(
                items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            );
        } else {
            setFilteredItems(items);
        }
    }, [location.search, items]);

    return (
        <>
            {
                loading ?
                    <Spinner />
                    :
                <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
        {
          filteredItems.map((item) => (
            <div className='card mx-2 d-flex' key={item.id}  style={{ width: "18rem", height: "370px", display: "flex", flexDirection: "column", justifyContent: "stretch" }}>
              <div className='card-body'
              >
                <p className='card-title'>{item.title}</p>
                <img
                  className="card-img-top mx-auto"
                  src={item.image}
                  alt={item.title}
                  style={{ width: '150px', height: '150px', objectFit: 'contain', display: 'block' }}
                />
                <p className='card-title'>${item.price}</p>
                <button onClick={() => navigate(`/products/${item.id}`)} className="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50" style={{ marginTop: "auto" }}>
                  Ver Mas
                </button>
              </div> 
            </div>  
          ))
          
        }
      </div>
            }
        </>
    )
}

export default ProductList;

import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { useParams, useLocation } from 'react-router-dom'
import { ProductsItem } from './Product/ProductsItem'
import Spinner from '../Utils/Spinner'

export const ProductList = () => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const { categoryId } = useParams()
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
                    <div>
                        <ProductsItem products={filteredItems} />
                    </div>
            }
        </>
    )
}

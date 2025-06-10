import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
import { ProductsItem } from './Product/ProductsItem'
import Spinner from '../Utils/Spinner'

export const ProductList = () => {

   const [loading, setLoading] = useState(false)
     const [items, setItems] = useState([])
       const {categoryId} = useParams()

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
      console.log("items ", items)


  return (
      <>
       {
                loading ?
              <Spinner/>
                :
                <div>
                <ProductsItem products ={items}/>
                </div>
            }
          
    </>
  )
}

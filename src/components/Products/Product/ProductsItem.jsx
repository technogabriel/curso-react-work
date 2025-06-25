import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { api } from "../../../api";
import Spinner from "../../Utils/Spinner";


const ProductsItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`products/${id}`)
      .then(res => {
        if (!res.data || Object.keys(res.data).length === 0) {
          setError('Producto no encontrado.');
        } else {
          setProduct(res.data);
        }
      })
      .catch(() => {
        setError("Producto no encontrado.");
      });
  }, [id]);


  if (error) {
    return (
      <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
        <div className='alert alert-danger w-100 text-center'>{error}</div>
        <button onClick={() => navigate('/products')} className="btn btn-secondary mx-auto">Volver</button>
      </div>
    );
  }

  if (!product) {
    return <div><Spinner /></div>;
  }

  return (
    <>
      <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
        <div className='card mx-2' style={{ width: "auto", height: "auto", display: "flex", flexDirection: "column", justifyContent: "stretch" }}>
          <div className='card-body '>
            <p className='card-title'>{product.title}</p>
            <img
              className="card-img-top mx-auto"
              src={product.image}
              alt={product.title}
              style={{ width: '150px', height: '150px', objectFit: 'contain', display: 'block' }}
            />
            <p>{product.description}</p>

            <button onClick={() => navigate('/products')} className="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50">
              Volver
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
export default ProductsItem;

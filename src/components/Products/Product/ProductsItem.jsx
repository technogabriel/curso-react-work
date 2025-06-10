import { useNavigate } from "react-router"


export const ProductsItem = ({ products = [] }) => {
  const navigate = useNavigate()

  const handleProductId = (productId) => {
    navigate(`/products/${productId}`);
  }


  return (
    <>
      <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
        {
          products.map((item) => (
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
                <button onClick={() => handleProductId(item.id)} className="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50" style={{ marginTop: "auto" }}>
                  Ver Mas
                </button>
              </div> 
            </div>  
          ))
          
        }
      </div>
      
    </>
  )
}



export const ProductsItem = ({products=[]}) => {
   

  return (
    <>
  <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
        {
          products.map((item)=>(
            <div className='card mx-2' key={item.id}style={{ width: "18rem" }}>
              <div className='card-body'>
               <p  className='card-title'>{item.title}</p> 
               <img
                 className="card-img-top mx-auto"
                 src={item.image}
                 alt={item.title}
                 style={{ width: '150px', height: '150px', objectFit: 'contain', display: 'block' }}
               />
                <p  className='card-title'>${item.price}</p> 
              </div>
              
            </div>
          ))
        }
    </div>
    </>
  )
}

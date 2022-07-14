import React,{useState,useEffect} from 'react'

const Products = () => {
  const [products, setProducts] = useState([])


  const fetchData = async () => {
    const response = await fetch("https://api.ecommerce.com/products")
    const data = await response.json()
    setProducts(data.sort((minPrice,maxPrice)=>parseInt(minPrice.price) < parseInt(maxPrice.price) ? -1: 1).slice(0,999))
  }

  useEffect(() => {
    fetchData()
    
  }, [])
  return (
    <div>
      {products.length > 0 && (
       
       <div>
         <h1>Products</h1>
         <ul>
         {products.map(product => (
           <li key={product.id}> 
           <h2 >{product.products.name} {product.products.price}  {product.count} | {product.total}</h2>
           </li>
         ))}
         </ul>
         
       </div>
      
     )}
    </div>
  )
}

export default Products
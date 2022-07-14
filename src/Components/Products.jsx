import React,{useState,useEffect} from 'react'

const Products = () => {
  const [products, setProducts] = useState([])


  const fetchData = async () => {
    const response = await fetch("https://api.ecommerce.com/products")
    const data = await response.json()
    setProducts(data.sort((minPrice,maxPrice)=>parseInt(minPrice.price) < parseInt(maxPrice.price) ? -1: 1).slice(minPrice,maxPrice))
  }

  useEffect(() => {
    fetchData()
    
  }, [])
  return (
    <div>
      {products.length > 0 && (
       
       <div>
         <h1 className="text-center font-bold">Products</h1>
         <ul className="grid grid-cols-4 card1">
         {products.map(product => (
           <li key={product.id}> 
           <h2 >{product.products.name}  {product.count} | {product.total}</h2>
           </li>
         ))}
         </ul>
         
       </div>
      
     )}
    </div>
  )
}

export default Products
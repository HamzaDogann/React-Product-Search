import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import ProductsData from './components/data.js'



function App() {

  // App States
  const [inputValue, setInputValue] = useState('');
  const [products, setProducts] = useState(ProductsData)

  
  //Input değiştiği zaman
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = ProductsData.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filtered);


    // Ürün Bulunmuyorsa
    setTimeout(() => {
      if (filtered.length < 1) {
        alert("Ürün Bulunamadı")
      }
    }, 2000);

  }


  return (
    <>
      <Header onInputChange={handleInputChange} inputValue={inputValue} />
      <Products products={products} />
    </>
  )
}

export default App

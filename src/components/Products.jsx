import ProductCart from './ProductCart';


function Products({products}) {

  
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>

            {products.map((product, index) => (
                <ProductCart key={index} product={product} />
            ))}

        </div>
    );
}

export default Products;

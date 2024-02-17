function ProductCart({ product }) {

    return (
        <div className=" mx-3 my-2 h-max p-3  border-4 border-gray-300  rounded-md">

            <div className='flex justify-center'>
                <img
                    className="max-w-200 h-200 object-cover rounded-sm"
                    src={product.image}
                    alt=""
                />
            </div>

            <div className='mt-4'>
                <h1 className="text-zinc-700 font-bold text-2xl">
                    {product.name}
                </h1>
                <hr className="my-3 border-2 rounded-sm" />
            </div>


            <div className="flex justify-center justify-between text-neutral-600 text-1xl">
                <p className='p-2'>
                    Price
                </p>
                <p className='border p-2 rounded bg-white text-slate-800'>
                    {product.price} $
                </p>
            </div>

            <div className="mt-3">
                <button className='border p-3 rounded-xl bg-cyan-500 border-none'>Sepete Ekle</button>
            </div>

        </div>
    );
}

export default ProductCart;

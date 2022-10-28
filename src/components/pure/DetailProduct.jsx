import React from 'react';
import PropTypes from 'prop-types';

const DetailProduct = ( { product } ) => {

    return (
        <>
            {/* Product Details  */}
            <div className='w-full h-full lg:h-96 block lg:flex justify-center items-center '>
                {/* Product Image */}
                <div className="w-full h-56 lg:h-full flex justify-center items-center lg:w-1/2">
                    <img className='w-fit h-full m-auto object-contain' src={product.image} alt="" />
                </div>
                {/* Product features  */}
                <div className="w-full flex flex-col justify-center items-center lg:w-1/2 p-2">
                    <div className='w-full flex justify-center items-center' >
                        <h1 className='text-xl md:text-2xl font-bold' > { product.title } </h1>
                    </div>
                    <div className='w-full flex justify-center items-center py-2'>
                        <h3 className='text-lg' > { product.details }. </h3>
                    </div>
                    { product.discount !== 0
                        ?

                        <div className='w-full flex flex-col justify-start items-center'>
                            <div className='w-full flex justify-start items-center'>
                            <h1 className='text-xl' >$ { product.price - ((product.price * product.discount) / 100) } </h1>
                            <div className='ml-4 bg-cyan-200 px-2 rounded-lg'>
                                <span className='text-white'>
                                { product.discount }%
                                </span>
                            </div>
                            </div>
                            <h2 className='w-full flex ml-4 line-through'> {product.price} </h2>
                        </div>
                        :
                        <div className='w-full flex justify-start items-center h-12'>
                            <h1 className='text-xl' >$ { product.price } </h1>
                        </div>
                    }
                    <div className="w-full flex justify-center items-center mt-8">
                        <div className="w-1/2 md:w-1/3 flex justify-center items-center text-black font-bold p-2" >
                            <button className="w-1/3 mr-2 border-[#2c3e50] rounded-xl border-2 p-2 hover:bg-cyan-200 hover:text-black">-</button>
                            <input disabled className="w-1/3 p-2 border-[#2c3e50] rounded-xl border-2" min="1" type="number" />
                            <button className="w-1/3 ml-2 border-[#2c3e50] rounded-xl border-2 p-2 hover:bg-cyan-200 hover:text-black">+</button>
                        </div>
                        <div className="w-1/2 md:w-2/3 flex justify-center items-center">
                            <button className="w-full lg:w-2/3 p-2 bg-cyan-200 rounded-xl text-black font-bold">Add a cart</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Description  */}
            <div className='w-full flex justify-center mt-8'>
                <div className='w-5/6 flex flex-col justify-center items-center'>
                <h2 className='w-full flex underline mb-2'> Description </h2>
                <div>
                    <h2> { product.descripcion } </h2>
                </div>
                </div>
            </div>
        
        </>
    )
}


DetailProduct.propTypes = {
    product: PropTypes.object.isRequired
  }

export default DetailProduct;

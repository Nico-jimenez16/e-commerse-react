import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './Button';

import { AiFillCaretDown } from "react-icons/ai";



// impotando Hooks
import { useCard } from '../../hooks/useCard';

const DetailProductComponent = ( { product } ) => {
    // STATE 
    const [description, setDescription] = useState(false)
    const [details, setDetails] = useState(false)

    const handleDescription = () => {
        setDescription(!description)
    }

    const handleDetails = () => {
        setDetails( !details )
    }

    const { addCard, sumarCantidad, restarCantidad, cantProduct } = useCard()

    return (
        <>
            {/* Product Images */}
            <div className='w-full h-full lg:h-full block lg:flex justify-center items-center '>
                <div className="w-full full lg:w-2/3 h-full flex flex-col justify-center items-center">
                    <img className='w-fit h-96 m-auto object-contain' src={product.image} alt="" />
                    <div className='w-4/6 h-48 hidden md:grid grid-cols-4 gap-2'>
                        {
                            [0,1,2,3].map(() => {
                                return(
                                    <img className='w-full h-48 object-contain hover:shadow-xl' src={product.image} alt="images secondary" />
                                )
                            })
                        }
                    </div>
                </div>
                {/* Product features  */}
                <div className="w-full lg:w-1/3 h-full flex flex-col justify-center items-top py-2 px-4">
                    <div className='w-full my-8 md:mb-8'>
                        <input className='w-full border border-black p-2 rounded-md' name='discount' type="text" placeholder='Ingrese codigo de descuento' />
                    </div>
                    <div className='w-full flex justify-center items-center mb-4 pb-4 border-b border-blue-200' >
                        <h1 className='text-xl md:text-2xl font-bold' > { product.title } </h1>
                    </div>
                    { product.discount !== 0
                        ?

                        <div className='w-full flex flex-col justify-start items-center'>
                            <div className='w-full flex justify-start items-center'>
                            <h1 className='text-xl font-bold'>$ { product.price - ((product.price * product.discount) / 100) } </h1>
                            <div className='ml-4 bg-cyan-400 px-2 rounded-lg'>
                                <span className='text-white'>
                                { product.discount }%
                                </span>
                            </div>
                            </div>
                            <h2 className='w-full flex ml-4 line-through'>$ {product.price} </h2>
                        </div>
                        :
                        <div className='w-full flex justify-start items-center h-12'>
                            <h1 className='text-xl font-bold' >$ { product.price } </h1>
                        </div>
                    }
                    <div className="w-full flex justify-center items-center mt-4">
                        <div className="w-1/2 md:w-1/3 flex justify-center items-center text-black font-bold p-2" >
                            <button onClick={restarCantidad} className="w-1/3 mr-2 border-[#2c3e50] rounded-xl border-2 p-2 hover:bg-cyan-200 hover:text-black">-</button>
                            <input disabled className="w-1/3 p-2 border-[#2c3e50] rounded-xl border-2" min="1" type="number" value={ cantProduct } />
                            <button onClick={sumarCantidad} className="w-1/3 ml-2 border-[#2c3e50] rounded-xl border-2 p-2 hover:bg-cyan-200 hover:text-black">+</button>
                        </div> 
                        <div className="w-1/2 md:w-2/3 flex justify-center items-center">
                            <ButtonComponent 
                                text='Add to Cart' 
                                handleFunction={() => addCard(product)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Description  */}
            <div onClick={handleDescription} className='w-full flex justify-center items-center mt-8 cursor-pointer'>
                <div className='w-5/6 p-6 md:w-5/6 border-y border-blue-200'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='text-lg font-bold'> Descriptión </h2>
                        <AiFillCaretDown />
                    </div>
                    { description &&
                        <div className='flex mt-4 h-auto'>
                            <div className='w-full md:w-1/2'>
                                <h1 className='mb-4 font-bold'> {product.title}</h1>
                                <h2 className=''> { product.descripcion } </h2>
                            </div>
                            <div className='w-1/2 hidden md:flex justify-center items-center'>
                                <img className='w-fit h-56 object-center' src={product.image} alt=""/>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {/* Product Details  */}
            <div onClick={handleDetails} className='w-full flex justify-center items-center mt-4 cursor-pointer'>
                <div className='w-5/6 p-6 md:w-5/6 border-y border-blue-200'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='text-lg font-bold'> Details </h2>
                        <AiFillCaretDown />
                    </div>
                    { details &&
                        <div className='flex mt-4 h-auto'>
                            <div className='w-1/2 hidden md:flex justify-center items-center'>
                                <img className='w-fit h-56 object-center' src={product.image} alt="" />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <h1 className='mb-4 font-bold'> {product.title}</h1>
                                <h2 className=''> { product.details } </h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        
        </>
    )
}


DetailProductComponent.propTypes = {
    product: PropTypes.object.isRequired,
}

export default DetailProductComponent;

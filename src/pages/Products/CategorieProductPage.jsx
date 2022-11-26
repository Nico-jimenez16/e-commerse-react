import React , { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductComponent from '../../components/pure/Product';
import Loader from '../../components/pure/Loader'

import { useServiceProducts } from '../../hooks/useServiceProducts';


const bannerNotebook = require('../../assets/bannerNotebook.jpg')
const bannerSmartphone = require('../../assets/bannerSmartphone.jpg')
const bannerHeadphone = require('../../assets/bannerHeadphone.png')
const bannerSmartwatch = require('../../assets/bannerSmartwatch.webp')

const CategorieProductPage = () => {
    
    const { categorie } = useParams()
    const { status ,  searchProductCategorie } = useServiceProducts()
    
    // ? Producto con id 
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const response = searchProductCategorie( categorie )
        setProduct(response)
        
    // eslint-disable-next-line
    }, [status , categorie])

    
    const banner = () => {
        switch ( categorie ) {
            case 'notebook':
                return bannerNotebook
            case 'smartphone':
                return bannerSmartphone
            case 'headphones':
                return bannerHeadphone
            case 'smartwatch':
                return bannerSmartwatch
            default:
                return bannerNotebook;
        }
    }

    return (
        <>
            <div className='w-full h-auto lg:h-96 flex justify-center items-center overflow-hidden'>
                <img className='w-full h-full object-contain p-2' src={ banner() } alt="" />
            </div>
            <div className='w-full h-16 flex justify-center items-center p-2 bg-cyan-200'>
                <h1 className='text-xl text-black font-bold'> { categorie } </h1>
            </div>
            { !status &&
                <Loader/>
            }
            <Link to={'/products'} className='w-full h-12 flex justify-end items-end pr-4 md:pr-8 text-cyan-600'>
                <h2> {'view all products ->>>'} </h2>
            </Link>
            <div className='w-full p-4 md:px-8 md:py-4'>
                { status &&
                    product.map((product) => {
                        return (
                            <ProductComponent
                                key={product.id}
                                product={product}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default CategorieProductPage;

import React , { useState } from 'react';
import FilterProduct from '../pure/filters/FilterCategories';
import FilterBrands from '../pure/filters/FilterBrands';


const IndexFilterComponent = () => {


    // ? estados para la visibilidad de las opciones del filtro
    const [productVisibility, setProductVisibility] = useState(false)
    const [brandVisibility, setBrandVisibility] = useState(false)

    // ? funcion para habilitar y deshabilitar las categorias de los productos  
    const viewFilterProducto = () => {
      setProductVisibility(!productVisibility)
    }

    // ? funcion para habilitar y deshabilitar las marcas de los productos
    const viewFilterBrand = () => {
      setBrandVisibility(!brandVisibility)
    }

    // icono de la flechita para abajo
    const arrowIcon = (
      <span className="flex justify-center items-center pl-2 font-bold">
        <svg aria-label="Icono de comilla angular hacia abajo" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12" className="_ab6-">
          <path d="M12 17.502a1 1 0 01-.707-.293l-9-9.004a1 1 0 011.414-1.414L12 15.087l8.293-8.296a1 1 0 011.414 1.414l-9 9.004a1 1 0 01-.707.293z"></path>
        </svg>
      </span> 
    )

    return (
      <>

        <div className='w-full flex flex-col justify-center items-center mt-4 md:mt-12'>
          <div className='w-full flex justify-center items-center h-12 bg-cyan-200 rounded-md mb-4'>
            <h2 className='text-black font-bold'>Filters</h2>
          </div>
          <div onClick={ viewFilterProducto } className='w-full flex justify-center items-center border-b rounded-lg p-3 cursor-pointer'>
            <div className='w-full flex justify-between items-center'>
              <h2 className='text-lg'> Filter Products </h2>
              { arrowIcon }
            </div>
          </div>
          { productVisibility &&
              <FilterProduct/>
          }
          <div onClick={ viewFilterBrand } className='w-full flex justify-center items-center border-b rounded-lg p-3 cursor-pointer'>
            <div className='w-full flex justify-between items-center'>
              <h2 className='text-lg' > Filter Brands </h2>
              { arrowIcon }
            </div>
          </div>
          { brandVisibility &&
              <FilterBrands/>
          }
        </div>
        
      </>
    )
}

export default IndexFilterComponent;

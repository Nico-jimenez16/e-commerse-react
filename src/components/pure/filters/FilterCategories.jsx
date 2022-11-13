import React from 'react';
import { useFilterProducts } from '../../../hooks/useFilters';

const FilterProductComponent = () => {

    const { categorias , filterProductsCategorias , indexCategorieApplied } = useFilterProducts()


    return (
      <div className='w-full flex flex-col justify-center items-center p-3'>
        { 
            categorias.map((categoria , index) => {
              return(
                <div onClick={() => filterProductsCategorias(categoria) } key={index} className='w-full flex justify-around items-center my-1 hover:text-cyan-600 cursor-pointer'>
                  <h3 className='w-1/6'>
                    {(indexCategorieApplied === index) ?
                      <img className='w-1/2 h-4' src="https://cdn-icons-png.flaticon.com/512/17/17153.png" alt="" /> :
                      '-'
                    } 
                  </h3>
                  <h3 className='w-5/6'> {categoria} </h3>
                </div>
              )
            })
        }
      </div>
    )
}

export default FilterProductComponent;

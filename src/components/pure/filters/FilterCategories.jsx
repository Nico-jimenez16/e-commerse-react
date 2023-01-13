import React, { useState } from 'react';
import { useFilterProducts } from '../../../hooks/useFilters';

const FilterProductComponent = () => {

    const [icon, setIcon] = useState(null)
    const [actualCat, setActualCat] = useState(null)

    const { categorias , filterProductsCategorias } = useFilterProducts()

    const filterCategoriaHandler = (cat , i) => {
      filterProductsCategorias(cat)
      if(cat === actualCat){
        setIcon(null)
        setActualCat(null)
      }else {
        setActualCat(cat)
        setIcon(i)
      }
    }

    return (
      <div className='w-full flex flex-col justify-center items-center p-3'>
        { 
            categorias.map((categoria , index) => {
              return(
                <div onClick={() => filterCategoriaHandler(categoria , index) } key={index} className='w-full flex justify-around items-center my-1 hover:text-cyan-600 cursor-pointer'>
                  <h3 className='w-1/6'>
                    { icon === index ?
                      <img className='w-1/3 h-4 object-contain' src="https://cdn-icons-png.flaticon.com/512/17/17153.png" alt="" />  
                      :
                      <div>-</div>
                    }
                  </h3>
                  <h3 className='w-5/6'> { categoria } </h3>
                </div>
              )
            })
        }
      </div>
    )
}

export default FilterProductComponent;

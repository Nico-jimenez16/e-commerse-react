import React, { useState } from 'react';
import { useFilterProducts } from '../../../hooks/useFilters';

const FilterBrandsComponent = () => {

  const [icon, setIcon] = useState(null)
  const [actualBrand, setActualBrand] = useState(null)

  const { brand , filterProductsBrand } = useFilterProducts()

  const filterBrandHandler = (brand, i) => {
    filterProductsBrand(brand)
    if(brand === actualBrand){
      setIcon(null)
      setActualBrand(null)
    }else {
      setActualBrand(brand)
      setIcon(i)
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center p-3'>
        {
              brand.map((brand , index) => {
                return(
                  <div onClick={() => filterBrandHandler(brand, index) } key={index} className='w-full flex justify-around items-center my-1 hover:text-cyan-600 cursor-pointer'>
                    <h3 className='w-1/6'>
                    { icon === index ?
                      <img className='w-1/3 h-4 object-contain' src="https://cdn-icons-png.flaticon.com/512/17/17153.png" alt="" />  
                      :
                      <div>-</div>
                    }
                    </h3>
                    <h3 className='w-5/6' > { brand } </h3>
                  </div>
                )
              })
          }
    </div>
  )
}

export default FilterBrandsComponent;

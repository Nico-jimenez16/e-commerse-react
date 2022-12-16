import React from 'react';
import { useFilterProducts } from '../../../hooks/useFilters';

const FilterBrandsComponent = () => {

  const { brand , filterProductsBrand } = useFilterProducts()

  const filterBrandHandler = (brand) => {
    filterProductsBrand(brand)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center p-3'>
        {
              brand.map((brand , index) => {
                return(
                  <div onClick={() => filterBrandHandler(brand) } key={index} className='w-full flex justify-around items-center my-1 hover:text-cyan-600 cursor-pointer'>
                    <h3 className='w-1/6'> -
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

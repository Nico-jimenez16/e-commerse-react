import React from 'react';
import { useService } from '../../../hooks/useServiceProducts';

const FilterBrands = ({ brand }) => {

  const { filterProductsBrand } = useService()

  return (
    <div className='w-full flex flex-col justify-center items-center p-3'>
        {
              brand.map((brand , index) => {
                return(
                  <div onClick={() => filterProductsBrand(brand) } key={index} className='w-full flex justify-around items-center my-1 hover:text-lime-400 cursor-pointer'>
                    <h3 className='w-1/6'> - </h3>
                    <h3 className='w-5/6' > { brand } </h3>
                  </div>
                )
              })
          }
    </div>
  )
}

export default FilterBrands;

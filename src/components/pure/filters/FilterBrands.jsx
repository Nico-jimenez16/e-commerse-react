import React from 'react';

const FilterBrandsComponent = ({ brand , filterProductsBrand , indexBrandApplied }) => {

  return (
    <div className='w-full flex flex-col justify-center items-center p-3'>
        {
              brand.map((brand , index) => {
                return(
                  <div onClick={() => filterProductsBrand(brand) } key={index} className='w-full flex justify-around items-center my-1 hover:text-lime-400 cursor-pointer'>
                    <h3 className='w-1/6'>
                      { (indexBrandApplied === index) ?
                        <img className='w-1/2 h-4' src="https://cdn-icons-png.flaticon.com/512/17/17153.png" alt="" /> :
                        '-'
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

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LineupComponent = () => {

    const nativage = useNavigate()
    
    const goProducts = (categorie) => {
      nativage(`/product/${categorie}`)
    }

    const lineupProduct = [
      {
        name: 'Notebook',
        img: 'https://cdn.comparez-malin.fr/img/lenovo/2022/30141/lenovo-ideapad-3-15-blue-1.jpg'
      },
      {
        name: 'Smartphone',
        img: 'https://www.notebookcheck.org/fileadmin/Notebooks/LG/K30/K30_blk_DZ09.jpg'
      },
      {
        name: 'Headphones',
        img: 'https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/7003747.jpg'
      },
      {
        name: 'Smartwatch',
        img: 'https://i5.walmartimages.com/asr/d1ec9478-90c6-4583-ab1a-ae66d8bcf8a0.85aefe7b100e614a8880ce99885f5993.jpeg'
      }
    ]

    return (
      <>

        <div className='w-full flex justify-center item-center p-4'>
          <h1 className='rounded-lg text-white bg-cyan-500 px-12 py-1'>Lineup Products</h1>
        </div>
        <div className='w-full flex flex-wrap justify-around item-center p-4 md:p-8 shadow-inner shadow-cyan-500/50 border-b'>
            {
              lineupProduct.map((lineup ,index) => {
                return (
                  <div onClick={() => goProducts( lineup.name.toLowerCase() ) } id={ lineup.name } key={index} className='relative w-3/4 md:w-48 h-48 mt-8 md:m-4 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl cursor-pointer'>
                      <div className='absolute w-full p-2 bottom-0 backdrop-contrast-50 bg-white/20'>
                        <h1 className='text-md font-bold'> {lineup.name} </h1>
                      </div>
                      <img className='w-full h-full object-contain' src={lineup.img} alt="lineupImages" />
                  </div>
                )
              })
            }
        </div>
        
      </>
    )
}

export default LineupComponent;

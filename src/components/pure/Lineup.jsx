import React from 'react';

// importando Hooks 
import { useRedirect } from '../../hooks/useRedirect';

const Notebook = require('../../assets/lineup/noteLineup.jpg')
const Smartphone = require('../../assets/lineup/smartphoneLineup.jpg')
const Headphones = require('../../assets/lineup/hearphoneLineup.webp')
const Smartwatch = require('../../assets/lineup/smartwhachLineup.webp')

const lineupProduct = [
  {
    name: 'Notebook',
    img: Notebook
  },
  {
    name: 'Smartphone',
    img: Smartphone
  },
  {
    name: 'Headphones',
    img: Headphones
  },
  {
    name: 'Smartwatch',
    img: Smartwatch
  }
]

const LineupComponent = () => {

    const { goToPage } = useRedirect()
    
    const goProducts = (categorie) => {
      goToPage(`/product/${categorie}`)
    }

    return (
      <>

        <div className='w-full flex justify-center item-center p-4'>
          <h1 className='rounded-lg text-white bg-cyan-500 px-12 py-1'>Lineup Products</h1>
        </div>
        <div className='w-full grid gap-1 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-center m-auto p-4 md:p-8 shadow-inner shadow-cyan-500/50 border-b'>
            {
              lineupProduct.map((lineup ,index) => {
                return (
                  <div 
                    onClick={() => goProducts( lineup.name.toLowerCase() ) } 
                    id={ lineup.name } 
                    key={index} 
                    className='relative border mt-4 md:m-4 hover:shadow-xl hover:transition-all hover:duration-300 cursor-pointer'
                  >
                      <img className='w-full h-full object-contain' src={lineup.img} alt="lineupImages" />
                      <div className='absolute w-full p-2 bottom-0 backdrop-contrast-50 bg-white/20'>
                        <h1 className='text-md font-bold'> {lineup.name} </h1>
                      </div>
                  </div>
                )
              })
            }
        </div>
        
      </>
    )
}

export default LineupComponent;

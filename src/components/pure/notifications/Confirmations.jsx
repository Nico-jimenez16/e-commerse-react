import React , { useContext } from 'react';
import PropTypes from 'prop-types';

import contextNotification from '../../../context/NotificationContext';

const ConfirmationsComponent = () => {

  const { showNotification , type , message } = useContext(contextNotification)


  return (
    <>
      {showNotification && 
        <div className='fixed z-50 w-auto right-10 top-16 rounded-xl h-auto'>
          <div className={type==='success' ? 'bg-green-300' : 'bg-red-300'} style={{ padding:'16px' }}>
            <h2 className='text-md text-white font-bold'> { message } </h2>
          </div>
        </div>
      }

    </>
  )
}

ConfirmationsComponent.propTypes = {
  showNotification: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string
}

export default ConfirmationsComponent;

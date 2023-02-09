import React from 'react'
import PropTypes from 'prop-types'

const ButtonComponent = ({ type, text, handleFunction }) => {
  return (
    <button onClick={() => handleFunction()} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase">
        { text }
    </button>
  )
}

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    handleFunction: PropTypes.func,
    type: PropTypes.string
}

export default ButtonComponent

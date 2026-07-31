import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Brand = () => {
  return (
     <div className='text-lg font-semibold flex items-center gap-1'>
        <FontAwesomeIcon icon={faCode} size='sm'/>
        areeb.dev
      </div>
  )
}

export default Brand

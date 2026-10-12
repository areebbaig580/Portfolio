import  { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Brand =() => {
  return (
     <Link className='text-lg font-semibold flex items-center gap-1 cursor-pointer select-none logo' to={'/'}>
        <FontAwesomeIcon icon={faCode} size='sm'/>
        areeb.dev
      </Link>
  )
};

export default Brand

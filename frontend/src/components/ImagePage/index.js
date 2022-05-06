import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllImages} from '../../store/images'


function ImagePage() {
  const dispatch = useDispatch();

  const imagesObj = useSelector(state => state.images);
  const images = Object.values(imagesObj);

  useEffect(() =>{
    dispatch(getAllImages());
  }, [dispatch])

  return(
    <>

    </>
  )
}

export default ImagePage;

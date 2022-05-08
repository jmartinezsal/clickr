import React from 'react';
import { useSelector } from 'react-redux';

import SplashPage from '../SplashPage';
import ExplorePage from '../ExplorePage';

function UserViewPage(){
  const sessionUser = useSelector(state => state.session.user)

  return(
    <>
    {sessionUser ?
    <ExplorePage currUser= {sessionUser} /> : <SplashPage />}
    </>
  )
}

export default UserViewPage;

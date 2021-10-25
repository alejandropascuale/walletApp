import React, { useContext } from 'react';

import { UserContext } from '../App';

import OperationsUser from './OperationsUser';
import OperationsGuest from './OperationsGuest'

function LastOperations() {
  
  const {userLogin} = useContext(UserContext);

  if(userLogin && typeof userLogin != 'undefined'){
        return (
            <OperationsUser />
        )
    } else {
        return (
            <OperationsGuest />
        )
    }
}

export default LastOperations;
import React, {useState} from 'react';
import setMainView from '../../../data/hook/setMainView';

import ImageView from './imageview/ImageView';
import ListView from './listview/ListView';

export default function ViewNav() {

  const {viewImageList} = setMainView();

  if (viewImageList) {
    return(
      <ImageView/>
    )
  } else {
    return(
      <ListView/>
    )
  }

}

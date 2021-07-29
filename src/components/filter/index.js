import React from 'react'

let item; 

export const getItem = ({obtener}) => {
   item = obtener;
   console.log(item);
}
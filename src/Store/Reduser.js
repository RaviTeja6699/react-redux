const initialstate={
  product:{}

}


export const reduser=(state=initialstate,action)=>{
  if(action.type==='udateproducts'){
    return{...state,product:{...action.value}}

  }
  return{
    state
  }
}
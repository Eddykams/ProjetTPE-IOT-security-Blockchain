import React, { Component } from 'react';
 
/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const tempeture = ({tempeture}) => {
    
  const divStyle = {
      /*code omitted for brevity */
  }
 
  if(!tempeture) {
    return(<div style={divStyle}>  Tempeture Doesnt exist </div>);
  }
     
  //Else, display the temperature data
  return(  
    <div style={divStyle}> 
      <h2> Temperature : {tempeture.tempeture} </h2>
        <p> localisation : {tempeture.localisation} </p>
      <h3> Heure : {tempeture.temps} </h3>
      <h3> Etat : {tempeture.etat} </h3>
      
    </div>
  )
}
 
export default Tempeture ;
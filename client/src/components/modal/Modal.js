import React from 'react'
import { Background, Div } from './ModalElement';

const ModalComponent = (props) => {
    
  
  return (
  <>

      {props.modal && (
 <Background>
        <Div>
          
          <h2>Modal Title</h2>
          <p>Modal Content</p>
          <button onClick={props.handleModal(!props.modal)}>Close</button>
        </Div>
       </Background>
       )}
  </>
  )
}

export default ModalComponent
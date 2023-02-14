import React from 'react'
import { Background, Div } from './ModalElement';

const ModalComponent = (props) => {
    
  
  return (
  <>

 <Background onClick={()=>props.setModalShow(!(props.modalShow))}>
        <Div>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
          <button onClick={()=>props.setModalShow(!(props.modalShow))}>Close</button>
        </Div>
       </Background>
  </>
  )
}

export default ModalComponent
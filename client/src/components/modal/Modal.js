import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApplyForOffer } from '../../redux/actions/offerActions';
import { Background, Div, Form, InputText, Input, Button, H1 } from './ModalElement';

const ModalComponent = (props) => {

  const dispatch = useDispatch();
  const success = useSelector(state => state.success);
  const error = useSelector(state => state.errors);
  const { id } = useParams();
  const Apply = (event) => {
    event.preventDefault();

    dispatch(ApplyForOffer(id,form));
    console.log(form);
  };
 
  const [file, setFile] = useState(null);
  const [Letter, setLetter] = useState("");

 
  const form = new FormData();
  form.append("cv",file);
  form.append("letter",Letter)
  return (
    <>

      <Background onClick={() => props.setModalShow(!(props.modalShow))}>
      </Background>
      <Div>
        <H1>Apply For Offer</H1>
        <Form onSubmit={Apply}>
          <Input accept=".pdf" type="file" id="fileInput" name='cv'   onChange={event=>{const file=event.target.files[0]; setFile(file)}} required />
          <InputText type="textarea" id="textInput" name='letter'
            onChange={event=>{const {value}=event.target; setLetter(value)}} />
          <Button type='submit'>Apply</Button>

        </Form>
        <Button onClick={() => props.setModalShow(!(props.modalShow))}>Close</Button>
      </Div>
    </>
  )
}

export default ModalComponent
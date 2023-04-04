import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApplyForOffer, Seterror, Setsuccess } from '../../redux/actions/offerActions';
import { Background, Div, Form, InputText, Input, Button, H1, Result, ResultError, ResultSuccess, Topside, Hr, Label, Btn } from './ModalElement';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const ModalComponent = (props) => {

  const dispatch = useDispatch();
  const check = useSelector(state => state.check);
  const success = useSelector(state => state.success);
  const error = useSelector(state => state.errors);
  const { id } = useParams();

  const [formSubmitted, setFormSubmitted] = useState(false); // Track whether the form has been submitted
  Seterror();
  Setsuccess();
 
  const Apply = (event) => {
    event.preventDefault();

    dispatch(ApplyForOffer(id, form));
    console.log(form);
    //Test(form)

    setFormSubmitted(true); // Set the formSubmitted state to true when the form is submitted
  };

  const [file, setFile] = useState(null);
  const [Letter, setLetter] = useState("");
  useEffect(() => {
    console.log(props.modalShow)
    console.log(error)
  }, [props.modalShow])

  const form = new FormData();
  form.append("cv", file);
  form.append("letter", Letter)

  return (
    <>
      <Background onClick={() => props.setModalShow(!(props.modalShow))}>
      </Background>
      <Div isOpen={props.modalShow}>
        <Topside>       <FaTimes onClick={() => props.setModalShow(!(props.modalShow))} style={{ color: "#b6b6b6", cursor: "pointer" }} />
        </Topside>
        <H1>{props.offer.OFFERS.title}</H1>
        <Hr />
        {formSubmitted ? (
          <div>
            {check === true ? (
              <ResultSuccess>{success}</ResultSuccess>
            ) : check === false ? (
              <ResultError>{error}</ResultError>
            ) : null}
          </div>
        ) : (
          <Form onSubmit={Apply} >
            <div>
              <Label>Upload your CV : </Label><br />
              <Input accept=".pdf" type="file" id="fileInput" name='cv' onChange={event => { const file = event.target.files[0]; setFile(file) }} required />
            </div>
            <div>
              <Label>Cover letter :  </Label>
              <InputText id="textInput" name='letter'
                onChange={event => { const { value } = event.target; setLetter(value) }} />
            </div>
            <Btn type="submit" >Send</ Btn>
          </Form>
        )}
      </Div>
    </>
  )
}
export default ModalComponent

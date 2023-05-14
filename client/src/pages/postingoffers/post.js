import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Addoffer } from '../../redux/actions/offerActions'
import { Container, Input, Form, ContainerOne, H1, Header, Button, Div, Label, LabelDiv, Alert, H1Succ } from './postElements'
import { AiOutlineSearch } from "react-icons/ai";
import ReactQuill from 'react-quill';        //react-quill is a library to create the editor
import 'react-quill/dist/quill.snow.css';

const Post = () => {
  const [form, setForm] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);
  const [words, setWords] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [description, setDescription] = useState('');
  const errors = useSelector(state => state.errors)
  const [show, setshow] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {


  }, [])
  const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
    setForm({
      ...form, //setForm va prendre la formulaire(form)
      [e.target.name]: e.target.value, //elle va prendre la valeur de d'un input à partire le nom de l'input

    })
  }

  const onChangeHandlerDesc = (name, value) => { // update onChangeHandler to accept name and value
    setForm({
      ...form,
      [name]: value, // update the specified field in the form state with the new value
    })
  }



  const handleAddWord = () => {
    const wordInput = document.getElementById("wordInput"); //wordInput: elle va prendre l'input a partir son id 
    const word = wordInput.value.split(" ") //split : pour diviser les phrases par des espaces
    for (let i = 0; i < word.length; i++) {
      words.push(word[i]);
    }
    wordInput.value = "";
  };

  const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
    handleAddWord();



    e.preventDefault();//ne refraichir pas la page pour ne perdre pas les données 
    form.search = words

    console.log(form)

    form.search = words
    console.log(form)

    dispatch(Addoffer(form, navigate)) //appeler la fonction loginAction qui se trouve dans le store 
    setError(false);
    setSuccess(true);
    setTimeout(() => setshow(true), 200)
    setTimeout(() => setshow(false), 2000)
    setTimeout(() => setSuccess(false), 3000)

    setTimeout(() => navigate("/company"), 3500)

  }


  const modules = {    //toolbar
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ]
  };

  const formats = [    //formats of text
    'font',
    'size',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'align',
    'color', 'background'
  ];


  return (
    <>
      {success && (
        <Alert success={success} show={show}>
          <H1Succ>we will post the offer shortly</H1Succ>
        </Alert>
      )}
      <ContainerOne>
        <Container>
          <Form onSubmit={onSubmit} style={{ display: "flex", flexDirection: 'column' }}>
            <Header><H1>Post an offer</H1></Header>
            <Div><Input onChange={onChangeHandler} placeholder="Contract" name="contract" type="text" required /><LabelDiv><Label>Contract</Label></LabelDiv></Div>
            <Div><Input onChange={onChangeHandler} placeholder="Experience" name="experience" type="text" required /><LabelDiv><Label>Experience</Label></LabelDiv></Div>
            <Div> <Input onChange={onChangeHandler} placeholder="DateExpiration" name="dateExpiration" type="date" required /><LabelDiv><Label>Expiration date</Label></LabelDiv></Div>
            <Div><Input onChange={onChangeHandler} placeholder="Salary" name="salary" type="text" required /><LabelDiv><Label>Salary</Label></LabelDiv></Div>
            <Div><Input onChange={onChangeHandler} placeholder="Language" name="language" type="text" required /><LabelDiv><Label>Languages</Label></LabelDiv></Div>
            <Div><Input onChange={onChangeHandler} placeholder="Title" name="title" type="text" required /><LabelDiv><Label>Job title</Label></LabelDiv></Div>
            <Div> <Input onChange={onChangeHandler} placeholder="Adress" name="local" type="text" required /><LabelDiv><Label>Localisation</Label></LabelDiv></Div>
            <Div> <ReactQuill style={{ paddingTop: '10px', marginLeft: '30px', paddingBottom: '40px', width: '63%' }} theme="snow" onChange={(value) => onChangeHandlerDesc("description", value)} name="description" modules={modules} formats={formats} placeholder="Enter your text here"
            /><LabelDiv><Label>Job description</Label></LabelDiv></Div>
            <Div><Input type="text" id="wordInput" placeholder="Key word" /><LabelDiv><Label>Skills </Label></LabelDiv></Div>
            <Button type="submit" value="Envoyer" >Post</Button>
          </Form>
        </Container>
      </ContainerOne>
    </>
  )
}

export default Post
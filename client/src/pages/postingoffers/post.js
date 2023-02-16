import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Addoffer } from '../../redux/actions/offerActions'
import { Container, Input, Form } from './postElements'
import { AiOutlineSearch } from "react-icons/ai";


const Post = () => {
  const [form, setForm] = useState({});
  const [search, setSearch] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);
  const [words, setWords] = useState([]);
  const errors = useSelector(state => state.errors)
  useEffect(() => {

    
  }, [])
  const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
    setForm({
      ...form, //setForm va prendre la formulaire(form)
      [e.target.name]: e.target.value, //elle va prendre la valeur de d'un input à partire le nom de l'input
    })
  }



  const handleAddWord = () => {
    const wordInput = document.getElementById("wordInput");
    const word=wordInput.value.trim.split(" ")
    for (let i = 0; i < word.length; i++) {
      words.push(word[i]);
    }
    wordInput.value = "";
  };

  const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
    handleAddWord();
    e.preventDefault();//ne refraichir pas la page pour ne perdre pas les données 
    form.search=words
   
    console.log(form)

    
    // dispatch(Addoffer(form, navigate)) //appeler la fonction loginAction qui se trouve dans le store 
  }

  return (
    <>
      <Container>
        <Form onSubmit={onSubmit} style={{ display: "flex", flexDirection: 'column' }}>
          <Input onChange={onChangeHandler} placeholder="contract" name="contract" type="text" required />
          <Input onChange={onChangeHandler} placeholder="experience" name="experience" type="text" required />
          <Input onChange={onChangeHandler} placeholder="dateExpiration" name="dateExpiration" type="date" required />
          <Input onChange={onChangeHandler} placeholder="salary" name="salary" type="text" required />
          <Input onChange={onChangeHandler} placeholder="study" name="study" type="text" required />
          <Input onChange={onChangeHandler} placeholder="language" name="language" type="text" required />
          <Input onChange={onChangeHandler} placeholder="title" name="title" type="text" required />
          <Input onChange={onChangeHandler} placeholder="description" name="description" type="text" required />
          <Input type="text" id="wordInput" />
          <Input type="submit" value="Envoyer" />
        </Form>

      </Container>
    </>

  )
}

export default Post
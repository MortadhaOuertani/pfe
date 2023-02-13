import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Addoffer } from '../../redux/actions/offerActions'
import { Container, Input } from './postElements'

const Post = () => {
    const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state => state.errors)
  const navigate = useNavigate()
  const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
    setForm({
      ...form, //setForm va prendre la formulaire(form)
      [e.target.name]: e.target.value //elle va prendre la valeur de d'un input à partire le nom de l'input
    })
  }
  const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
    e.preventDefault();//ne refraichir pas la page pour ne perdre pas les données 
    dispatch(Addoffer(form))//appeler la fonction loginAction qui se trouve dans le store 
  }
    return (
        <>
            <Container>
                <form onSubmit={onSubmit} style={{display:"flex",flexDirection:'column'}}>
                <Input onChange={onChangeHandler}  name="contract" type="text" />
                <Input onChange={onChangeHandler} name="experience" type="text" />
                <Input  type="submit" />
                </form>
            </Container>
        </>

    )
}

export default Post
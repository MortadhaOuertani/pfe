import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Addoffer } from '../../redux/actions/offerActions'
import { Container, Input, Form, ContainerOne, H1, Header, Button, Div, Label, LabelDiv, Alert, LabelDivQuill, InputDesc, H1Succ } from './EditOfferElements'
import ReactQuill from 'react-quill';        //react-quill is a library to create the editor
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'

const EditOffer = () => {
    const [words, setWords] = useState({});
    const [offer, setOffer] = useState({});
    const navigate = useNavigate()
    const [show, setshow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();
    console.log(words)
    const GetOffer = (id) => {
        axios.get(`http://localhost:3600/api/GetOfferApplicants/${id}`)
            .then(res => {
                setOffer(res.data)
                console.log(words)
            })
            .catch(err => {
                console.log(err.response.data)
            });
    }
    useEffect(() => {
        GetOffer(id)
    }, []);
    useEffect(() => {
    }, [offer]);
    const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
        setOffer({
            ...offer, //setForm va prendre la formulaire(form)
            [e.target.name]: e.target.value, //elle va prendre la valeur de d'un input à partire le nom de l'input

        })
        console.log(offer)
    }
    const handleEditOffer = (id, form) => {
        axios.post(`http://localhost:3600/api/editoffer/${id}`, form)
            .then(res => {
                setError(false);
                setSuccess(true);
                setTimeout(() => setshow(true), 200)
                setTimeout(() => setshow(false), 2000)
                setTimeout(() => setSuccess(false), 3000)
                setTimeout(() => navigate("/company"), 1000)
            })
            .catch(err => {
                setSuccess(false);
                setError(true);
                setTimeout(() => setError(false), 3000)
            });
    }
    const onChangeHandlerDesc = (name, value) => { // update onChangeHandler to accept name and value
        setOffer({
            ...offer,
            [name]: value, // update the specified field in the form state with the new value
        })
    }

    const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
        e.preventDefault();//ne refraichir pas la page pour ne perdre pas les données 
        handleEditOffer(id, offer)
    }
    const modules = {    //toolbar
        toolbar: [
            [{ 'header': [1, 2, false] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['clean']
        ]
    };

    const formats = [    //formats of text
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'align'];


    return (
        <>
            {success && (
                <Alert success={success} show={show}>
                    <H1Succ>Edited succesfully</H1Succ>
                </Alert>
            )}
            <ContainerOne>
                <Container>
                    <Form onSubmit={onSubmit} style={{ display: "flex", flexDirection: 'column' }}>
                        <Header><H1>Edit offer</H1></Header>
                        <Div>
                            <Input
                                onChange={onChangeHandler}
                                placeholder="Contract"
                                name="contract"
                                type="text"
                                required
                                value={offer.contract || ''}
                            />
                            <LabelDiv>
                                <Label>Contract</Label>
                            </LabelDiv>
                        </Div>
                        <Div>
                            <Input
                                onChange={onChangeHandler}
                                placeholder="Experience"
                                name="experience"
                                type="text"
                                required
                                value={offer.experience || ''}
                            />
                            <LabelDiv>
                                <Label>Experience</Label>
                            </LabelDiv>
                        </Div>
                        <Div>
                            <Input
                                onChange={onChangeHandler}
                                placeholder="Salary"
                                name="salary"
                                type="text"
                                required
                                value={offer.salary || ''}
                            />
                            <LabelDiv>
                                <Label>Salary</Label>
                            </LabelDiv>
                        </Div>
                        <Div>
                            <Input
                                onChange={onChangeHandler}
                                placeholder="Language"
                                name="language"
                                type="text"
                                required
                                value={offer.language || ''}
                            />
                            <LabelDiv>
                                <Label>Languages</Label>
                            </LabelDiv>
                        </Div>
                        <Div>
                            <Input
                                onChange={onChangeHandler}
                                placeholder="Title"
                                name="title"
                                type="text"
                                required
                                value={offer.title || ''}
                            />
                            <LabelDiv>
                                <Label> Job title</Label>
                            </LabelDiv>
                        </Div>
                        <Div>
                            <Input
                                onChange={onChangeHandler}
                                placeholder="Adress"
                                name="local"
                                type="text"
                                required
                                value={offer.local || ''}
                            />
                            <LabelDiv>
                                <Label>Localisation</Label>
                            </LabelDiv>
                        </Div>
                        <Div>
                            <ReactQuill value={offer?.description || ''} style={{ paddingTop: '10px', marginLeft: '30px', paddingBottom: '40px', width: '63%' }} theme="snow" onChange={(value) => onChangeHandlerDesc("description", value)} name="description" modules={modules} formats={formats} placeholder="Enter your text here" />
                            <LabelDiv>
                                <Label>Job description</Label>
                            </LabelDiv>
                        </Div>
                        <Button type="submit" value="Envoyer" >EDIT</Button>
                    </Form>
                </Container>
            </ContainerOne>

        </>
    )
}

export default EditOffer
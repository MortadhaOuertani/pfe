import React, { useEffect, useState } from 'react'
import { GrFormClose, GrLocation } from 'react-icons/gr'
import { AccRef, Background, Butonwraper, Button, Buttonskill, ColorTop, Edit, EditDiv, H2, H3, H4, H4age, Img, ImgWrapper, InfoWrapper, InformationBottom, InformationContainer, InformationWrapper, Input, InputImg, InputImgLabel, Inputskills, LocationWrapper, Skill, SkillDiv, SkillsContainer } from './ProfileElements'
import profile from '../../images/profile.avif'
import { BsBriefcase, BsTelephone } from 'react-icons/bs'
import { SlGraduation } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Profile = () => {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [editingskills, setEditingskills] = useState(false);
  const users = useSelector(state => state.auth)
  const [form, setForm] = useState({})
  const [auth, setAuth] = useState({
    user: null,
  });
  console.log(auth)

  const base64Image = `data:image/jpeg;base64,${auth?.user?.profile}`;
  const base64ImageCompany = `data:image/jpeg;base64,${auth?.user?.logo}`;
  const fetchData = async (id) => {
    try {
      // check if the id belongs to a candidate or a company
      const response = await axios.get(`http://localhost:3600/api/checkType/${id}`);
      const type = response.data.type.trim();
      console.log(type)

      // call the appropriate function based on the type
      setTimeout(async() => {
        if (type == 'candidat') {
          console.log("candidat")
          const response = await axios.get(`http://localhost:3600/api/candidat/info/${id}`);
          setAuth({ user: response.data });
        } else if (type == "company") {
          console.log("company")
          const response = await axios.get(`http://localhost:3600/api/companydata/${id}`);
          setAuth({ user: response.data });
        }
      }, 1000);

      console.log("aze")
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData(id);
  }, []);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.profile) {
      const reader = new FileReader();
      let file;
      let formData;
      if (auth?.user?.role === "USER") {
        file = e.target.profile.files[0];
      } else {
        file = e.target.logo.files[0];
      }
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Image = reader.result.split(",")[1];
        if (auth?.user?.role === "USER") {
          formData = { ...form, profile: base64Image };
        } else {
          formData = { ...form, logo: base64ImageCompany };
        }
        console.log(formData)
        handleEditCheck(formData)
        return;
      }
    } else {
      console.log(form)
      handleEditCheck(form)
    }
    window.location.reload();

  }
  const handleEditClick = () => {
    setEditing(true);
  }
  const [editingSkills, setEditingSkills] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const handleEditClickSkills = (e) => {
    e.preventDefault()

    setEditingSkills(true);

  };

  const handleCancelEditSkills = (e) => {
    e.preventDefault()

    setEditingSkills(false);
  };

  const handleAddSkill = (e) => {
    e.preventDefault()
    if (newSkill.trim()) {
      const newSkills = [...auth.user.skills, newSkill.trim()];
      const formData = { ...form, skills: newSkills };
      handleEditCheck(formData);
      setAuth(prevState => ({
        ...prevState,
        user: {
          ...prevState.user,
          skills: newSkills
        }
      }));
      setNewSkill("");
    }
  };
  const handleEditCheck = (formData) => {
    if (auth?.user?.role === "USER") {
      axios.put("http://localhost:3600/api/candidat/edit", formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      axios.put("http://localhost:3600/api/company/edit", formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    setEditing(false);
  }

  const handleEditClose = () => {
    setEditing(false);
  }
  return (
    <>
      <Background onSubmit={onSubmit}>
        <InformationContainer>
          <ColorTop />
          <InformationBottom>
            <ImgWrapper editing={editing}>
              {auth.user?.role == "USER" ?
                <Img editing={editing} src={base64Image} />
                : <Img editing={editing} src={base64ImageCompany} />
              }
              <InputImgLabel editing={editing} htmlFor="input-img">Upload picture</InputImgLabel>
              {auth.user?.role == "USER" ? <InputImg onChange={onChangeHandler} editing={editing} className='input-img' id="input-img" type='file' accept="image/png, image/jpeg, image/svg" placeholder="upload picture" name='profile' /> : <InputImg onChange={onChangeHandler} editing={editing} className='input-img' id="input-img" accept="image/png, image/jpeg, image/svg" name='logo' type='file' placeholder="upload picture" />}
            </ImgWrapper>
            <EditDiv>
              <Edit onClick={handleEditClick}>{editing ? null : <BiEditAlt size={30} />}</Edit>
              <AccRef>{editing ? <><GrFormClose onClick={handleEditClose} size={30} /> <Button type="submit">
                <AiOutlineCheck size={30} />
              </Button></> : null}</AccRef>
            </EditDiv>
            <InformationWrapper>

              <InfoWrapper >

                <H2>{editing ? <Input onChange={onChangeHandler} type="text" name="name" defaultValue={auth.user?.name} /> : auth.user?.name}</H2>
                {auth.user?.role === "USER" && (
                  <H2>{editing ? <Input onChange={onChangeHandler} type="text" name="lastname" defaultValue={auth.user?.lastname} /> : auth.user?.lastname}</H2>
                )}
                {auth.user?.role == "USER" ? <H4age>{editing ? <Input onChange={onChangeHandler} type="number" name="age" defaultValue={auth.user?.age} /> : auth.user?.age}</H4age> : null}
              </InfoWrapper>
              <InfoWrapper>
                <GrLocation size={23} style={{ color: 'grey' }} />
                <H3>{editing ? <Input onChange={onChangeHandler} type="text" name="address" defaultValue={auth.user?.address} /> : auth.user?.address}</H3>
              </InfoWrapper>
              <InfoWrapper>
                {auth.user?.role === "USER" ? <BsBriefcase size={23} /> : null}
                {auth.user?.role === "USER" ? (editing ? <Input onChange={onChangeHandler} type="text" name="employement" defaultValue={auth.user?.employement} /> : <H3>{auth.user.employement ? auth.user?.employement : "unemployed"}</H3>) : null}</InfoWrapper>
              <InfoWrapper>
                <BsTelephone size={23} />
                {editing ? <Input onChange={onChangeHandler} type="text" name="phone" defaultValue={auth.user?.phone} /> : <H3>{auth.user?.phone}</H3>}
              </InfoWrapper>
              <InfoWrapper>

                {auth.user?.role === "USER" ? <SlGraduation size={23} /> : null}
                {auth.user?.role === "USER" ? (
                  editing ? <Input onChange={onChangeHandler} type="text" name="diplome" defaultValue={auth.user?.diplome} /> : <H3>{auth.user?.diplome}</H3>
                ) : null}
              </InfoWrapper>
              <InfoWrapper>
                <HiOutlineMail size={23} />
                {editing ? <Input onChange={onChangeHandler} type="text" name="email" defaultValue={auth.user?.email} /> : <H3>{auth.user?.email}</H3>}
              </InfoWrapper>
            </InformationWrapper>
          </InformationBottom>
        </InformationContainer>
        <SkillsContainer>
          {editingSkills ? (
            <Butonwraper>
              <Inputskills
                type="text"
                placeholder="Add Skills"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <Button onClick={handleAddSkill}>
                <AiOutlinePlus size="20px" />
              </Button>
              <Button onClick={handleCancelEditSkills}>
                <GrFormClose color="red" size="20px" />
              </Button>
            </Butonwraper>
          ) : (
            users.user?.id == id ? (
              <Butonwraper>
                <Buttonskill onClick={handleEditClickSkills}>Add Skill</Buttonskill>
              </Butonwraper>
            ) : null
          )}
          {auth.user?.role == "USER" ?
            <SkillDiv >
              {auth.user?.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillDiv>
            : null
          }
        </SkillsContainer>
      </Background>
    </>
  )
}

export default Profile
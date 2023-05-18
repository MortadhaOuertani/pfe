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
  const { id } = useParams();  //create state variables ..
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [address, setaddress] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [education, setEducation] = useState('');
  const [diplome, setdiplome] = useState('');
  const [lastname, setlastname] = useState("");
  const [age, setage] = useState("");
  const [logo, setLogo] = useState(null);
  const [profile, setProfile] = useState(null);
  const [img, setImg] = useState(null)
  const [auth, setAuth] = useState({ //create a state variable(auth:represents the user's authentication status)
    user: null,  //The initial value is an object with a user property set to null
  });
  useEffect(() => {
    fetchData(id); // fiat appel a la fonction fetchData 
  }, []); // [] : l'effet est appelé une seule fois

  const setUserData = (userData) => {
    setName(userData?.name || "");
    setEmail(userData?.email || "");
    setPhone(userData?.phone || "");
    setLocation(userData?.location || "");
    setBio(userData?.bio || "");
    setaddress(userData?.address || "");
    setCompany(userData?.company || "");
    setStartDate(userData?.startDate || "");
    setEndDate(userData?.endDate || "");
    setEducation(userData?.education || "");
    setlastname(userData?.lastname || "");
    setdiplome(userData?.diplome || "");
    setage(userData?.age || "");
  }
  
  useEffect(() => {
    if (auth.user) {
      setUserData(auth.user);
    }
  }, [auth.user]);
  

  useEffect(() => {
    if (auth?.user?.logo) {
      fetchImg(auth);
    } else if (auth?.user?.profile) {
      fetchImgCandidat(auth);
    }
  }, [auth]);
  async function fetchImgCandidat(auth) {
    const { default: file } = await import(`../../ProfilePictures/${auth?.user?.profile}`);
    setImg(file);
  }
  async function fetchImg(auth) {
    const { default: file } = await import(`../../ProfilePictures/${auth?.user?.logo}`);
    setImg(file)
  }

  const fetchData = async (id) => {
    try {
      // check if the id belongs to a candidate or a company
      const response = await axios.get(`http://localhost:3600/api/checkType/${id}`);
      const type = response.data.type.trim();
      // call the appropriate function based on the type
      setTimeout(async () => {
        if (type == 'candidat') {
          const response = await axios.get(`http://localhost:3600/api/candidat/info/${id}`);
          setAuth({ user: response.data });
        } else if (type == "company") {
          const response = await axios.get(`http://localhost:3600/api/companydata/${id}`);
          setAuth({ user: response.data });
        }
      }, 1000);

    } catch (error) {
      console.error(error);
    }
  }


  const stateSetterMap = {
    name: setName,
    email: setEmail,
    phone: setPhone,
    diplome:setdiplome,
    age:setage,
    address: setaddress,
    bio: setBio,
    company: setCompany,
    startDate: setStartDate,
    endDate: setEndDate,
    education: setEducation,
    lastname: setlastname,
  };
  
  const onChangeHandler = (e) => {
    const { name, value, files } = e.target;
    console.log(name, ":", value);
    if (files) {
      // If the input type is 'file'
      if (name === "logo") {
        setLogo(files[0]);
        console.log(logo);
      }
      if (name === "profile") {
        setProfile(files[0]);
        console.log(profile);
      }
    } else {
      // If the input type is not 'file'
      const stateSetter = stateSetterMap[name];
      if (stateSetter) {
        stateSetter(value);
      }
    }
  };
  
  
  useEffect(() => {
    console.log(logo);
    // perform some action with the updated state
  }, [logo]);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (profile || logo) {
      console.log("1")

      if (auth?.user?.role === "USER") {
        formData.append('profile', profile);
        formData.append('age', age);
        formData.append('diplome', diplome);
        formData.append('name', name);
        formData.append('lastname', lastname);
        console.log(formData, lastname)
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('location', location);
        formData.append('bio', bio);
        formData.append('company', company);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('education', education);
      } else {
        formData.append('logo', logo);
        formData.append('age', age);
        formData.append('name', name);
        formData.append('lastname', lastname);
        formData.append('diplome', diplome);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('location', location);
        formData.append('bio', bio);
        formData.append('company', company);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('education', education);
        console.log(formData)
        console.log("2")

      }
    } else {
      console.log("3")
      formData.append('name', name);
      formData.append('lastname', lastname);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('diplome', diplome);
      formData.append('address', address);
      formData.append('location', location);
      formData.append('bio', bio);
      formData.append('age', age);
      formData.append('company', company);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('education', education);
      handleEditCheck(formData)
    }
    handleEditCheck(formData)
    setTimeout(() => {
    window.location.reload();
    }, 1000);
  }
  const handleEditClick = () => {
    setEditing(true);
  }
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
              {img ? <Img src={img} alt="Logo" /> : <p>Loading...</p>
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

                <H2>{editing ? <Input onChange={onChangeHandler} type="text" name="name" value={name} /> : auth.user?.name}</H2>
                {auth.user?.role === "USER" && (
                  <H2>{editing ? <Input onChange={onChangeHandler} type="text" name="lastname" value={lastname} /> : auth.user?.lastname}</H2>
                )}
                {auth.user?.role == "USER" ? <H4age>{editing ? <Input onChange={onChangeHandler} type="number" name="age" value={age} /> : auth.user?.age}</H4age> : null}
              </InfoWrapper>
              <InfoWrapper>
                <GrLocation size={23} style={{ color: 'grey' }} />
                <H3>{editing ? <Input onChange={onChangeHandler} type="text" name="address" value={address} /> : auth.user?.address}</H3>
              </InfoWrapper>
              <InfoWrapper>
              </InfoWrapper>
              <InfoWrapper>
                <BsTelephone size={23} />
                {editing ? <Input onChange={onChangeHandler} type="text" name="phone" value={phone} /> : <H3>{auth.user?.phone}</H3>}
              </InfoWrapper>
              <InfoWrapper>

                {auth.user?.role === "USER" ? <SlGraduation size={23} /> : null}
                {auth.user?.role === "USER" ? (
                  editing ? <Input onChange={onChangeHandler} type="text" name="diplome" value={diplome} /> : <H3>{auth.user?.diplome}</H3>
                ) : null}
              </InfoWrapper>
              <InfoWrapper>
                <HiOutlineMail size={23} />
                {editing ? <Input onChange={onChangeHandler} type="text" name="email" value={email} /> : <H3>{auth.user?.email}</H3>}
              </InfoWrapper>
            </InformationWrapper>
          </InformationBottom>
        </InformationContainer>
      </Background>
    </>
  )
}

export default Profile
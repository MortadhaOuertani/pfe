import React, { useState } from 'react'
import { GrFormClose, GrLocation } from 'react-icons/gr'
import { AccRef, Background, ColorTop, Edit, H2, H3, H4, H4age, Img, ImgWrapper, InfoWrapper, InformationBottom, InformationContainer, InformationWrapper, Input, LocationWrapper, SkillsContainer } from './CandidatProfileElements'
import profile from '../../images/profile.avif'
import { BsBriefcase, BsTelephone } from 'react-icons/bs'
import { SlGraduation } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai'
const CandidatProfile = () => {
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
      setEditing(true);
    }
    const handleEditCheck= () => {
        setEditing(false);
      }
      const handleEditClose= () => {
        setEditing(false);
      }
    return (
        <>
             <Background>
      <InformationContainer>
        <ColorTop>
        </ColorTop>
        <InformationBottom>
          <ImgWrapper>
            <Img src={profile} />
          </ImgWrapper>
          <InformationWrapper>
            <Edit onClick={handleEditClick}>{editing?null:<BiEditAlt size={30}/>}</Edit>
            <AccRef>{editing?<><GrFormClose onClick={handleEditClose} size={30}/> <AiOutlineCheck size={30} onClick={handleEditCheck}/></>:null}</AccRef>
            <InfoWrapper>
              <H2>{editing ? <Input type="text" defaultValue="Amanda Smith" /> : "Amanda Smith"}</H2>
              <H4age>{editing ? <Input type="text" defaultValue="age 23" /> : "age 23"}</H4age>
            </InfoWrapper>
            <InfoWrapper>
              <GrLocation size={23} style={{ color: 'grey' }} />
              <H4>{editing ? <Input type="text" defaultValue="tunisa" /> : "tunisa"}</H4>
            </InfoWrapper>
            <InfoWrapper>
              <BsBriefcase size={23} />
              {editing ? <Input type="text" defaultValue="Lead product designer at google" /> : <H3>Lead product designer at google</H3>}
            </InfoWrapper>
            <InfoWrapper>
              <BsTelephone size={23} />
              {editing ? <Input type="text" defaultValue="29295874" /> : <H3>29295874</H3>}
            </InfoWrapper>
            <InfoWrapper>
              <SlGraduation size={23} />
              {editing ? <Input type="text" defaultValue="computer science" /> : <H3>computer science</H3>}
            </InfoWrapper>
            <InfoWrapper>
              <HiOutlineMail size={23} />
              {editing ? <Input type="text" defaultValue="Mortadha500@gmail.com" /> : <H3>Mortadha500@gmail.com</H3>}
            </InfoWrapper>
          </InformationWrapper>
        </InformationBottom>
      </InformationContainer>
      <SkillsContainer>
      </SkillsContainer>
    </Background>
        </>
    )
}

export default CandidatProfile
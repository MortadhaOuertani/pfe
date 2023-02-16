import axios from 'axios'
import { ERRORS, SET_OFFERS, SET_OFFERSS, DELETE_OFFERS } from '../types';


export const Addoffer = (form)=>dispatch=>{
    axios
      .post("http://localhost:3600/api/offers", form)
      .then(res => {
        dispatch({
            type: ERRORS,
            payload: {}
        })
        setTimeout(() => {
        }, 4000);
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetOffers = ()=>dispatch=>{
    axios
      .get("http://localhost:3600/api/offers")
      .then(res => {
          dispatch({
              type: SET_OFFERSS  ,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetOneOffer = (id)=>dispatch=>{
    axios
      .get(`http://localhost:3600/api/offers/${id}`)
      .then(res => {
          dispatch({
              type: SET_OFFERS,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}
export const UpdateOffers = (form)=>dispatch=>{
    dispatch({
        type:SET_OFFERSS ,
        payload: form
    })
}

export const DeleteOffers = (id)=>dispatch=>{
   if(window.confirm("are you sure to delete this user?")){
    axios
    .delete(`http://localhost:3600/api/offers/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_OFFERS,
            payload: id
        })
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    });
   }
}



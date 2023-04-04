import axios from 'axios'
import { ERRORS, SET_OFFERS, SET_OFFERSS, DELETE_OFFERS, SUCCESS, SET_COMPANIES, SET_CANDIDATES, CHECK } from '../types';
import "./alert.css"

export const AddCompanyOffer = (form) => dispatch => {
  axios.post("http://localhost:3600/api/offers", form)
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



export const Addoffer = (form) => dispatch => {
  axios
    .post("http://localhost:3600/api/posttoadmin", form)
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

export const GetOffers = () => dispatch => {
  axios
    .get("http://localhost:3600/api/offers")
    .then(res => {
      dispatch({
        type: SET_OFFERSS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    });
};


export const getAllCandidates = () => dispatch => {
  axios
    .get('http://localhost:3600/api/getCandidates')
    .then(res => {
      dispatch({
        type: SET_CANDIDATES,
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

export const getCompanies = () => (dispatch) => {
  axios
    .get('http://localhost:3600/api/getcompanies')  //zedt hedhy 
    .then((res) => {
      dispatch({
        type: SET_COMPANIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    });
};

export const GetOneOffer = (id) => dispatch => {
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
export const UpdateOffers = (form) => dispatch => {
  dispatch({
    type: SET_OFFERSS,
    payload: form
  })
}

export const DeleteOffers = (id) => dispatch => {
  if (window.confirm("are you sure to delete this user?")) {
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
export const Seterror = () => dispatch => {
  dispatch({
    type: ERRORS,
    payload: {}
  });
}

export const Setsuccess = () => dispatch => {
  dispatch({
    type: SUCCESS,
    payload: ""
  });
}
export const ApplyForOffer = (id, form) => dispatch => {
  axios
    .post(`http://localhost:3600/api/applyforOffer/${id}`, form)
    .then(res => {
      dispatch({
        type: CHECK,
        payload: true
      });
      dispatch({
        type: ERRORS,
        payload: ""
      });
      setTimeout(() => {

        dispatch({
          type: SUCCESS,
          payload: res.data
        });
      }, 1000);
    })
    .catch(err => {
      dispatch({
        type: CHECK,
        payload: false
      });
      dispatch({
        type: SUCCESS,
        payload: ""
      });
      setTimeout(() => {

        dispatch({
          type: ERRORS,
          payload: err.response.data
        });
      }, 1000);

    });
}

export const GetCompanyoffers = () => dispatch => {
  axios
    .get("http://localhost:3600/api/getcompanyoffers")
    .then(res => {
      dispatch({
        type: SET_OFFERSS,
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

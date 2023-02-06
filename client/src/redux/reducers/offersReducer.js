import { DELETE_OFFERS, SET_OFFERS, SET_OFFERSS } from "../types";

const intitialState = {
  OFFERSS: [],
  OFFERS: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_OFFERS:
      return {
        ...state,
        OFFERS: action.payload,
      };
    case SET_OFFERSS:
      return {
        ...state,
        OFFERSS: action.payload,
      };
      case DELETE_OFFERS:
        return {
          ...state,
          OFFERSS: state.OFFERSS.filter(p =>p._id !== action.payload),
        };  

    default:
      return state;
  }
}
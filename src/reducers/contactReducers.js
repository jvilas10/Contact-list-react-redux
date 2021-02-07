import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT,DELETE_CONTACT,STATUS_CONTACT } from '../constant/types'
const intialState = {
  contacts: [
    {
      "id": 1,
      "firstName": "Leanne ",
      "lastName": "Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031",
      "status": true,
    },

    {
      "id": 2,
      "firstName": "Ervin",
      "lastName": "Howell",
      "email": "ervin@ervin.com",
      "phone": "1-770-736-8564",
      "status": true,
    },
    {
      "id": 3,
      "firstName": "Clementine",
      "lastName": "Bauch",
      "email": "clementine@melissa.tv",
      "phone": "1-770-736-4598",
      "status": true,
    },
    {
      "id": 4,
      "firstName": "Patricia",
      "lastName": "Lebsack",
      "email": "lebsack@lebsack.tv",
      "phone": "1-770-736-4562",
      "status": true,
    },
    {
      "id": 5,
      "firstName": "Chelsey",
      "lastName": "Dietrich",
      "email": "chelsey@chelsey.tv",
      "phone": "1-770-736-4581",
      "status": true,

    },
    {
      "id": 6,
      "firstName": "hels",
      "lastName": "trich",
      "email": "hels@dhels.tv",
      "phone": "1-770-736-9864",
      "status": true,

    },

  ],
  contact: null,
}
export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case GET_CONTACT:
      let arr = state.contacts.filter((contact) => contact.id == action.payload);
      arr = arr.values();
      for (let val of arr) {
        arr = val
      }
      return {
        ...state,
        contact: arr,
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact=>contact.id==action.payload.id ? action.payload : contact)
      }
      case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact=>contact.id!=action.payload)
      }
      case STATUS_CONTACT:
      return {
        ...state,
        //contacts: state.contacts.map(contact=>contact.id==action.payload.id ? action.payload : contact)
      }
    default:
      return state;
  }

}
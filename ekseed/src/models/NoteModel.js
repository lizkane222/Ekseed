import axios from 'axios';

const URL = `https://super-crud.herokuapp.com/todos`;

class NoteModel {
  static all = () => {
    const request = axios.get(URL);
    return request;
  };
};

export default NoteModel;
import axios from 'axios';
//ajax async calls to api on backend (see ../api folder)

//fetches all todo items in database
export const fetchTodos = () => {
  return axios.get(`/api/todos`)
              .then(resp => resp.data.todos);
}

//post new item to database
export const addTodo = (newItem) => {
  return axios.post('/api/addTodo', {newItem})
              .then(resp => resp.data);
}

//remove item from database
export const deleteItem = (item) => {
  return axios.post('/api/deleteTodo', {item})
              .then(resp => resp.data);
}

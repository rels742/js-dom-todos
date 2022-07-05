const todosUl = document.querySelector("#todo-list");

const state = {
  todos: [],
};

const setCurrentState = (todos) => {
  state.todos = todos;
};

const renderCurrentState = () => {
  todosUl.innerHTML = "";

  state.todos.forEach((todo) => {
    const todoLi = document.createElement("li");
    todosUl.append(todoLi);

    if (todo.completed) {
      todoLi.setAttribute("class", "completed");
    }

    todoLi.innerText = todo.title;
  });
};

const get = () => {
  fetch("http://localhost:3000/todos")
    .then(function (Response) {
      console.log("the response", Response);
      return Response.json();
    })
    .then(function (todos) {
      console.log("the data", todos);
      setCurrentState(todos);
      renderCurrentState();
    });
};

get();

//FROM SETEVES DEMO ON HOW TO CRUD WITH APIS

// const shouldCreate = false
// const shouldUpdate = false

// const get = () => {
//     fetch('http://localhost:3000/people')
//         .then(function (resp) {
//             console.log('my response', resp)
//             return resp.json()
//         })
//         .then(function (data) {
//             console.log('data', data)
//             // do something with the people data here
//         })
// }

// const getWithId = (id) => {
//     fetch(`http://localhost:3000/people/${id}`)
//         .then(function (resp) {
//             console.log('my specific response', resp)
//             return resp.json()
//         })
//         .then(function (data) {
//             console.log('specific data', data)
//             // do something with the people data here
//         })
// }

// const create = () => {

//     fetch('http://localhost:3000/people', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: "Steve",
//             avatar: "https://images.com/steve.jpg"
//         })
//     })
// }
// const update = () => {

//     console.log('in update')

//     fetch('http://localhost:3000/people/1', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: "Steve"
//             })
//         })
//         .then(function (resp) {
//             console.log('my update response', resp)
//             return resp.json()
//         })
//         .then(function (data) {
//             console.log('update data', data)
//             // do something with the people data here
//         })
// }

// const remove = () => {
//     fetch('http://localhost:3000/people/1', {
//             method: 'DELETE'
//         })
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (data) {
//             /* do stuff with the response data */ })

// }

// get()
// getWithId("2")
// if (shouldCreate) {
//     create()
// }
// if (shouldUpdate) {
//     update()
// }
// remove()

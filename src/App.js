import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const listData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

const defaultState = {
  listItems: listData,
  task: "",
  id: "",
  completed: false
};


// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = defaultState;
  }


  // this allows the input value to change when text is added onto it //
  inputChangeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  // this take the input value and creates a new object with it, then creates a new array with the new object included //
  addListItemHandler = event => {
    event.preventDefault();
    let newListItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      listItems: [...this.state.listItems, newListItem],
      task: "",
      id: "",
      completed: false
    });
  };

  // this iterates through the array and clears items where completed == true //
  clearItemHandler = event => {
    event.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(item => item.completed === false)
    });
  }

  // this 
  completedItem = id => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed === false ? true : false
          }
        } else {
          return item;
        }
      })
    });
  };


  render() {
    return (
      <div className="app-container">
        <TodoList
          listItems={this.state.listItems}
          completedItem={this.completedItem} 
        />
        <TodoForm 
          addListItemHandler={this.addListItemHandler}
          task={this.state.task} 
          inputChangeHandler={this.inputChangeHandler}
          clearItemHandler={this.clearItemHandler}
        />
      </div>
    );
  }
}

export default App;

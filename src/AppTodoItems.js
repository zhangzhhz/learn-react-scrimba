/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"

const todosData = [
  {
    id: 1,
    text: "Take out the trash",
    completed: true
  },
  {
    id: 2,
    text: "Grocery shopping",
    completed: false
  },
  {
    id: 3,
    text: "Clean gecko tank",
    completed: false
  },
  {
    id: 4,
    text: "Mow lawn",
    completed: true
  },
  {
    id: 5,
    text: "Catch up on Arrested Development",
    completed: false
  }
]

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={`checkBox${props.item.id}`}
        checked={props.item.completed}
        onChange={(event) => props.onChange(props.item.id)}
      />
      <label htmlFor={`checkBox${props.item.id}`}>{props.item.text}</label>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)

    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            console.log(`before: ${JSON.stringify(todo)}`);
            // The following updates the state directly!! DO NOT DO THIS!!
            // todo.completed = !todo.completed;
            
            return {...todo, completed: !todo.completed};
            // console.log(`after : ${JSON.stringify(todo)}`);
          }
          return todo;
        }),
      }
    }, () => {
      console.log(this.state.todos[id - 1]);
    })
    // console.log(id);
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} onChange={this.handleChange} />)
    );

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
import React from "react";
import "./App.css";
import Column from "./Column";

class App extends React.Component {
  state = {
    tasks: [
      {id: 1,
        description: "Dar comida Gato",
        status: "To Do",
      },
      {id: 2,
        description: "Dar Banho Gato",
        status: "Done",
      } 
    ]
  };

  addTask = (e) =>{
    e.preventDefault();
    const {tasks}  = this.state;
    const value = e.target.querySelector('input').value;
    
  }
  render() {
    return (
      <div className="App">
        <Column tasks={this.state.tasks}
                status="To Do"
                addTaskToApp={this.addTask}/>
        <Column tasks={this.state.tasks}
                status="Done" />
      </div>
    );
  }
}

export default App;

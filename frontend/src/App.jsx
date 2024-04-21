import React, {Component} from 'react';
import './App.css';

const tasks =[{
id:1,
tittle: "Dunning",
description: "sending dunning letters to clients for uncollected data",
completed: false
}
]
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      viewCompleted:false,
      tasklist:tasks, 
    }
  }
  displayCompleted = status => {
    if(status){

      return this.setstatus({viewCompleted: true});
    }
    return this.setstatus({viewCompleted: false});
  }
  renderTablist = () => {
    return(
      <div className='my-5 tab-list'>
        <span onClick={() => this.displayCompleted(true)}
        className={this.state.viewCompleted ? "active" : ""}>
          Completed 
        </span>
        <span onClick={() => this.displayCompleted(false)}
        className={this.state.viewCompleted ? "" : "active"}>
          Incompleted
        </span>
      </div>
    )
  }

  renderItems = () => {
    const {viewCompleted} = this.state;
    const newItems = this.state.tasklist.filter(
      item => item.completed ===viewCompleted
    );
    return newItems.map(item => (
        <li key={item.id}className="list-groupp-item d-flex justify-content-between align-items-center"

        >
          <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
          title={item.tittle}
          >
            {item.tittle}


          </span>

          <span>
            <button className="btn btn-info mr-2">Edit</button>
            <button className='btn btn-danger mr-2'>Delete</button>
          </span>
        </li>
    ))
  
  };


  render() {
    return (
      <main className='context'>
        <h1 className='text-black text-uppercase text-center my-4'>Task Manager</h1>
        <h1 className='row'>
          <div className="col-md-6 col-sma-10 mx-auto p-0">
            <div className="card p-3">
              <div>
                <button className='btn btn-warning'>Add Task</button>
              </div>
              {this.renderTablist()}
              <ul className='list-group list-group-flush'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </h1>
      </main>
    )
  }
}

export default App;

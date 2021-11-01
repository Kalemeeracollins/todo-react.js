import React, { Component } from 'react';
import './todo.css'

class Todo extends Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }

    updateInput(key, value){
        //update react state
        this.setState({
            [key]: value
        })
    }
    addItem(){
        //Create item with unique id
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        //copy of current list of items
        const list = [...this.state.list];

        //add new item to list
        list.push(newItem);

        //update state with new list and reset newItem input
        this.setState({
            list,
            newItem:""
        })
    }
    deleteItem(id){
        //copy current list of items
        const list = [...this.state.list];

        //filter out item being delete
        const updatedList = list.filter(item => item.id !==id);

        this.setState({list: updatedList});
    }
    render() { 
        return <div>
            <div>
                <div className="header">
                <h3>Add an item...</h3>
                <br/>
                <input 
                  type="text" 
                  placeholder="Type items here..." 
                  value={this.state.newItem} 
                  onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button
                className="btn-1"
                  onClick={() => this.addItem()}
                >
                    Add
                </button>
                </div>
                <div className="list">
                <ol>
                    {this.state.list.map(item => {
                        return(
                            <li key={item.id}>
                                {item.value}
                                <button className="btn-2"
                                onClick={() => this.deleteItem(item.id)}
                                >Delete</button>
                            </li>
                        )
                    })}
                </ol>
                </div>
                <div className="div"></div>
            </div>
        </div>;
    }
}
 
export default Todo;
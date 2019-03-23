import React, {Component} from "react"

class TodoList extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
        this.state = {
            items: []
        }
        
        this.addItem = this.addItem.bind(this)
    
    }

    addItem(e) {
        if(this._inputElement.value !== ""){
            var newItem ={
                text: this._inputElement.value,
                key: Date.now()
            }
            
            this.setState(previousState => {
                return {
                    items: previousState.items.concat(newItem)
                }    
            })


        }
        this._inputElement.value = ""
        console.log(this.state.items)
        e.preventDefault();
    }

    render(){
        var task = this.state.items.text;
        return(
        <div className="todoListMain">
            <div>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder="Enter task.."></input>
                    <button type="submit">Add</button>
                </form> 
            </div>
            <h3>{task}</h3>
        </div>
        )
    }
}

export default TodoList
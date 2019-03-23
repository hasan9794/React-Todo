import React, { Component } from 'react';
import Head from './Navbar'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state=
    {
      input:[],
      search: false

    }
  
    this.keyCheck=this.keyCheck.bind(this);
  }


// add item

add()
{
  if(this.inp.value.trim()!=="")
  {
    let obj=
    {
      id:Date.now(),
      data:this.inp.value

    }

    let arr=this.state.input;
    arr.push(obj);

    this.setState(
      {
        input:arr,
        search: true
      }
    )

  }
  else
  {
    alert("Warnig!, Atleast write somethig")
  }
  this.inp.value=""
}


// delete item
del(id)
{

  let element=this.state.input.filter((v)=>
  {
    if(v.id!==id)
    {
      return true;
    }
  })
 this.setState({
   input:element
 })

}

// update key
update=(id,e)=>
{

  let obj=this.state.input.find((v)=>
{
  return v.id===id;
})

let rename=prompt("Enter the updated value?",obj.data);

if(rename.trim()!=="")
{

obj.data=rename;
let newArr=this.state.input.map((v)=>
{
  if(v.id===id)
  {
    
    return obj;
  }
  else
  {
    return v;
  }
})

this.setState({
  input:newArr
})

}
}

// enter key functionality

keyCheck(e)
{
  
  if(e.keyCode===13)
  {
    this.btn.click();
  }
}

search(e) {
  
      let element=this.state.input.filter((v) => {
          console.log(v.data, this._searchInput.value)
          return v.data.indexOf(this._searchInput.value) > -1
      })

      this.setState({
        input:element
      })
}

  render() {
    
    return (
        
        <div>
            <Head />
            <div className="container">
            <div id="all">
            {/* Search Bar appears when an item is added */}
              {this.state.search && <input ref={(s) => this._searchInput = s} className="inputBox inputSearch" type="text" ></input>} 
              {this.state.search &&<input style={{marginLeft: 10}} type="button" onClick={this.search.bind(this)} id="searchBtn" value="search"></input>}
              <input style={{borderRadius: 10}} type="text" className="inputBox" onKeyUp={this.keyCheck} ref={(a)=>{this.inp=a}} autoFocus/>
              <button id="add" ref={(b)=>{this.btn=b}} onClick={this.add.bind(this)}>Add Item</button>
              <ul id="data">
                { this.state.input.map((v,i)=> <li key={v.id} >{v.data}
                <i onClick={this.update.bind(this,v.id)}  class="far fa-edit ui"></i>
                <i onClick={this.del.bind(this,v.id)} class="far fa-trash-alt ui"></i> </li>)}
              </ul>
            </div>
            </div>
        </div>
        
      
    )
  }
}

export default App;

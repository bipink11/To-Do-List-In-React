import React, { Component } from 'react';
import './TodoList.css'
import ListItems from './ListItems';

export class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items : [],
             currentItems : {
                 text:'',
                 key:''
             }
        }
    }
    
    
    handleInput = (e) =>{
        this.setState({
            currentItems:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }

    setUpdate = (text,key) =>{
        const items=this.state.items;
        items.map(item =>{
            if(item.key === key){
                item.text = text
            }
        })
        this.setState({
            items:items
        })
    }
    deleteItem = (key) =>{
        const filtereditems = this.state.items.filter(item => item.key !== key)
        this.setState({
            items:filtereditems
        })
    }
    addItems = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentItems;
        if(newItem.text !== '')
        {
            const newItems = [...this.state.items,newItem]
            console.log("items = ",newItems)
            this.setState({
                items:newItems,
                currentItems:{
                    text:'',
                    key:''
                }
            })
        
        }
       // console.log(newItem)
    }


    render() {
        return (
            <div className="Todo">
               <header>
                   
                   <form id="to-do-form" onSubmit={this.addItems}>
                        <input type="text" 
                        placeholder="Enter text"
                        value={this.state.currentItems.text}
                        onChange={this.handleInput}
                        />
                        <button type="submit">Add</button>
                   </form>
               </header>
               <ListItems 
               items={this.state.items} 
               deleteItem = {this.deleteItem}
               setUpdate = {this.setUpdate}
               ></ListItems>
               
            </div>
        )
    }
}

export default TodoList

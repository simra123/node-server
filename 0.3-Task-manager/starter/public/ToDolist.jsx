import React, { useEffect, useState } from 'react';
import './ToDolist.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import  firebase from 'firebase'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




const ToDolist = () => {
  const [addItem , setAddItem ] = useState([]);
  const [ ids , setIds ] = useState([]);
const  [printItem , setPrintItem ] = useState([]);


 
  const addEvent = (pass) => {
    setAddItem(pass.target.value);
  }
  const PrintItemF = () => {
    // getPItem((prevval) => {
    //   return [...prevval , addItem ]
    // });
    

    const todoRef = firebase.database().ref('task')
    const add = {
      todo : addItem ,
      
    }
    todoRef.push(add)
    setAddItem('')
    
   
  }
  
 useEffect(() => {
  const todo = firebase.database().ref('task');
  
   todo.on('value' , (snapshot) => {
  // console.log("api called")
      const printItem = []
      const ids = []

      
      const todo = snapshot.val()
      for (let id in todo){
        printItem.push(todo[id])
       ids.push(id)
        
      }// console.log(id)
       setPrintItem(printItem)
       setIds(ids)
       console.log(ids)
     
  });
   
 }, []) 
    
  
 
  const deleteFunc = (id) => {
    // getPItem((delval) =>{
    //   return delval.filter((currdata , index) =>{
    //     return index !== id
    //   })
    // })
    //console.log(id)
  } 
  const deleteTodo = (index) => {
 const todoref = firebase.database().ref("task").child(ids[index])
     todoref.remove()
console.log(ids[index])

   
  }
  let line;
  const cutit = () => {
     line = true
  }
return (
  <div className="main-div">
     <div className="center-div">
      <h1>ToDo list</h1>
      
      <input 
       type="text" 
       placeholder="add an item" 
       onChange={addEvent} 
       value={addItem}
       />
       <Button onClick={PrintItemF} color="secondary"> <AddIcon/> </Button>
       
      <ol>
        {  
        printItem.length > 0 ? printItem.map((val , index) => {
         return ( 
          <div className="todocomp">
         <span onClick={ e => (deleteTodo(index))}>
            <i className="fas fa-times-circle" onClick={cutit}>  </i></span>
            <li style={{textDecoration : line ? "line-through" : "none"}} > {val.todo} </li>
          </div>
        ) 
        }) : "No List Found"
      }

      </ol>
     
     </div>
   </div>

          //  printItem.map((val , index) => {
          //  return (
          //    <ToDolist 
          //     key = {index}
          //     id = {index} 
          //     text = {val}
          //     onSelect = {deleteFunc} />)
          //  })
          
        
       
       
)


}
export default ToDolist;


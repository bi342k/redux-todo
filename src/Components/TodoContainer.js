import '../Components/todo.css';
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTodo, delTodo, removeTodo, editTodo, toggleStatus} from '../Redux/TODO/Action';

function Todo (){
    
    const [inputData, setInputData]=useState();
    const [editData, setEditData] = useState('');
    const [editable, setEdiable] = useState(true);
    const [editID, setEditID] = useState();
    const [editStatus, setEditStatus] = useState();
    
      
    const listData = useSelector(state=>state.todoReducer.todoData)
    const [showList, setShowList] = useState([])
    useEffect(()=>{
        setShowList(listData.filter(data=>data))
    },[listData])
    
    
    const dispatch = useDispatch();
    
    function edit(elem){
        setEdiable(false);
        setEditData(elem.data);
        setEditID(elem.id);
        setEditStatus(elem.status);
    }

    function sendEdit(){
        setEdiable(true);
        setEditData('');
        dispatch(editTodo(editID, editData, editStatus));
    }

    function completed(){
        setShowList(listData.filter(data=>data.status===true))
    }

    function notCompleted(){
        setShowList(listData.filter(data=>data.status===false))
    }
    
    function showAll(){
        setShowList(listData.filter(data=>data))
    }
    

    return (
        <div>
            <figure>
                <figcaption>ADD YOUR LIST HERE</figcaption>

            </figure>
            <div>
                <input type="text" placeholder="Add Items . . . " onChange={e=> setInputData( e.target.value)}/>

                <button onClick={()=>dispatch(addTodo(inputData))}>+</button>
                <button onClick={()=>dispatch(removeTodo())}>Del All</button>

            </div>
            
            <div>
                <button onClick={()=>completed()}>Completed</button>
                <button onClick={()=>notCompleted()}>Not Completed</button>
                <button onClick={()=>showAll()}>Show all</button>

            </div>
            {/* Display todo list items */}
            <div>
            
                {showList.map((elements)=>
                    <div key={elements.id}>
                        <h4>
                            <input type='checkbox' checked={elements.status?true:false} onChange={()=>dispatch(toggleStatus(elements))}></input>
                            {elements.data}                             
                            <button onClick={()=>dispatch(delTodo(elements.id))}> - </button> 
                            <button onClick={()=>edit(elements)}> Edit </button>
                        </h4> 
                    </div>
                )}
                
            </div>
            <div>
                <input type="text" disabled={editable} value={editData} onChange={e=> setEditData(e.target.value)}/>
                <button disabled={editable} onClick={()=>sendEdit()}>Save</button>
            </div>

        </div>
    )
}

export default Todo;

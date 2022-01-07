import React, { useState } from "react";
import ToDoList from "./TodoList"
const App=()=>{
    let [inputData,setInputData]=useState("");
    let [items,setItems]=useState([])
    
    let itemEvent=(event)=>{
        setInputData(event.target.value)
    }

    let listOfItem=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputData];
        })
        setInputData("")
    }
    const deleteItem=(id)=>{
        // console.log('selete')
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            });
        });

    }
    let allClear=()=>{
        setItems([])
    }
    return(<>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input 
                    type="text"
                    placeholder="Add a items..."
                    value={inputData}
                    onChange={itemEvent}
                />
                <button className="Add_button" onClick={listOfItem}>+</button>
                <button onClick={allClear}>clear</button>

                <ul>
                    {items.map((itemVal,index)=>{
                        return(<ToDoList
                            key={index}
                            id={index}
                            text={itemVal}
                            onSelect={deleteItem}
                        />)
                    })}
                </ul>

            </div>
        </div>

    </>)
}
export default App;
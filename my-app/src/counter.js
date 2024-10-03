import { useState } from 'react';
// let Z = 10;
function Counter(){
    
    // const [x, setX] =  useState(0);
    // const [y, setY] =  useState(0);
    // const [isEditting, setIsEditting] = useState(false);
    // const [todos, setTodos] = useState(['todo 1', 'todo 2']);
    return (
        <ul>
            {/* {todos.map((todo) => <li> {todo} </li>)}
            <button onClick={() => setTodos([...todos, "another one"])}> Click </button> */}

           {/* {
                (isEditting) ? <input/> : <p> Some todo</p>
           }
           <br />
           <button onClick={() => setIsEditting(!isEditting)}> Click </button> */}





            {/* Count z: {Z}
            <button onClick={() => Z+=1}>Inc</button> <br/> */}
            {/* conditional rendring */}
            {/* Count X : {x} is {(x % 2 == 0 )? 'Even': 'Odd'}
            <button onClick={() => setX(x+1)}>Inc</button>
            <button onClick={() => setX(x-1)}>Dec</button> */}
            {/* <br/> */}
            {/* Count Y : {y}
            <button onClick={() => setY(y+1)}>Inc</button>
            <button onClick={() => setY(y-1)}>Dec</button> */}

        </ul>
    );
}
export default Counter;
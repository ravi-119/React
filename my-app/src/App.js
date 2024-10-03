import logo from './logo.svg';
import './App.css';
import DogCard from './DogCard';
import Counter from './counter';
import Avatar from './Avatar';
import { useState } from 'react';

function App() {

  const [todos] = useState(['todo 1', 'todo 2']);


  // const obj = {
  //   src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRiZ3tJwLtsDKzrYDFZosmdqocWnl65OC0w&s", 
  //   width:"100px",
  //   height:"100px"
  // }
  return (
    <div>

      {todos.map((v, idx) => <li key={idx}>{v}</li>)}


            {/* Hello
      <DogCard name="Bruno" Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s" />

      <DogCard name="Tiger" Image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" /> */}
      
      {/* <Counter /> */}
      {/* <Avatar
          {...obj}
      />

      <Avatar

          src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" 
          width="100px"
          height="100px"

      />

      <Avatar

          src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg" 
          width="100px"
          height="100px"

      />
      {/* child props  */}

      {/* <Avatar
        src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg" 
        width="100px"
        height="100px"
      >
        <span> Child tag </span>
      </Avatar>  */}



    </div>
  );
}

export default App;

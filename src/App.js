import './App.css';
import { Stack,TextField, PrimaryButton } from "@fluentui/react";  

function App(props) {
  const todoName = '';

  const addTodo = () => {        
    alert(todoName);
  }  
  const setTodo = (e) =>{  
      todoName = e.target.value;  
  }  

  return (
    <div className="App">
      <Stack>  
            <Stack horizontal >  
                <Stack.Item grow>  
                    <TextField placeholder="Add new item" value={todoName} onChange={setTodo }/>  
                </Stack.Item>  
                <PrimaryButton onClick={addTodo} >Add</PrimaryButton>  
            </Stack>  
        </Stack>  
    </div>
  );
}

export default App;

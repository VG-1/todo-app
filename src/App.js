import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';



function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  // const [eTodo, setEtodo]=useState({
  //   id:"",
  //   etask:"",
  //   eimg:"",
  // });
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id; 
    });
    setTodos(newTodos);
  }

  // function EditTodo(currentTodo, index){
    // ref.current.click()
  //   setEtodo({
  //     id: index,
  //     etask: currentTodo.task,
  //     eimg: currentTodo.img
  //   })
  // }
  // function handleChange(e) {
  //   setEtodo({ ...eTodo, [e.target.name]: e.target.value })
  // }
//   function EditTodo(id){
//   const EditTodo = ({ value, setValue }) => {
//     const onChange = (event) => setValue(event.target.value);
  
//     return (
//       <input
//         type="text"
//         aria-label="Field name"
//         value={value}
//         onChange={onChange}
//       />
//     )
//   }
// }



  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode} = useColorMode();
  
  return (
    <VStack p='4'>
      <IconButton className="ThemeButton" contenteditable="true" icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
      <Box>
        <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>Todo Application</Heading>
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      {/* <TodoList todos={todos} EditTodo={EditTodo} /> */}
        

      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}


export default App;

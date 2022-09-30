import React from 'react';
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge } from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// import { DragDropContext } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const TodoList = ({ todos, deleteTodo, EditTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme='cyan' p='4' borderRadius='lg'>
        <h1 class="NoTodo">  No Todos, yay!!!</h1>
      </Badge>
    );
  }
  function myFunction(button) {

    const x = document.getElementById("myP");
    if (x.contentEditable === "true") {
      x.contentEditable = "false";
      // button.innerHTML = 'Enable "myP" p to be editable!';
    } else {
      x.contentEditable = "true";
      // button.innerHTML = 'Disable "myP" to be editable!';
    }
  }

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(todos);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    todos(tempData);
  };

  return (
    <VStack divider={<StackDivider />} className="edit" id="myP" contenteditable="true" borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='4' w='100%' maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }} alignItems='stretch'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provider) => (
            <tbody
              className="text-capitalize"
              ref={provider.innerRef}
              {...provider.droppableProps}
            >
              {todos?.map((todos, index) => (
                <Draggable
                  key={TodoList}
                  draggableId={todos}
                  index={index}
                  >
                  {(provider) => (
                    <tr {...provider.draggableProps} ref={provider.innerRef}>
                      <td {...provider.dragHandleProps}> = </td>
                      <td>{todos}</td>
                      <td>{todos}</td>
                      <td>{todos}</td>
                      </Draggable>
                    </tr>
      {todos.map(todo => (
                      <HStack key={todo.id}>
                        <Text>{todo.body}</Text>
                        <Spacer />
                        {/* <p id="myP" contenteditable="true">Try to change this text.</p> */}
                        {/* <button onclick="myFunction(this);">Disable "myP" to be editable!</button> */}
                        <IconButton className="DeleteTodo" icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
                        <IconButton className="EditTodo" icon={< FaEdit />} isRound='true' onClick={() => myFunction(this)} />


                      </HStack>
              ))}
              {provider.placeholder}
            </tbody>
          )}
        </Droppable>
      ))}
      </DragDropContext>

    </VStack>



  );
}

export default TodoList;

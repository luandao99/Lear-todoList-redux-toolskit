import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//
import { todoRemainingSelector} from '../../redux/LogicStore'
import {addTodoList} from './todoListSlice'
export default function TodoList() {
  const [inputName, setInputName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector)
  //function handler
  const handleInputChange = (e) => {
    // console.log('get In Put',e.target.value)
    setInputName(e.target.value);
  };
  const handlePriorityInput = (value) => {
    //  console.log('priority',value)
    setPriority(value);
  };
  const handleAddTodo = () =>{
    const todoJob = {
      id: uuidv4(),
      name: inputName,
      completed: false,
      priority: priority
    }
    dispatch(addTodoList(todoJob))
    setInputName('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo)=>(
          
          <Todo id={todo.id} key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}  />
        ))}
      
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={inputName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority}  onChange={handlePriorityInput}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>Add</Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTodo, statusSearchTodo,prioritySearchTodo } from "./filterSlice";
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [getSearchInput, setGetSearchInput] = useState("");
  const [, setGetStatusCheckBox] = useState([]);
  const [, setPriority] = useState("Medium");
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setGetSearchInput(searchValue);
    dispatch(searchTodo(searchValue));
  };
  const handleGetStatusCheckBox = (e) => {
    // console.log(e.target.value)
    setGetStatusCheckBox(e.target.value);

    dispatch(statusSearchTodo(e.target.value));
  };
  const handlePriorityChange = (value)=>{
    console.log(value)
    setPriority(value)
    dispatch(prioritySearchTodo(value))
  }
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          onChange={handleSearchChange}
          value={getSearchInput}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleGetStatusCheckBox}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          onChange={handlePriorityChange}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}>
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
      </Col>
    </Row>
  );
}

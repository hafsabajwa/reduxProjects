import { Button, Input, Space } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>CreatePost</h1>
        <Input
          placeholder="Enter Title"
          type="text"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={title}
          style={{ width: "400px" }}
        />
        <br /> <br />
        <Input.TextArea
          placeholder="Enter body"
          type="text"
          onChange={(e) => setValues({ ...values, body: e.target.value })}
          value={body}
          style={{ width: "400px" }}
          size="large"
        />
        <br /> <br />
        <Space style={{margin:10}}>
          <Button onClick={() => navigate("/")}>Go Back</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Space>
      </form>
    </div>
  );
};

export default CreatePost;

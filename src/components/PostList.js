import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Modal, Input, Button, Form, Space } from "antd";
import * as actions from "../actions/index.js";
import { useSelector, useDispatch } from "react-redux";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isData, setIsData] = useState(false);
  const [form] = Form.useForm();
  const postList = useSelector((state) => state.posts.listPost);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => onEditPost(record)}>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
    form.resetFields();
  };

  const onEditPost = (post) => {
    setIsModalVisible(true);
    axios
      .get(`https://5e1d7db0f846e500144d5bb3.mockapi.io/api/post/${post.id}`)
      .then((res) => {
        form.setFieldsValue(res.data);
      });
    setPost(post);
  };

  const onFinish = (values) => {
    if (values) {
      console.log("vao");
      axios
        .post(`https://5e1d7db0f846e500144d5bb3.mockapi.io/api/post`, values)
        .then((res) => {
          setIsModalVisible(false);
          setIsData(!isData);
        });
    }
    if (posts) {
      axios
        .put(
          `https://5e1d7db0f846e500144d5bb3.mockapi.io/api/post/${post.id}`,
          values
        )
        .then((res) => {
          setIsModalVisible(false);
          setIsData(!isData);
        });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios
      .get(`https://5e1d7db0f846e500144d5bb3.mockapi.io/api/post`)
      .then((res) => {
        setPosts(res.data);
        const action = actions.listPosts(res.data);
        dispatch(action);
      })
      .catch((error) => console.log(error));
  }, [isData]);

  return (
    <div>
      <button onClick={showModal}>Add</button>
      <Table dataSource={posts} columns={columns} rowKey="id" />
      <Modal
        title="Add Post"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer=""
      >
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Body"
            name="body"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default PostList;

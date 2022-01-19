import React from "react";
import { Modal, Input, Button, Form } from "antd";

function ModalForm({ title, visible, onSubmit, onCancle }) {
  return (
    <Modal title={title} visible={visible} onCancel={onCancle} footer="">
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
        onFinish={onSubmit}
        autoComplete="off"
        // form={form}
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
  );
}

export default ModalForm;

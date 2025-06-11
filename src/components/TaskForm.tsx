// File: src/components/TaskForm.tsx
import { Form, Input, Button, message } from 'antd';
import { createTask } from '../api/taskApi';

const TaskForm = ({ refresh }: { refresh: () => void }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await createTask(values);
      message.success('Task created');
      form.resetFields();
      refresh();
    } catch (err) {
      message.error('Error creating task');
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="id" label="Task ID" rules={[{ required: true }]}> <Input /> </Form.Item>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}> <Input /> </Form.Item>
      <Form.Item name="owner" label="Owner" rules={[{ required: true }]}> <Input /> </Form.Item>
      <Form.Item name="command" label="Command" rules={[{ required: true }]}> <Input /> </Form.Item>
      <Button type="primary" htmlType="submit">Create Task</Button>
    </Form>
  );
};

export default TaskForm;

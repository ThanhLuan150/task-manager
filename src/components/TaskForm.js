import React from 'react';
import { Form, Input, DatePicker, Select, Button, message } from 'antd';
import Swal from 'sweetalert2';
const { Option } = Select;

const TaskForm = ({ onTaskAdded }) => {
  const [form] = Form.useForm();
  
  const handleSubmit = async (values) => {
    const currentDate = new Date().toISOString().split('T')[0];
    if (values.dueDate < currentDate) {
      message.error('Due date cannot be in the past.');
      return;
    }

    const newTask = {
      description: values.description,
      completed: false,
      created_at: new Date().toISOString(),
      due_date: values.dueDate.format('YYYY-MM-DD'),
      priority: values.priority,
      assigned_to: values.assignedTo,
    };

    // const addedTask = await createTask(newTask);
    onTaskAdded(newTask);
    form.resetFields();
    Swal.fire('Create Task Successfully!');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Create New Task</h2>
      <Form.Item
        name="description"
        label="Task Description"
        rules={[{ required: true, message: 'Please enter task description' }]}
      >
        <Input placeholder="Task Description" />
      </Form.Item>
      <Form.Item
        name="dueDate"
        label="Due Date"
        rules={[{ required: true, message: 'Please select a due date' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="priority"
        label="Priority"
        rules={[{ required: true, message: 'Please select a priority' }]}
      >
        <Select>
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="assignedTo"
        label="Assigned To"
        rules={[{ required: true, message: 'Please enter a name' }]}
      >
        <Input placeholder="Assigned To" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;

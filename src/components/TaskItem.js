import React from 'react';
import { Card, Checkbox, message } from 'antd';
import Swal from 'sweetalert2';

const TaskItem = ({ task, onTaskUpdated }) => {
  const toggleCompletion = () => {
    const updatedTaskData = { completed: !task.completed };
    onTaskUpdated(task.id, updatedTaskData);
    if (!task.completed) {
      Swal.fire('Task Completed!');
    } else {
      Swal.fire('Task Incomplete!');
    }
  };

  return (
    <Card style={{ marginBottom: '10px' }}>
      <Checkbox checked={task.completed} onChange={toggleCompletion}>
        <span style={{ fontWeight: 'bold' }}>{task.description}</span>
      </Checkbox>
      <p>Due: {new Date(task.due_date).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Assigned To: {task.assigned_to}</p>
    </Card>
  );
};

export default TaskItem;

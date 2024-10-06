import React, { useState, useEffect } from 'react';
import TaskFilters from './components/TaskFilter';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import { fetchTasks, createTask, updateTask } from './api/mockAPI';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await fetchTasks();
        setTasks(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    };

    getTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      const addedTask = await createTask(newTask);
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    } catch (error) {
      console.error('Failed to add task', error);
    }
  };

  const handleUpdateTask = async (id, updatedTaskData) => {
    try {
      const updatedTask = await updateTask(id, updatedTaskData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error('Failed to update task', error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#007bff' }}>
        <Title style={{ color: '#fff', textAlign: 'center', margin: 0 , paddingTop: 10 }} level={2}>
          Task Manager
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <TaskForm onTaskAdded={handleAddTask} />
        <br></br>
        <TaskFilters filter={filter} setFilter={setFilter} />
        <div>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} onTaskUpdated={handleUpdateTask} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default App;

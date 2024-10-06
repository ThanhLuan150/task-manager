import React from 'react';
import { Button } from 'antd';

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Button
        type={filter === 'all' ? 'primary' : 'default'}
        onClick={() => setFilter('all')}
        style={{ marginRight: '10px' }}
      >
        All
      </Button>
      <Button
        type={filter === 'completed' ? 'primary' : 'default'}
        onClick={() => setFilter('completed')}
        style={{ marginRight: '10px' }}
      >
        Completed
      </Button>
      <Button
        type={filter === 'incomplete' ? 'primary' : 'default'}
        onClick={() => setFilter('incomplete')}
      >
        Incomplete
      </Button>
    </div>
  );
};

export default TaskFilters;

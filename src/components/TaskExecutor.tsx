import { useState } from 'react';
import { Input, Button, message } from 'antd';
import { executeTask } from '../api/taskApi';

const TaskExecutor = () => {
  const [taskId, setTaskId] = useState('');
  const [output, setOutput] = useState('');

  const handleExecute = async () => {
    try {
      const res = await executeTask(taskId);
      setOutput(res.data.output);
      message.success('Executed successfully');
    } catch (err) {
      message.error('Execution failed');
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <Input
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        style={{ width: 200, marginRight: 10 }}
      />
      <Button type="primary" onClick={handleExecute}>
        Execute
      </Button>
      {output && (
        <pre style={{ background: '#f6f6f6', marginTop: 10, padding: 10 }}>
          {output}
        </pre>
      )}
    </div>
  );
};

export default TaskExecutor;

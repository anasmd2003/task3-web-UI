// File: src/components/TaskList.tsx
import { Button, Table, message, Input, Space } from 'antd';
import { deleteTask, executeTask, getAllTasks, searchTasks } from '../api/taskApi';
import { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [output, setOutput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTasks = async () => {
    const res = await getAllTasks();
    setTasks(res.data);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      fetchTasks();
    } else {
      const res = await searchTasks(searchTerm);
      setTasks(res.data);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onDelete = async (id: string) => {
    await deleteTask(id);
    message.success('Deleted');
    fetchTasks();
  };

  const onExecute = async (id: string) => {
    const res = await executeTask(id);
    message.success('Executed');
    setOutput(res.data.output);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Owner', dataIndex: 'owner' },
    { title: 'Command', dataIndex: 'command' },
    {
      title: 'Actions',
      render: (_: any, record: any) => (
        <>
          <Button onClick={() => onExecute(record.id)} type="link">Execute</Button>
          <Button onClick={() => onDelete(record.id)} type="link" danger>Delete</Button>
        </>
      ),
    }
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
          enterButton
        />
      </Space>
      <Table dataSource={tasks} columns={columns} rowKey="id" />
      {output && (
        <pre style={{ background: '#f6f6f6', padding: '1rem' }}>
          Output: {output}
        </pre>
      )}
    </>
  );
};

export default TaskList;
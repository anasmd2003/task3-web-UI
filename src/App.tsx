// File: src/App.tsx
import React from 'react';
import { Layout, Typography } from 'antd';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const { Header, Content } = Layout;

const App: React.FC = () => (
  <Layout>
    <Header style={{ color: 'white' }}>Kaiburr Task Manager</Header>
    <Content style={{ padding: '2rem' }}>
      <TaskForm refresh={() => window.location.reload()} />
      <hr />
      <TaskList />
    </Content>
  </Layout>
);

export default App;
import TodoList from '@/components/TodoList';
import React, { useState } from 'react';
interface Props {}

const app = (props: Props) => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default app;

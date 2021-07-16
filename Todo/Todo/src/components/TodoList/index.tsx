import React, { useState } from 'react';
import Header from './Header';
import List from './List';
interface Props {}

interface ITodos {
  id: number;
  task: string;
  flag: boolean;
}
const index = (props: Props) => {
  const [todos, setTodos] = useState<Partial<ITodos>[]>([]);

  //id排序
  const newSort = (arr: Partial<ITodos>[]) => {
    if (!arr.length) {
      return 1;
    }
    const newArr: any = arr.sort((a: any, b: any) => b.id - a.id);
    return newArr[0].id + 1;
  };
  //增
  const add = (e: any) => {
    let obj = {
      id: newSort(todos),
      task: e.target.value,
      flag: false,
    };

    if (e.keyCode === 13) {
      if (e.target.value.trim() == '') {
        alert('请输入待办事项');
        return;
      }
      setTodos([obj, ...todos]);
      e.target.value = '';
    }
  };
  //删
  // arr==[...arr]
  const remove = (id: number) => {
    console.log(id);

    const todo = [...todos];

    // todos.filter((item) => {
    //   return item.id != id;
    // });
    setTodos(todos.filter((item) => item.id != id));
  };
  // 完成
  const finish = (id: number) => {
    [...todos].forEach((item) => {
      if (item.id == id) {
        item.flag = !item.flag;
      }
    });
    setTodos([...todos]);
  };

  return (
    <div>
      {/* <input type="text" onKeyDown={add} /> */}
      <h3>Todo List</h3>
      <Header add={add} />
      <List todos={todos} remove={remove} finish={finish} />
    </div>
  );
};

export default index;

import React from 'react';

import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import { useState } from 'react';
interface Props {
  todos: any;
  remove: (id: number) => void;
  finish: (id: number) => void;
}

const List: React.FC<Props> = (props) => {
  const { todos, remove, finish, } = props;
  const render = () => {
    return todos.map((item: any) => {
      return (
        <div
          key={item.id}
          style={{
            display: 'flex',
            width: '150px',
            justifyContent: 'space-between',
          }}
        >
          <div 
            key={item.id}
            style={{
              width:'15px',
              height:'15px',
              border:'1px solid #666',
              color:'#000',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
            onClick={() => {
              finish(item.id);
            }}
          >
            {item.flag && <CheckOutlined />}
          </div>


          <div style={item.flag ? { textDecoration: 'line-through' } : {}}>
            {item.task}
          </div>
          <div >
            <CloseOutlined onClick={() => {
              remove(item.id);
            }}  />
          </div>
          
          
        </div>
      );
    });
  };
  return (
    <div>
      <ul>{render()}</ul>
    </div>
  );
};

export default List;

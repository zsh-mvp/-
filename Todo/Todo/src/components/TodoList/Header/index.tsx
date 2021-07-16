import React, { FC, useState } from 'react';

interface Props {
  add: (e:any) => void;
}

const Header: FC<Props> = (props) => {
  const { add } = props;
  return (
    <div>
      <input type="text" onKeyDown={add} placeholder="Add a task" />
    </div>
  );
};

export default Header;

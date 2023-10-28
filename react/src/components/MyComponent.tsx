
import React from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default MyComponent;
import React, { createContext, useContext } from 'react';

//  context with a default value
const MyContext = createContext({ basename: 'default-base' });

const MyComponent = () => {
  const contextValue = useContext(MyContext); // Use context
  const basename = contextValue?.basename || 'default-base';
  return <div>{basename}</div>;
};

const App = () => {
  const contextValue = { basename: 'my-base' };  
  return (
    <MyContext.Provider value={contextValue}>
      <MyComponent />
    </MyContext.Provider>
  );
};

export default App;

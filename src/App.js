import React, { useContext } from 'react';
import { MyContext } from './Components/MyContext'; // Import the context
import MyComponent from './Components/MyComponent'; // Adjust the path for your component
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Start from './Start';

const App = () => {
    const contextValue = { basename: 'my-base' };
  
    return (
        <MyContext.Provider value={contextValue}>
            <Router>
                <Start />
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={<Cart />} /> {/* Use 'element' instead of 'component' */}
                    <Route path="/other" element={<MyComponent />} />
                </Routes>
            </Router>
        </MyContext.Provider>
    );
};

export default App;

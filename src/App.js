import React, { useContext } from 'react';
import { MyContext } from './Components/MyContext'; // Import the context
import MyComponent from './Components/MyComponent'; // Adjust the path for your component
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './Header';

const App = () => {
    const contextValue = { basename: 'my-base' };
  
    return (
        <MyContext.Provider value={contextValue}>
            <Router>
                <Header />
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={<Cart />} /> {/* Use 'element' instead of 'component' */}
                    <Route path="/other" element={<MyComponent />} />
                </Routes>
            </Router>
        </MyContext.Provider>
    );
};

export default App;

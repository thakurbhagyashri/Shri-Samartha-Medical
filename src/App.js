
import React from 'react';
import { MyContext } from './Components/MyContext'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Start from './Start';

const App = () => {
    const contextValue = { basename: 'my-base' };

    return (
        <MyContext.Provider value={contextValue}>
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                </Routes>
            </Router>
        </MyContext.Provider>
    );
};

export default App;

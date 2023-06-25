import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoListView from './Todos/ToDoListView';
import AddUser from './AddUser';
import Users from './Users';
import AddToDo from './AddToDo';
import { useState } from 'react';
const App = () => {

  const [activeComponent, setActiveComponent] = useState(null);
  const handleComponentChange = (componentName) => {
  setActiveComponent(componentName);
};
const [users, setUsers] = useState([]);
 const addUser = (username) => {
    setUsers([...users, username]);
  };
  
  
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/adduser">Add User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/todolist" element={<>
        
            <AddToDo />
      <ToDoListView />  
  
      </> } />
          {/* <Route path="/users" element={<Users username={username}/>} /> */}
          <Route path="/users" element={<Users users={users}/>}/>
          {/* <Route path="/adduser" element={<AddUser onUsernameSubmit={handleUsernameChange} />} /> */}
          <Route path="/adduser"  element={<AddUser addUser={addUser}/>}/>
        </Routes>
      </div>
    </Router>
  );
};
export default App;


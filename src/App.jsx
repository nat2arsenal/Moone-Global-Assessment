import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import { UserContext } from './Context';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'user123',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@email.com',
      password: 'user123',
    },
    {
      name: 'LeBron James',
      email: 'lebron@email.com',
      password: 'user123',
    },
  ]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  console.log(user);

  return (
    <UserContext.Provider value={{ users, setUsers, user, setUser }}>
      <Router>
        <nav>
          <p>LOGO</p>
          {user.name === '' ? (
            <Link to="/login">Login</Link>
          ) : (
            <p>{user.name}</p>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

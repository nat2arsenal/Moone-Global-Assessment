import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { users, setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const validateInputs = (email, password) => {
    const foundUser = users.find((user) => email === user.email);
    if (foundUser) {
      if (password === foundUser.password) {
        setIsValid(true);
        setUser((currentUser) => {
          return {
            ...currentUser,
            name: foundUser.name,
            email: email,
            password: password,
          };
        });
        console.log(user);
      } else {
        setIsValid(false);
        setPassword('');
        alert('Incorrect password!');
      }
    } else {
      setIsValid(false);
      setEmail('');
      alert('Email not found!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      email && password && validateInputs(email, password);
    }
  };

  useEffect(() => {
    if (isValid) {
      navigate('/');
    }
  }, [isValid, navigate]);

  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@email.com"
            id="email"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="**********"
            id="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

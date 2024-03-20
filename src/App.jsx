import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
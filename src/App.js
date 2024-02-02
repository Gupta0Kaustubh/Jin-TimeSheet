import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/shared/Layout'
import { Dashboard } from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='login' element={<div>Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;

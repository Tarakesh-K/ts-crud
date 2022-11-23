import './App.css';
import Main from './Components/Main';
import Student from './Components/Student';
import Teacher from './Components/Teacher';
import AddS from './Components/AddS';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/studentdetails' element={<Student />} />
          <Route path='/createstud' element={<AddS />} />
          <Route path='/teacherdetails' element={<Teacher />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

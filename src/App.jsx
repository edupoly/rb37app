import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
import Gender from './Gender';
import StudentForm from './StudentForm';

function App() {
  
  return (
    <div className="border border-danger border-2 p-2 m-2">
      <h1>India</h1>
      <StudentForm></StudentForm>
      {/* <Gender></Gender> */}
      {/* <MyForm></MyForm> */}
    </div>
  );
}

export default App;
/*
  1. functional components
  2. class components
  3. controlled components
  4. uncontrolled components
  5. smart components(container components)
  6. dumb components(presentational components)
  7. container components
      data and logic maintains  
                common logic
                  hooks(custom hooks)
                  Higher order components
                  Redux
                    reducers
                  RTK
                    Slice

  8. presentational components
      only for receving data from parent and display

*/
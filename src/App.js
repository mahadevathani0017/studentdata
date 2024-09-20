
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import Studentlist from './components/Studentlist';
import UpdateStudent from './components/UpdateStudent';

const myRouter = createBrowserRouter([
  {
    path: "",
    Component: Dashboard,
    children: [
      {
        path: "",
        Component:Studentlist,
      },
      {
        path: "addStudent",
        Component: AddStudent,
      },
      {
        path: "studentList",
        Component: Studentlist,
      },
      {
        path:"updateStudent",
        Component:UpdateStudent,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;

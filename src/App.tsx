
import './App.css'
import GetStudent from './components/student.component/student'
import Student from './models/student.interface'

function App() {
 
let students: Array<Student>=[{id:1,name:"Nadia",age:23,dept:"dept1",course:[{name:'database',grade:"A"},{name:"ai",grade:"A+"}]},{id:2,name:"Aya",age:23,dept:"dept2",course:[{name:'database',grade:"B"},{name:"ai",grade:"D"}]},{id:3,name:"Esraa",age:23,dept:"dept2",course:[{name:'database',grade:"B"},{name:"ai",grade:"D"}]}]
  return (
    <>
    <GetStudent students={students} ></GetStudent>
    </>
  )
}

export default App

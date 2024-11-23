import IStudent from "../../models/student.interface"

const GetStudent :React.FC<{students:Array<IStudent>}> = ({students})=>{
    return<>
    <div>
        <div className="container">
            <div className="row justify-content-center ">
            {students.map((elem)=>{
                    return <div key={elem.id} className=" w-50 border m-3 shadow py-4" >
                        <div>
                            <div className="d-flex justify-content-around my-2">
                              <p>ID : {elem.id}</p>
                              <p>Name : {elem.name}</p>
                            </div> 
                            <div className="d-flex justify-content-around ">  
                             <p>Age : {elem.age}</p>
                             <p>Department : {elem.dept}</p>
                           </div>
                        </div>
                        { <table className="table table-striped table-dark table-bordered">
                            <thead className="text-secondary">
                            <th>course</th>
                            <th>degree</th>
                            </thead>
                            <tbody>
                                
                                {elem.course.map((element)=>{
                            return <>
                            <tr>
                            <td> {element.name}</td>
                            <td>{element.grade}</td>
                            </tr>
                            </>
                         })}
                                
                            </tbody>
                            </table> } 
                        
                           
                    </div>
                })}
            </div>
       
       
         </div>
         </div>
    </>
}
export default GetStudent;
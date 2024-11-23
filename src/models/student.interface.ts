type degree ="A+"|"A"|"B"|"c"|"D"|"F"
interface IStudent{
    id:number,
    name:string,
    age:number,
    dept:string,
    course:Array<{name:string
        grade:degree
    }>
}
export default IStudent;
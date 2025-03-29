import PrintSub from "./PrintSub";
import Student from "./Student";
import Collage from "./Collage";
const Name = "imran";
const Age = 23;
const Salary = 50000;


const Cname = "Rgpv";
const seats =45;
const fee = 50000;

const detail = {
    name:"Arman",
    age:16,
    sub:"java"
}


const App = () => {

    // This is expression
    // <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>

    return (<>
        <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>
        <PrintSub />
        <Student name="Imran" age="23" subject="React"/>
        <Collage Cname={Cname} seats={seats} fee={fee} />
        <Student name={detail.name} age={detail.age} subject={detail.sub} />

    </>)

    // <></> This is fragment
}
export default App;
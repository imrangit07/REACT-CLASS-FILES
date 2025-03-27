import PrintSub from "./PrintSub";
const Name = "imran";
const Age = 23;
const Salary = 50000;



const App = () => {

    // This is expression
    // <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>

    return (<>
        <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>
        <PrintSub />
    </>)

    // <></> This is fragment
}
export default App;
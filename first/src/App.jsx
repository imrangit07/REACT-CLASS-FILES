
const Name = "imran";
const Age = 23;
const Salary = 50000;

const subject = <ul>
    <li>Mern</li>
    <li>Python</li>
    <li>Java</li>
    <li>JavaScript</li>
</ul>


const App = () => {

    // This is expression
    // <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>

    return (<>
        <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>
        <p>{subject}</p>
    </>)

    // <></> This is fragment
}
export default App;
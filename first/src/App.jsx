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


import {BrowserRouter,Routers,Router} from  'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Layout from './Layout';

const App = () => {

    // This is expression
    // <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>

    return (<>
        {/* <p>hello, my name is {Name}. and my Age is {Age}. and Salary is {Salary}</p>
        <PrintSub />
        <Student name="Imran" age="23" subject="React"/>
        <Collage Cname={Cname} seats={seats} fee={fee} />
        <Student name={detail.name} age={detail.age} subject={detail.sub} /> */}
        <Layout/>

        <BrowserRouter>
        <Routers>
            <Router path="/" element={<Layout/>}>
             <Router path="Home" element={<Home/>} />
             <Router path="About" element={<About/>} />
             <Router path="Contact" element={<Contact/>} />
            </Router>
        </Routers>
        </BrowserRouter>

    </>)

    // <></> This is fragment
}
export default App;
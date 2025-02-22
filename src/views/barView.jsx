import { Navbar } from "/src/components/navbar/navbar.jsx";

export function BarView(props){
    return (
        <div className="bar">
            <h1 className="title">&lt;&gt; LINUS MARKSTRÖM</h1>
            <Navbar className="nav"/>
        </div>
    );
}
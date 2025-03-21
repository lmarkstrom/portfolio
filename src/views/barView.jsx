import { Navbar } from "/src/components/navbar/navbar.jsx";

export function BarView(props){
    return (
        <div className="bar">
            <h1 className="title" onClick={moveToHome}>&lt; Software &gt;</h1>
            <Navbar className="nav"/>
        </div>
    );
    function moveToHome(){
        window.location.href = "#/";
    }
}
import { observer } from "mobx-react-lite";
import { ContactView } from "/src/views/contactView.jsx";

const Contact = observer(             
    function contactRender(props){
        return <ContactView/>;
    }
    
);

export { Contact };
import { observer } from "mobx-react-lite";
import { WelcomeView } from "/src/views/welcomeView.jsx";

const Welcome = observer(             
    function WelcomeRender(props){
        return <WelcomeView/>;
    }
    
);

export { Welcome };
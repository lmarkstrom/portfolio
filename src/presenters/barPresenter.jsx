import { observer } from "mobx-react-lite";
import { BarView } from "/src/views/barView.jsx";

const Bar = observer(             
    function BarRender(props){
        return <BarView/>;
    }
    
);

export { Bar };
import { observer } from "mobx-react-lite";
import { ProjectsView } from "/src/views/projectsView.jsx";

const Projects = observer(             
    function ProjectsRender(props){
        return <ProjectsView/>;
    }
    
);

export { Projects };
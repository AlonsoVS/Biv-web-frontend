import TemplateElement from "./TemplateElement";
import DragAndDrop from "./DragAndDrop";

function Template(props) {
    return (
        props.template.struct.map(element => 
                {   
                    const position = { x: element.position.x, y: element.position.y };
                    return <DragAndDrop position={position}><TemplateElement {...element}/></DragAndDrop>
                }
        )
    );
}

export default Template;
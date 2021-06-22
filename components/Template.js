import TemplateElement from "./TemplateElement";
import DragAndDrop from "./DragAndDrop";

function Template(props) {
    return (
        props.template.struct.map(element => 
                {   
                    const position = { x: element.style.left, y: element.style.top };
                    return <DragAndDrop position={position}><TemplateElement {...element}/></DragAndDrop>
                }
        )
    );
}

export default Template;
import TemplateElement from "./TemplateElement";
import DragAndDrop from "./DragAndDrop";

export function createTemplate(elements) {
    const structure = [];

    elements.map(element => {
        structure.push({
            style: { width: 300, height: 300 },
            position: { y: 300,x: 300 },
            ...element
        });
    })
    
    const newTemplate = {
        id: '00000001',
        struct: structure
    };
    
    return newTemplate;
}

export function editTemplate(template, structure) {

    return Object.create({struct: structure, ...template});
}


function Template(props) {
    return (
        props.template.struct.map(element => 
                {   
                    return (
                        <div id={element.name}>
                        <DragAndDrop position={{ x: element.position.x, y: element.position.y }}>
                            <TemplateElement {...element}/>
                        </DragAndDrop>    
                        </div>
                        
                    )
                }
        )
    );
}

export default Template;
import TemplateElement from "./TemplateElement";
import DragAndDrop from "./DragAndDrop";

export function createTemplate() {
    return {
        id: '00000001',
        struct: []
    };;
}

export function editTemplate(template, structure) {

    return Object.create({struct: structure, ...template});
}

function useTemplate(template, resources) {
    const formatStruct = [];

    template.struct.map(element => {
        const resource = resources.find(resource => {
            if (resource.name === element.name && resource.type === element.type) {
                return resource;
            }
        });

        formatStruct.push({
            ...element,
            src: resource.src
        });
    });

    return {...template, struct: formatStruct};
}

function Template(props) {
    const { template, resources } = props;
    const formatTemplate = useTemplate(template, resources);
    return (
        formatTemplate.struct.map(element => 
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
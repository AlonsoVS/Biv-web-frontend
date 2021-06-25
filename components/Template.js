import TemplateElement from "./TemplateElement";
import DragAndDrop from "./DragAndDrop";
import { useContext, useEffect, useState } from "react";
import { CreateDesignContext } from "../pages/create";

const createTemplate = () => {
    return {
        id: '00000001',
        struct: []
    };;
}

const editTemplate = (template, structure) => {
    return Object.create({struct: structure, ...template});
}

const useTemplate = (template, resources) => {
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

export default function Template(props) {
    const { templateId, createCallback: onSaveCallback } = props;

    const [template, setTemplate] = useState(() => {
        let template = createTemplate();
        if (templateId) template = {...template, id: templateId};
        return template;
    });

    useEffect(() => {
        if (templateId && templateId !== template.id) {
            /* Here the database template should be loaded with templateId */
           setTemplate(() => ({...template, id: templateId}));
        }
    }, [templateId]);

    const addResource = (resource) => {
        const structure = template.struct;
            structure.push({
                ...resource,
                style: { width: 300, height: 300 },
                position: { y: 300,x: 300 },
            });
        setTemplate(() => ({...template, struct: structure}));
    }

    const onSave = () => {
        if (!templateId) onSaveCallback(template.id);
    }

    const { tempResAdded } = useContext(CreateDesignContext);

    useEffect(() => {
        if (tempResAdded) addResource(tempResAdded);
    }, [tempResAdded]);

    return (
        template.struct.map(element => 
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
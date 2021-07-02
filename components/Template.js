import TemplateElement from "./TemplateElement";
import DragAndDrop from "./DragAndDrop";
import { useContext, useEffect, useState } from "react";
import { CreateDesignContext } from "../pages/create";
import axios from "axios";

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
    const { templateId, onSaveCallback, pageId } = props;

    const url = 'http://localhost:8080/biv/api/templates';

    const [template, setTemplate] = useState(() => {
        if (templateId) return null;
        return createTemplate();
    });

    const chargeTemplate = async (id) => {
        const response = await axios.get(`${url}/id/${id}`);
        return response.data;
    }

    useEffect(async () => {
        const currentTemplate = await chargeTemplate(templateId);
        setTemplate(() => currentTemplate);
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

    const { tempResAdded, saveState, addToSave } = useContext(CreateDesignContext);

    useEffect(() => {
        if (tempResAdded) addResource(tempResAdded);
    }, [tempResAdded]);

    const saveTemplate = () => {
        return axios.post(`${url}/save`, template);
    }

    const onSave = () => {
        addToSave(saveTemplate());
        if (!templateId) onSaveCallback(template.id);
    }

    useEffect(() => {
        if (saveState) onSave();
    }, [saveState]);

    const modifyElement = (modifiedElement) => {
        if (saveState) {
            const structure = template.struct;
            const index = structure.findIndex(element => element.name === modifiedElement.name);
            structure[index] = modifiedElement;
            setTemplate(() => ({...template, struct: structure}));
        }
    }

    return (
        template && template.struct.map(element => 
            {   
                const elementProps = {...element, modifyElement};
                return (
                    <div id={element.name}>
                        <DragAndDrop position={{ x: element.position.x, y: element.position.y }}>
                            <TemplateElement {...elementProps}/>
                        </DragAndDrop>    
                    </div>
                    
                )
            }
        )
    );
}
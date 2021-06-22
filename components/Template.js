import TemplateElement from "./TemplateElement";

function Template(props) {
    return (
        props.template.struct.map(element => <TemplateElement {...element}/>)
    );
}

export default Template;
import Image from "next/image";
import { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";


function TemplateElement(props) {
    const [elementProps, setElementProps] = useState(props);
    return (
        <div label={elementProps.name} style={elementProps.style}>
            {
                props.type === 'image'?
                    <Image 
                        alt={elementProps.name}
                        src={elementProps.src}
                        layout='fill'
                        objectFit='fill'/> :
                    
                    <p>{elementProps.src}</p>
            }
            <Button onClick={() => { 
                const top = elementProps.style.top - 10;
                const style = {...elementProps.style, top};
                let elProps = {...elementProps, style}; 
                setElementProps({...elProps})}}>
                    Up
            </Button>
            <Button onClick={() => { 
                const top = elementProps.style.top + 10;
                const style = {...elementProps.style, top};
                let elProps = {...elementProps, style}; 
                setElementProps({...elProps})}}>
                    Down
            </Button>
        </div>  
    );
}

export default TemplateElement;
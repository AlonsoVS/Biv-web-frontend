import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function TemplateElement(props) {

    const [elementProps, setElementProps] = useState(props);

    useEffect(() => {
        const top = props.newPosition.y;
        const left = props.newPosition.x;
        const style = {...props.style, top, left};
        const currentProps = {...props, style};
        setElementProps(currentProps);
    }, [props.newPosition]);

    const ref = useRef();

    return (
        <div
            id={elementProps.name} 
            label={elementProps.name} 
            style={elementProps.style}
            ref={ref}
        >
            {
                props.type === 'image'?
                    <Image 
                        alt={elementProps.name}
                        src={elementProps.src}
                        layout='fill'
                        objectFit='fill'/> :
                    
                    <p>{elementProps.src}</p>
            }
        </div>  
    );
}

export default TemplateElement;
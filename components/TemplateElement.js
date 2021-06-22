import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function TemplateElement(props) {

    const [elementProps, setElementProps] = useState(props);

    useEffect(() => {
        const y = props.position.y;
        const x = props.position.x;
        const position = {...props.position, y, x};
        const currentProps = {...props, position};
        setElementProps(currentProps);
    }, [props.position]);

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
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function TemplateElement(props) {
    const { modifyElement, ...properties } = props;
    const [elementProps, setElementProps] = useState(properties);

    useEffect(() => {
        setElementProps(properties);
    }, [properties.position]);

    useEffect(() => {
        modifyElement(properties);
    }, [properties]);

    const ref = useRef();

    return (
        <div
            id={elementProps.name} 
            label={elementProps.name} 
            style={elementProps.style}
            ref={ref}
        >
            {
                props.type === 'image' ?
                    <Image 
                        alt={elementProps.name}
                        src={elementProps.src}
                        layout='fill'
                        objectFit='fill'/> 
                    :
                    <p>{elementProps.src}</p>
            }
        </div>  
    );
}

export default TemplateElement;
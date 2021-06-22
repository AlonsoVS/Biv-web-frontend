import React from "react";
import { useState } from "react";

export default function DragAndDrop(props) {

    const [focused, setFocused] = useState(false);

    const [newPosition, setNewPosition] = useState({ x: props.position.x, y: props.position.y });

    const onMouseMove = (event) => {
        if (focused) {
            setNewPosition({ x: newPosition.x + event.movementX, y: newPosition.y + event.movementY });
        }
        event.stopPropagation();
        event.preventDefault();
    }

    const onMouseDown = (event) => { 
        setFocused(true);
        event.stopPropagation();
        event.preventDefault();
    }

    const onMouseUp = (event) => {
        setFocused(false);
        event.stopPropagation();
        event.preventDefault();
    }

    const onMouseLeave = (event) => {
        setFocused(false);
        event.stopPropagation();
        event.preventDefault();
    }

    return (
        <div 
            className='DragAndDrop'
            onMouseUp={ onMouseUp }
            onMouseDown= { onMouseDown }
            onMouseLeave={ onMouseLeave }
            onMouseMove={ onMouseMove }
        >
            { React.cloneElement(props.children, { newPosition: newPosition }) }
        </div>
    );
}
import { InputBase } from "@material-ui/core";
import { useEffect, useState } from "react";

export default function CommentForm(props) {

    const [content, setContent] = useState('');
    const { formType, className, checkAddActive } = props;

    const handleChange = (event) => {
        event.preventDefault();
        setContent(event.target.value);
    };

    useEffect(()=>{
        checkAddActive(content);
    }, [content]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return  <form onSubmit={handleSubmit} className={className} autoComplete >
          <InputBase
                id={`new-${formType}-field`}
                label={`Add ${formType}`}
                inputProps={{ 'aria-label': 'naked' }}
                multiline='true'
                name={formType}
                onChange={handleChange}
                placeholder={`${formType.charAt(0).toUpperCase() + formType.substring(1)} Content`}
                value={content}
            />
    </form>
    ;
}
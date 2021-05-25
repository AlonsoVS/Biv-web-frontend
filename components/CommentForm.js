import { Button } from "@material-ui/core";
import { useState } from "react";
import TextField from '@material-ui/core/TextField';


export default function CommentForm(props) {

    const [content, setContent] = useState({ textContent: '' });
    const { formType } = props;

    const handleChange = (event) => {
        setContent({textContent: event.target.value});
        console.log('Change');
        console.log(event);
    };

    const handleSubmit = (event) => {
        console.log(content);
        console.log(event);
        event.preventDefault();
    };

    return (
    <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-textarea"
          label={`Add ${formType}`}
          placeholder={`${formType.charAt(0).toUpperCase() + formType.substring(1)} Content`}
          multiline
          name={formType}
          onChange={handleChange}
          value={content.textContent}
          variant="outlined"
        />
        <input type='submit' value='Send'/>
    </form>
    );
}
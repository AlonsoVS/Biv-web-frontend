import { InputBase, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import clsx from "clsx";


const useStyles = makeStyles({
    formRoot: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "24px",
        justifyContent: "space-evenly"
    },
    root: {
        border: "1px solid grey",
        borderRadius: "6px",
        height: "100%",
        overflow: "hidden",
        padding: "16px",
        margin: "8px 0",
        maxHeight: '52px'
    },
    submitButton: {
        textTransform: "uppercase",
        background: "rgb(0,198,162)",
        color: "white",
        fontWeight: "bolder",
        fontSize: "medium",
        border: "none",
        cursor: "pointer"
    },
    labelForm: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 0px 16px"
    },
    input: {
        textTransform: "capitalize"
    }
});

function formatStr(str) {
    for (let char of str) {
        if (char === char.toUpperCase()) {
            const splitIndex = str.indexOf(char);
            str = str.substring(0,splitIndex) + " " + str.charAt(splitIndex).toLowerCase() 
                + str.substring(splitIndex+1);
            return str;
        }
    }
    return str;
};

export default function LoginForm(props) {

    const { loginType, operationTitle, dataReceiver } = props;

    const dataInputs = loginType == "sign up" ? {
                                                    firstName: '',
                                                    lastName: '',
                                                    email: '',
                                                    password: '',
                                                    birthday: ''
                                                } : { email: '', password: ''};

    const [formData, setFormData] = useState(dataInputs);

    useEffect(()=>{
        setFormData(dataInputs);
    },[loginType]);

    const classes = useStyles();

    const handleChange = (event) => {
        event.preventDefault();
        const inputData = {[event.target.name]: event.target.value};
        setFormData({...formData, ...inputData})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        dataReceiver(formData);
    };

    return <form className={classes.formRoot} onSubmit={handleSubmit}>
        <label className={classes.labelForm}>
            <Typography variant='h5'>{operationTitle}</Typography>
        </label>
        {Object.keys(formData).map(input =>
                <InputBase
                    id={`${input}-field`}
                    label={input}
                    inputProps={{ 'aria-label': 'standard' }}
                    multiline='false'
                    name={input}
                    onChange={handleChange}
                    placeholder={formatStr(input)}
                    classes={classes}
                    value={formData.input}
                />)}
        <input type='submit' value={loginType} className={clsx(classes.submitButton, classes.root)}/>
    </form>
}
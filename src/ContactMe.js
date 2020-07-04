import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const isEmailingEnabled = false; // feature flag for emailing to actually fire

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 420,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

const ContactMe = (props) => {
    const [age, setAge] = useState('');
    const classes = useStyles();
    const [values, setValues] = React.useState({
        textmask: '(   )    -    ',
        numberformat: '1320',
    });
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangePhone = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        const formData = {
            test: true,
            name: 'Adam'
        };
        if (isEmailingEnabled) {
            emailjs.send('gmail', 'contact_template', formData, 'user_1m3JMAJuHz9got3koYl3R');
        }
    };

    return (
        <div class="container text-secondary d-flex flex-column justify-content-center align-items-center">
            <h3 className="font-weight-bold">Let's connect and chat!</h3>
            <div className="w-75 d-flex flex-column align-items-center">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Reason for contacting</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Reason for contacting"
                    >
                        <MenuItem value={10}>I'm looking to network as a Recruiter</MenuItem>
                        <MenuItem value={20}>I'm interested in discussing an opportunity</MenuItem>
                        <MenuItem value={30}>I have questions as an Engineer</MenuItem>
                        <MenuItem value={40}>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    className="col-9 mt-3"
                    id="standard-basic"
                    label="Your Name"
                />
                <div className="d-flex col-9 p-0 align-items-between justify-content-between">
                    <TextField
                        className="col-9 mt-3 pr-3"
                        id="standard-basic"
                        label="Your Email"
                    />
                    <FormControl className="col-3 mt-3">
                        <InputLabel htmlFor="formatted-text-mask-input">Your Number</InputLabel>
                        <Input
                            value={values.textmask}
                            onChange={handleChangePhone}
                            name="textmask"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
                </div>
                <FormControl className="d-flex mt-3 col-9 align-items-center" style={{ minHeight: 130 }}>
                    <TextField
                        className="w-100"
                        id="standard-textarea"
                        label="Comments / Questions / Feedback"
                        placeholder="Placeholder"
                        multiline
                        rowsMax={5}
                    />
                </FormControl>
                <div className="mt-3">
                    <Button
                        variant="contained"
                        color="#6c757d"
                        endIcon={<SendIcon />}
                        onClick={handleSubmit}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContactMe

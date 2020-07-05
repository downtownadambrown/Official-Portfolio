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

const isEmailingEnabled = true; // feature flag for emailing to actually fire

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 480,
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
            guide={false}
        />
    );
}

const ContactMe = () => {
    const classes = useStyles();

    const [reason, setReason] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [maskedValues, setPhoneNumber] = React.useState({
        phoneNumberInput: '(   )    -    ',
        numberformat: '1320',
    });

    const isFormValid = (reason !== '') && (email !== '') && (name !== '') && (comments !== '');

    const handleChange = (event) => {
        const { target: { value, name }} = event;
        switch (name) {
            case "contact-reason-dropdown":
                setReason(value);
                break;
            case "email-input":
                setEmail(value);
                break;
            case "name-input":
                setName(value);
                break;
            case "phone-number-input":
                setPhoneNumber({
                    ...maskedValues,
                    [event.target.name]: event.target.value,
                });
                break;
            case "comments-input":
                setComments(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = () => {
        if (isFormValid) {
            const formData = {
                name,
                phoneNumber: maskedValues.phoneNumberInput,
                email,
                comments,
                reason,
            };
            if (isEmailingEnabled) {
                emailjs.send('gmail', 'contact_template', formData, 'user_1m3JMAJuHz9got3koYl3R');
            }
        }
    };

    return (
        <div className="container text-secondary d-flex flex-column justify-content-center align-items-center">
            <h3 className="font-weight-bold">Let's connect and chat!</h3>
            <div className="w-75 d-flex flex-column align-items-center">
                <FormControl required variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Reason for contacting</InputLabel>
                    <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name="contact-reason-dropdown"
                        value={reason}
                        onChange={handleChange}
                        label="Reason for contacting"
                    >
                        <MenuItem value="recruiter">I'm looking to network as a Recruiter</MenuItem>
                        <MenuItem value="opportunity">I'm interested in discussing a career or business opportunity</MenuItem>
                        <MenuItem value="engineer">I have questions as an Engineer</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required
                    name="name-input"
                    onChange={handleChange}
                    className="col-9 mt-3"
                    id="standard-basic"
                    label="Your Name"
                    value={name}
                />
                <div className="d-flex col-9 p-0 align-items-between justify-content-between">
                    <TextField
                        required
                        name="email-input"
                        onChange={handleChange}
                        className="col-9 mt-3 pr-3"
                        id="email-input"
                        label="Your Email"
                        value={email}
                    />
                    <FormControl className="col-3 mt-3">
                        <InputLabel htmlFor="formatted-text-mask-input">Your Number</InputLabel>
                        <Input
                            onChange={handleChange}
                            name="phone-number-input"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
                </div>
                <FormControl
                    className="d-flex mt-3 col-9 align-items-center"
                    style={{ minHeight: 130 }}
                >
                    <TextField
                        required
                        className="w-100"
                        id="comments-input"
                        label="Comments / Questions / Feedback"
                        multiline
                        rowsMax={5}
                        name="comments-input"
                        onChange={handleChange}
                        value={comments}
                    />
                </FormControl>
                <div className="mt-3">
                    <Button
                        disabled={!isFormValid}
                        variant="contained"
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

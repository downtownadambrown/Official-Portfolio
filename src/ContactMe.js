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
import {animated, useTrail} from "react-spring";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
    const [showItems, setShowItems] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);

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
            setShowItems(false);
            setShowSuccess(true);
        }
    };

    const contactMeContent = [(
        <h3 className="font-weight-bold">Let's connect and chat!</h3>
    ),(
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
    ),(
        <TextField
            required
            name="name-input"
            onChange={handleChange}
            className="d-flex col-md-9 col-sm-12 mt-3"
            id="standard-basic"
            label="Your Name"
            value={name}
        />
    ), (
        <div className="d-flex col-md-9 col-sm-12 p-0 align-items-between justify-content-between flex-sm-column flex-md-row">
            <TextField
                required
                name="email-input"
                onChange={handleChange}
                className="col-md-9 col-sm-12 mt-3 pr-md-3 pr-sm-0"
                id="email-input"
                label="Your Email"
                value={email}
            />
            <FormControl className="col-md-3 col-sm-12 mt-3">
                <InputLabel htmlFor="formatted-text-mask-input">Your Number</InputLabel>
                <Input
                    onChange={handleChange}
                    name="phone-number-input"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
        </div>
    ), (
        <FormControl
            className="d-flex mt-3 col-md-9 col-sm-12 align-items-center"
            style={{ minHeight: 130 }} /* TODO: Remove in-line styling */
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
    ), (
        <Button
            className="mt-3"
            disabled={!isFormValid}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
        >
            Send
        </Button>
    )];

    const fadeConfig = { mass: 5, tension: 2000, friction: 200 };

    const fadeOut = useTrail(contactMeContent.length, {
        config: fadeConfig,
        opacity: showItems ? 1 : 0,
        x: showItems ? 0 : 20,
        height: showItems ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    const successContent = [(
        <CheckCircleOutlineIcon style={{ width: 150, height: 150 }} />
    ), (
        <h3>Sent Successfully!</h3>
    ), (
        <span>I look forward to responding to you within then next 1-2 business days</span>
    )];

    const fadeIn = useTrail(successContent.length, {
        config: fadeConfig,
        opacity: showSuccess ? 1 : 0,
        x: showSuccess ? 0 : 20,
        height: showSuccess ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div className="container text-secondary d-flex flex-column justify-content-center align-items-center pt-5">
            <div className="w-75 d-flex flex-column align-items-center">
                {showItems && fadeOut.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={index}
                        className="trails-text d-flex flex-column align-items-center w-100"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), delay: (1100*(index+1)) }}
                    >
                        {contactMeContent[index]}
                    </animated.div>
                ))}
                {showSuccess && fadeIn.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={index}
                        className="trails-text d-flex flex-column align-items-center w-100"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), delay: (1100*(index+1)) }}
                    >
                        {successContent[index]}
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default ContactMe

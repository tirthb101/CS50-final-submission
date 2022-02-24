import React from "react";
import PropTypes from 'prop-types';


import { Wrapper } from "../Button/Button.style";


const Button = ({text, callback}) => (
    <Wrapper onClick={callback}>
        {text}
    </Wrapper>
);

export default Button;
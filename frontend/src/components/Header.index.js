import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Content } from './Header.style';


const Header = () => (
        <Wrapper>
            <Content>
                <Link to="/">
                    <h1>hello this is some text</h1>
                </Link>
            </Content>
        </Wrapper>
);
export default Header;
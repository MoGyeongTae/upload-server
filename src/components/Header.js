import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LeftMenu = styled.div`
    width : 20%;
    height: 100%;
    left:0;top:0;
    float:left;
    background-color:#212121;
`;

const Title = styled.div`
    width : 100%;
    height : 20%;
    color:white;
    text-align:center;
    line-height:160px;
    border-bottom : 1px solid #484848;
`;

const Menu = styled.div`
    width:100%;
    margin-top:10%;
    height:76%;
    color:white;
    background-image:linear-gradient(#212121,#424242);
    ul {
        width:100%;
        height:inherit;
    }
    li {
        text-align:center;
        width:100%;
        height:10%;
        transition : all.5s;

        &:hover {
            background-color:#424242;
        }

        a {
            color:white;
            line-height : 55px;
            display:block;
            width:100%;
            height:100%;
        }
    }
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <LeftMenu>
                <Title><h1>GyeongTae.com</h1></Title>
                <Menu>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/upload">File Upload</Link></li>
                        <li><Link to="/list">File List</Link></li>
                    </ul>
                </Menu>
            </LeftMenu>
        )
    }
}

export default Header;
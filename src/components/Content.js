import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
    width : 80%;
    height : 100%;
    float:left;
    overflow-y:scroll;
    &::scrollbar { display:none }
    padding : 3%;
`

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ContentBox>
                {this.props.children}
            </ContentBox>
        )
    }
}

export default Content;
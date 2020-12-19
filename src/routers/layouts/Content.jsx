import React from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";
import MM04 from "../MM04";
import MM05 from "../MM05";

const WholeWrapper = styled.div`
    width: 100%;
`;

const Content = () => {  
    return (
        <WholeWrapper>
            <Route exact path="/" component={MM00}></Route>
            <Route exact path="/signIn" component={MM04}></Route>
            <Route exact path="/signUP" component={MM05}></Route>
        </WholeWrapper>
    )
};

export default Content;
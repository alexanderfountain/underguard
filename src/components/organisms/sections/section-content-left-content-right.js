import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import showdown from "showdown"
import * as variable from '../../variables';

const converter = new showdown.Converter()

const SectionContentLeftContentRightStyle = styled.section`

`;



const SectionContentLeftContentRight = ({object}) => {
return(
<SectionContentLeftContentRightStyle className="section-content-left-content-right">
<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.leftmarkdown) }} />
<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.rightmarkdown) }} />
</SectionContentLeftContentRightStyle>
)
}

export default SectionContentLeftContentRight 
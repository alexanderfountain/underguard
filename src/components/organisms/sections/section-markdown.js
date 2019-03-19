import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import showdown from "showdown"
import * as variable from '../../variables';

const converter = new showdown.Converter()

const SectionMarkdownStyle = styled.section`
li{
  list-style:none;
  display:flex;
  align-items:center;
  margin-bottom:10px;
  &:before{
    font-family: "Font Awesome 5 Free";
    color:${variable.brand1};
    content:"\f14a";
    font-size:32px;
    margin-right:20px;
  }
}
`;



const SectionMarkdown = ({object}) => (

<SectionMarkdownStyle>
  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.markdown) }} />
</SectionMarkdownStyle>
)

export default SectionMarkdown
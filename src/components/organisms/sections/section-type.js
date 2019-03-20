import React from "react";
import styled from "styled-components";
import SectionMarkdown from "../sections/section-markdown"
import BlogList from "../sections/section-bloglist"
import SectionForm from "../sections/section-form"

const SectionType = ({object}) => {
 
  switch(object.type){
    case 'markdown':
    return <SectionMarkdown
    object={object}
    ></SectionMarkdown>;
    case 'bloglist':
    return <BlogList></BlogList>;
    case 'form':
    return <SectionForm></SectionForm>;
  }
  return(
    null
  )
}

export default SectionType
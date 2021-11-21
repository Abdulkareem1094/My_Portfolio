import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

const ProjectSectionStyles = styled.div`
    margin-top: 40rem;

`;

const ProjectSection = () => {
    return (
        <ProjectSectionStyles>
            <SectionTitle
                 SubHeading='Some of my recent works'
                 Heading='Projects'
            />
        </ProjectSectionStyles>
    )
}

export default ProjectSection

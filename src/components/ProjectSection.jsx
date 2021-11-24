import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import SectionTitle from './SectionTitle'
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation]);

const ProjectSectionStyles = styled.div`
    margin-top: 40rem;
    padding: 10rem 0;
    .projects__allItems{
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next{
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: #303137;
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-next{
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after{
        font-size: 2rem;
    }
`;

const ProjectSection = () => {
    return (
        <ProjectSectionStyles>
            <SectionTitle
                 SubHeading='Some of my recent works'
                 Heading='Projects'
            />
            <div className="projects__allItems">
                <Swiper 
                spaceBetween={30}
                slidesPerView={1}
                navigation
                >
                    {projects.map((project, index) => {
                        if (index >= 5) return;
                        return (
                            <SwiperSlide key={project.id}>
                                <ProjectItem/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </ProjectSectionStyles>
    )
}

export default ProjectSection

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProjectImage from '../assets/images/projectImg.png'

const ProjectItemStyle = styled.div`
    .projectItem__img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 8px;
        border: 3px solid #303137;
        display: inline-block;
        img{
            height: 100%;
        }
    }
    .projectItem__info{
        margen-top: 1rem;
        background-color: #303137;
        padding: 1rem;
        border-radius: 8px;
    }
    projectItem__title{
        font-size: 2.2rem;
    }
    projectItem__desc{
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px){
        .projectItem__img{
            height: 35rem;
        }
    }
`;

const ProjectItem = ({
    title= 'Project Name',
    img= ProjectImage,
    desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos ratione unde soluta quas odio magni totam deserunt laudantium iure neque temporibus,incidunt aliquam cum blanditiis perspiciatis laborum cupiditate veniam?"
}) => {
    return (
        <ProjectItemStyle>
            <Link to='/projects' className='projectItem__img'>
                <img src={img} alt="Project Img" />
            </Link>
            <div className="projectItem__info">
                <Link to="/projects">
                    <h3 className="projectItem__Title">{title}</h3>
                    <p className="projectItem__desc">{desc}</p>
                </Link>
            </div>
        </ProjectItemStyle>
    )
}

export default ProjectItem

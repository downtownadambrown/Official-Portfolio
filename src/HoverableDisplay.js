import React from 'react';
import styled from "@emotion/styled/macro";
import Chip from '@material-ui/core/Chip';

const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
});

const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
});

const Title = styled.h2({
    transform: "translate3d(-50px,0,0)",
    transition: "transform 350ms ease",
});

const SubTitle = styled.h4({
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
});

const Technologies = styled.p({
    transform: "translate3d(0,150px,0)",
    transition: "transform 350ms ease",
});

const CTA = styled.a({
    position: "absolute",
    bottom: "20px",
    left: "20px",
});

const HoverableDisplay = ({
    className = '',
    title = '',
    subTitle = '',
    ctaText = '',
    handleCTAClick = () => {},
    backgroundURL = '',
    backgroundColor = '',
    textColor = '#FFFFFF',
    width = '100%',
    height = '350px',
    technologies = [],
    ...rest
}) => {
    const Background = styled.div({
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: textColor,
        position: "relative",
        width: width,
        height: height,
        cursor: "pointer",
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundURL})`,
        [`:hover ${DisplayOver}`]: {
            backgroundColor: "rgba(0,0,0,.5)",
        },
        [`:hover ${Title}`]: {
            transform: "translate3d(0,0,0)",
        },
        [`:hover ${SubTitle}`]: {
            transform: "translate3d(0,0,0)",
        },
        [`:hover ${Technologies}`]: {
            transform: "translate3d(0,0,0)",
        },
        [`:hover ${Hover}`]: {
            opacity: 1,
        },
    });

    return (
        <div className={className} {...rest}>
            <Background>
                <DisplayOver>
                    <Hover>
                        <Title>
                            {title}
                        </Title>
                        <SubTitle>
                            {subTitle}
                        </SubTitle>
                        <Technologies>
                            {technologies.map(label => (
                                <Chip
                                    className="mx-1 mb-1"
                                    label={label}
                                    variant="outlined"
                                />
                            ))}
                        </Technologies>
                        <CTA onClick={handleCTAClick}>
                            {ctaText}
                        </CTA>
                    </Hover>
                </DisplayOver>
            </Background>
        </div>
    );
};

export default HoverableDisplay;

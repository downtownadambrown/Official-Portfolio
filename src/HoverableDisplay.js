import React from 'react';
import Chip from '@material-ui/core/Chip';

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
    const backgroundStyles = {
        backgroundColor: backgroundColor,  // move to style prop
        backgroundImage: `url(${backgroundURL})`,  // move to style prop
    };

    return (
        <div className={className} {...rest}>
            <div className="hd-background" style={backgroundStyles}>
                <div className="hd-display-over">
                    <div className="hd-hover">
                        <div className="hd-title">
                            {title}
                        </div>
                        <div className="hd-subtitle">
                            {subTitle}
                        </div>
                        <div className="hd-technologies">
                            {technologies.map(label => (
                                <Chip
                                    className="mx-1 mb-1"
                                    label={label}
                                    variant="outlined"
                                />
                            ))}
                        </div>
                        <div className="hd-cta" onClick={handleCTAClick}>
                            {ctaText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverableDisplay;

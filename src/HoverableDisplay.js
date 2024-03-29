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
    technologies = [],
    ...rest
}) => {
    const backgroundStyles = {
        backgroundColor: backgroundColor,  // move to style prop
        backgroundImage: `url(${backgroundURL})`,  // move to style prop
    };

    return (
        <div className={className} onClick={handleCTAClick} {...rest}>
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
                            {technologies.map((label, index) => (
                                <Chip
                                    key={`chip-label-${index}`}
                                    className="mx-1 mb-1"
                                    label={label}
                                    variant="outlined"
                                />
                            ))}
                        </div>
                        <div className="hd-cta">
                            {ctaText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverableDisplay;

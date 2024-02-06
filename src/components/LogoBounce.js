import React, { useRef, useState, useEffect } from 'react';
import './styles/LogoBounce.css';

export const LogoBounce = () => {
    const logoRef = useRef(null);
    const bodyRef = useRef(null);
    const [hRange, setHRange] = useState(0);
    const [wRange, setWRange] = useState(0);
    const [positionX, setPositionX] = useState(1);
    const [positionY, setPositionY] = useState(1);

    useEffect(() => {
        if (logoRef.current) {
            const { height, width } = logoRef.current.getBoundingClientRect();
            setHRange(height);
            setWRange(width);
        }
    }, []);

    useEffect(() => {
        let animationFrameId;

        let bodyPosition = null;
        let bodySize = null;

        let logoPosition = null;
        let logoSize = null;

        const animate = () => {
            bodyPosition = bodyRef.current.getBoundingClientRect().left;
            bodySize = bodyRef.current.offsetWidth;



            setPositionX(positionX => positionX + 1);

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [wRange]);

    useEffect(() => {
        console.log(positionX); // This will log the updated value of positionX
    }, [positionX]);

    return (
        <div className="snippet">
            <div className="header">
                <p>react</p>
            </div>
            <div className="body" ref={bodyRef}>
                <span ref={logoRef} className="logo" style={{ position: 'relative', left: positionX, top: positionY }}>{"<@hello-world/>"}</span>
            </div>
        </div>
    );
}
import React, { useRef, useState, useEffect } from 'react';
import './styles/LogoBounce.css';

export const LogoBounce = () => {
    const logoRef = useRef(null);
    const bodyRef = useRef(null);
    const [speed,setSpeed] = useState(0.1);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [bounces,setBounces]=useState(0);
    const [bounceColor,setBounceColor]=useState('#66CCCC')

    useEffect(() => {
        let animationFrameId;
        let b;

        let wRange = null;
        let hRange = null;

        let colors = [
            "#66CCCC",
            "#67DAC4",
            "#7BE6B3",
            "#9EEF9D",
            "#C9F685",
            "#F9F871"
        ];

        const animate = () => {
            wRange = bodyRef.current.offsetWidth - logoRef.current.offsetWidth;
            hRange = bodyRef.current.offsetHeight - logoRef.current.offsetHeight;

            const time = performance.now() * speed;

            setPositionX(positionX => Math.abs((time % (wRange*2)) - wRange ));
            setPositionY(positionY => Math.abs((time % (hRange*2)) - hRange ));

            b = Math.floor(time/hRange)+Math.floor(time/wRange);

            setBounces(b);
            setBounceColor(colors[b % colors.length]);


            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        console.log(bounceColor); // This will log the updated value of positionX
    }, [bounceColor]);

    return (
        <div className="snippet">
            <div className="header">
                <p>react</p>
            </div>
            <div className="body" ref={bodyRef}>
                <span ref={logoRef} className="logo" style={{ color: bounceColor ,position: 'relative', left: positionX, top: positionY }}>{"<@hello-world/>"}</span>
            </div>
        </div>
    );
}
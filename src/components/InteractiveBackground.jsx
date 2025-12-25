import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = (props) => {
    const ref = useRef();

    const [sphere] = useState(() => {
        const temp = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = 1.5 * Math.cbrt(Math.random()); // Radius 1.5
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00ff41"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const InteractiveBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%)' // Fallback/Blend
        }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

// Lazy load because Three.js is heavy? No, for now let's keep it simple.
// We need to verify maath dependency or implement simple random sphere gen.
// Since maath isn't installed, let's replace star gen with manual.

import { useState } from 'react';

export default function BackgroundWrapper() {
    // Use fallback if three isn't ready or just simple implementation
    return <InteractiveBackground />;
}

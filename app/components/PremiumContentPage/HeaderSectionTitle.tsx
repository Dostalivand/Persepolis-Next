// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';


// type HaloNetworkProps = {
//     title?: string;
//     underlineTitle? : string;
//     height?: number | string;
//     className?: string;
// };

// type Point = {
//     x: number;
//     y: number;
//     originX: number;
//     originY: number;
//     closest: Point[];
//     opacity: number;
//     circle: Circle;
// };

// class Circle {
//     pos: Point;
//     radius: number;
//     opacity: number;
//     ctx: CanvasRenderingContext2D;

//     constructor(pos: Point, rad: number, ctx: CanvasRenderingContext2D) {
//         this.pos = pos;
//         this.radius = rad;
//         this.opacity = 1;
//         this.ctx = ctx;
//     }

//     draw() {
//         const { ctx } = this;
//         ctx.beginPath();
//         ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
//         ctx.fillStyle = `rgba(156,217,249,${this.opacity})`;
//         ctx.fill();
//     }
// }

// export default function HaloNetwork({
//     title = 'محتوای اختصاصی',
//     underlineTitle = 'فیلم‌ها و محتوای ویژه پرسپولیس',
//     height = '40vh',
//     className = '',
// }: HaloNetworkProps) {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const rafRef = useRef<number | null>(null);
//     const pointsRef = useRef<Point[]>([]);
//     const targetRef = useRef<{ x: number; y: number } | null>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;

//         let width = 0;
//         let heightPx = 0;
//         const pointDistance = 45;
//         const pointRadius = 2;

//         const setSize = () => {
//             const parent = canvas.parentElement;
//             if (!parent) return;

//             width = parent.clientWidth;
//             heightPx = parent.clientHeight;

//             const dpr = Math.min(window.devicePixelRatio || 1, 2);
//             canvas.width = width * dpr;
//             canvas.height = heightPx * dpr;
//             canvas.style.width = `${width}px`;
//             canvas.style.height = `${heightPx}px`;
//             ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//         };

//         const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) =>
//             Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

//         const initPoints = () => {
//             const points: Point[] = [];
//             for (let x = 0; x <= width / pointDistance; x++) {
//                 for (let y = 0; y <= heightPx / pointDistance; y++) {
//                     const px = x * pointDistance;
//                     const py = y * pointDistance;
//                     const p = {
//                         x: px,
//                         y: py,
//                         originX: px,
//                         originY: py,
//                         closest: [],
//                         opacity: 0,
//                         circle: null as unknown as Circle,
//                     };
//                     points.push(p);
//                 }
//             }

//             for (let i = 0; i < points.length; i++) {
//                 const p1 = points[i];
//                 const closest: Point[] = [];
//                 for (let j = 0; j < points.length; j++) {
//                     const p2 = points[j];
//                     if (p1 === p2) continue;

//                     let placed = false;
//                     for (let k = 0; k < 5; k++) {
//                         if (!closest[k]) {
//                             closest[k] = p2;
//                             placed = true;
//                             break;
//                         }
//                     }
//                     if (!placed) {
//                         for (let k = 0; k < 5; k++) {
//                             if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                 closest[k] = p2;
//                                 break;
//                             }
//                         }
//                     }
//                 }
//                 p1.closest = closest;
//             }

//             for (let i = 0; i < points.length; i++) {
//                 points[i].circle = new Circle(points[i], pointRadius, ctx);
//             }

//             const shiftPoint = (p: Point) => {
//                 gsap.to(p, {
//                     duration: 1 + Math.random(),
//                     x: p.originX + Math.random() * (pointDistance / 2),
//                     y: p.originY + Math.random() * (pointDistance / 2),
//                     ease: 'circ.inOut',
//                     onComplete: () => shiftPoint(p),
//                 });
//             };

//             points.forEach((p) => shiftPoint(p));

//             pointsRef.current = points;
//         };

//         const drawLines = (p: Point) => {
//             if (!targetRef.current) return;
//             for (let i = 0; i < p.closest.length; i++) {
//                 const cp = p.closest[i];
//                 ctx.beginPath();
//                 ctx.moveTo(p.x, p.y);
//                 ctx.lineTo(cp.x, cp.y);
//                 ctx.strokeStyle = `rgba(156,217,249,${p.opacity})`;
//                 ctx.stroke();
//             }
//         };

//         const drawPoints = () => {
//             ctx.clearRect(0, 0, width, heightPx);
//             const target = targetRef.current;

//             const points = pointsRef.current;
//             for (let i = 0; i < points.length; i++) {
//                 const p = points[i];

//                 if (target) {
//                     const dist = Math.abs(getDistance(target, p));
//                     if (dist < 4000) {
//                         p.opacity = 0.3;
//                         p.circle.opacity = 1;
//                     } else if (dist < 20000) {
//                         p.opacity = 0.1;
//                         p.circle.opacity = 1;
//                     } else if (dist < 40000) {
//                         p.opacity = 0.02;
//                         p.circle.opacity = 0.8;
//                     } else {
//                         p.opacity = 0;
//                         p.circle.opacity = 0.7;
//                     }
//                 }

//                 drawLines(p);
//                 p.circle.draw();
//             }
//         };

//         const animate = () => {
//             drawPoints();
//             rafRef.current = requestAnimationFrame(animate);
//         };

//         const handleMouseMove = (e: MouseEvent) => {
//             targetRef.current = { x: e.clientX, y: e.clientY };
//         };

//         const handleResize = () => {
//             setSize();
//             pointsRef.current.forEach((p) => gsap.killTweensOf(p));
//             initPoints();
//         };

//         setSize();
//         initPoints();
//         animate();

//         if (!('ontouchstart' in window)) {
//             window.addEventListener('mousemove', handleMouseMove);
//         }
//         window.addEventListener('resize', handleResize);

//         return () => {
//             if (rafRef.current) cancelAnimationFrame(rafRef.current);
//             window.removeEventListener('resize', handleResize);
//             window.removeEventListener('mousemove', handleMouseMove);
//             pointsRef.current.forEach((p) => gsap.killTweensOf(p));
//         };
//     }, []);

//     return (
//         <section
//             className={`relative w-full overflow-hidden bg-[#0b234f] ${className}`}
//             style={{ height }}
//         >
//             <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
//             <div className="relative z-10 flex-row h-full w-full items-center justify-center px-4">
//                 <h1 className="text-center font-Kalameh text-white mt-50 text-7xl">
//                     {title}
//                 </h1>
//                 <p className="text-center font-Dana text-gray-200 mt-8 text-2xl">
//                     {underlineTitle}
//                 </p>
//             </div>
//         </section>
//     );
// }






















// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';


// type HaloNetworkProps = {
//     title?: string;
//     underlineTitle?: string;
//     height?: number | string;
//     className?: string;
// };

// type Point = {
//     x: number;
//     y: number;
//     originX: number;
//     originY: number;
//     closest: Point[];
//     opacity: number;
//     circle: Circle;
// };

// class Circle {
//     pos: Point;
//     radius: number;
//     opacity: number;
//     ctx: CanvasRenderingContext2D;

//     constructor(pos: Point, rad: number, ctx: CanvasRenderingContext2D) {
//         this.pos = pos;
//         this.radius = rad;
//         this.opacity = 1;
//         this.ctx = ctx;
//     }

//     draw() {
//         const { ctx } = this;
//         ctx.beginPath();
//         ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
//         ctx.fillStyle = `rgba(156,217,249,${this.opacity})`;
//         ctx.fill();
//     }
// }

// export default function HaloNetwork({
//     title = 'عنوان صفحه',
//     underlineTitle = 'متن توضیحات',
//     height = '40vh',
//     className = '',
// }: HaloNetworkProps) {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const rafRef = useRef<number | null>(null);
//     const pointsRef = useRef<Point[]>([]);
//     const targetRef = useRef<{ x: number; y: number } | null>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;

//         let width = 0;
//         let heightPx = 0;
//         const pointDistance = 45;
//         const pointRadius = 2;

//         const setSize = () => {
//             const parent = canvas.parentElement;
//             if (!parent) return;

//             width = parent.clientWidth;
//             heightPx = parent.clientHeight;

//             const dpr = Math.min(window.devicePixelRatio || 1, 2);
//             canvas.width = width * dpr;
//             canvas.height = heightPx * dpr;
//             canvas.style.width = `${width}px`;
//             canvas.style.height = `${heightPx}px`;
//             ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//         };

//         const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) =>
//             Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

//         const initPoints = () => {
//             const points: Point[] = [];
//             for (let x = 0; x <= width / pointDistance; x++) {
//                 for (let y = 0; y <= heightPx / pointDistance; y++) {
//                     const px = x * pointDistance;
//                     const py = y * pointDistance;
//                     const p = {
//                         x: px,
//                         y: py,
//                         originX: px,
//                         originY: py,
//                         closest: [],
//                         opacity: 0,
//                         circle: null as unknown as Circle,
//                     };
//                     points.push(p);
//                 }
//             }

//             for (let i = 0; i < points.length; i++) {
//                 const p1 = points[i];
//                 const closest: Point[] = [];
//                 for (let j = 0; j < points.length; j++) {
//                     const p2 = points[j];
//                     if (p1 === p2) continue;

//                     let placed = false;
//                     for (let k = 0; k < 5; k++) {
//                         if (!closest[k]) {
//                             closest[k] = p2;
//                             placed = true;
//                             break;
//                         }
//                     }
//                     if (!placed) {
//                         for (let k = 0; k < 5; k++) {
//                             if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                 closest[k] = p2;
//                                 break;
//                             }
//                         }
//                     }
//                 }
//                 p1.closest = closest;
//             }

//             for (let i = 0; i < points.length; i++) {
//                 points[i].circle = new Circle(points[i], pointRadius, ctx);
//             }

//             const shiftPoint = (p: Point) => {
//                 gsap.to(p, {
//                     duration: 1 + Math.random(),
//                     x: p.originX + Math.random() * (pointDistance / 2),
//                     y: p.originY + Math.random() * (pointDistance / 2),
//                     ease: 'circ.inOut',
//                     onComplete: () => shiftPoint(p),
//                 });
//             };

//             points.forEach((p) => shiftPoint(p));

//             pointsRef.current = points;
//         };

//         const drawLines = (p: Point) => {
//             if (!targetRef.current) return;
//             for (let i = 0; i < p.closest.length; i++) {
//                 const cp = p.closest[i];
//                 ctx.beginPath();
//                 ctx.moveTo(p.x, p.y);
//                 ctx.lineTo(cp.x, cp.y);
//                 ctx.strokeStyle = `rgba(156,217,249,${p.opacity})`;
//                 ctx.stroke();
//             }
//         };

//         const drawPoints = () => {
//             ctx.clearRect(0, 0, width, heightPx);
//             const target = targetRef.current;

//             const points = pointsRef.current;
//             for (let i = 0; i < points.length; i++) {
//                 const p = points[i];

//                 if (target) {
//                     const dist = Math.abs(getDistance(target, p));
//                     if (dist < 4000) {
//                         p.opacity = 0.3;
//                         p.circle.opacity = 1;
//                     } else if (dist < 20000) {
//                         p.opacity = 0.1;
//                         p.circle.opacity = 1;
//                     } else if (dist < 40000) {
//                         p.opacity = 0.02;
//                         p.circle.opacity = 0.8;
//                     } else {
//                         p.opacity = 0;
//                         p.circle.opacity = 0.7;
//                     }
//                 }

//                 drawLines(p);
//                 p.circle.draw();
//             }
//         };

//         const animate = () => {
//             drawPoints();
//             rafRef.current = requestAnimationFrame(animate);
//         };

//         const handleMouseMove = (e: MouseEvent) => {
//             targetRef.current = { x: e.clientX, y: e.clientY };
//         };

//         const handleResize = () => {
//             setSize();
//             pointsRef.current.forEach((p) => gsap.killTweensOf(p));
//             initPoints();
//         };

//         setSize();
//         initPoints();
//         animate();

//         if (!('ontouchstart' in window)) {
//             window.addEventListener('mousemove', handleMouseMove);
//         }
//         window.addEventListener('resize', handleResize);

//         return () => {
//             if (rafRef.current) cancelAnimationFrame(rafRef.current);
//             window.removeEventListener('resize', handleResize);
//             window.removeEventListener('mousemove', handleMouseMove);
//             pointsRef.current.forEach((p) => gsap.killTweensOf(p));
//         };
//     }, []);

//     return (
//         <section
//             className={`relative w-full overflow-hidden bg-[#0b234f] ${className}`}
//             style={{ height }}
//         >
//             <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
//             <div className="relative z-10 flex flex-col h-full w-full items-center justify-center px-4 pb-5">
//                 <h1 className="text-center font-Kalameh text-white mt-50 text-7xl">
//                     {title}
//                 </h1>
//                 <p className="text-center font-Dana text-gray-200 mt-8 text-2xl inline-block bg-white/10 px-4 py-2 rounded-lg">
//                     {underlineTitle}
//                 </p>
//             </div>
//         </section>
//     );
// }

















'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


type HaloNetworkProps = {
    title?: string;
    underlineTitle?: string;
    height?: number | string;
    className?: string;
};

type Point = {
    x: number;
    y: number;
    originX: number;
    originY: number;
    closest: Point[];
    opacity: number;
    circle: Circle;
};

class Circle {
    pos: Point;
    radius: number;
    opacity: number;
    ctx: CanvasRenderingContext2D;

    constructor(pos: Point, rad: number, ctx: CanvasRenderingContext2D) {
        this.pos = pos;
        this.radius = rad;
        this.opacity = 1;
        this.ctx = ctx;
    }

    draw() {
        const { ctx } = this;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(156,217,249,${this.opacity})`;
        ctx.fill();
    }
}

export default function HaloNetwork({
    title = 'عنوان صفحه',
    underlineTitle = 'توضیحات',
    height = '40vh',
    className = '',
}: HaloNetworkProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const pointsRef = useRef<Point[]>([]);
    const targetRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let heightPx = 0;
        const pointDistance = 45;
        const pointRadius = 2;

        const setSize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            width = parent.clientWidth;
            heightPx = parent.clientHeight;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = heightPx * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${heightPx}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) =>
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

        const initPoints = () => {
            const points: Point[] = [];
            for (let x = 0; x <= width / pointDistance; x++) {
                for (let y = 0; y <= heightPx / pointDistance; y++) {
                    const px = x * pointDistance;
                    const py = y * pointDistance;
                    const p = {
                        x: px,
                        y: py,
                        originX: px,
                        originY: py,
                        closest: [],
                        opacity: 0,
                        circle: null as unknown as Circle,
                    };
                    points.push(p);
                }
            }

            for (let i = 0; i < points.length; i++) {
                const p1 = points[i];
                const closest: Point[] = [];
                for (let j = 0; j < points.length; j++) {
                    const p2 = points[j];
                    if (p1 === p2) continue;

                    let placed = false;
                    for (let k = 0; k < 5; k++) {
                        if (!closest[k]) {
                            closest[k] = p2;
                            placed = true;
                            break;
                        }
                    }
                    if (!placed) {
                        for (let k = 0; k < 5; k++) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                break;
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            for (let i = 0; i < points.length; i++) {
                points[i].circle = new Circle(points[i], pointRadius, ctx);
            }

            const shiftPoint = (p: Point) => {
                gsap.to(p, {
                    duration: 1 + Math.random(),
                    x: p.originX + Math.random() * (pointDistance / 2),
                    y: p.originY + Math.random() * (pointDistance / 2),
                    ease: 'circ.inOut',
                    onComplete: () => shiftPoint(p),
                });
            };

            points.forEach((p) => shiftPoint(p));

            pointsRef.current = points;
        };

        const drawLines = (p: Point) => {
            if (!targetRef.current) return;
            for (let i = 0; i < p.closest.length; i++) {
                const cp = p.closest[i];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(cp.x, cp.y);
                ctx.strokeStyle = `rgba(156,217,249,${p.opacity})`;
                ctx.stroke();
            }
        };

        const drawPoints = () => {
            ctx.clearRect(0, 0, width, heightPx);
            const target = targetRef.current;

            const points = pointsRef.current;
            for (let i = 0; i < points.length; i++) {
                const p = points[i];

                if (target) {
                    const dist = Math.abs(getDistance(target, p));
                    if (dist < 4000) {
                        p.opacity = 0.3;
                        p.circle.opacity = 1;
                    } else if (dist < 20000) {
                        p.opacity = 0.1;
                        p.circle.opacity = 1;
                    } else if (dist < 40000) {
                        p.opacity = 0.02;
                        p.circle.opacity = 0.8;
                    } else {
                        p.opacity = 0;
                        p.circle.opacity = 0.7;
                    }
                }

                drawLines(p);
                p.circle.draw();
            }
        };

        const animate = () => {
            drawPoints();
            rafRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            setSize();
            pointsRef.current.forEach((p) => gsap.killTweensOf(p));
            initPoints();
        };

        setSize();
        initPoints();
        animate();

        if (!('ontouchstart' in window)) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            pointsRef.current.forEach((p) => gsap.killTweensOf(p));
        };
    }, []);

    return (
        <section
            className={`relative w-full overflow-hidden bg-[#0b234f] ${className}`}
            style={{ height }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

            <div className="relative z-10 flex flex-col h-full w-full items-center justify-center px-4">
                <h1 className="text-center font-Kalameh text-white mt-30 md:mt-40 lg:mt-45 text-4xl md:text-5xl lg:text-7xl">
                    {title}
                </h1>
                <p className="relative text-center font-Dana-Bold md:font-Dana text-gray-300 mt-6 md:mt-4 lg:mt-6 text-base md:text-xl inline-block bg-white/10 px-4 py-2 md:py-1 rounded-lg overflow-hidden">
                    <span className="pointer-events-none absolute top-0 right-0 h-full w-[40%] -translate-x-[120%] bg-linear-to-l from-white/0 via-white/60 to-white/0 opacity-80 mix-blend-screen animate-[haloShine_4s_ease-in-out_infinite]" />
                    <span className="relative z-1">{underlineTitle}</span>
                </p>
            </div>

            <style jsx global>{`
                @keyframes haloShine {
                    0% {
                        transform: translateX(200%);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.9;
                    }
                    60% {
                        transform: translateX(-120%);
                        opacity: 0.9;
                    }
                    100% {
                        transform: translateX(-200%) ;
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    );
}



























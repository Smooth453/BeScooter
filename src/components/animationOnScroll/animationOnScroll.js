'use client';

import { InView } from "react-intersection-observer";

export default function AnimationOnScroll({ children, classnames, classNameInView, classNameNotInView }) {
    return (
        <InView triggerOnce threshold={0.5} >
            {({ inView, ref, entry }) => (
                <div ref={ref} className={classnames + " " + (inView ? classNameInView : classNameNotInView)}>
                    {children}
                </div>
            )}
        </InView >
    );
}
declare module '@splidejs/react-splide' {
    import { ComponentType, ReactNode, CSSProperties } from 'react';
    import { Options } from '@splidejs/splide';

    export interface SplideProps {
        options?: Options;
        extensions?: Record<string, any>;
        hasTrack?: boolean;
        tag?: string;
        id?: string;
        className?: string;
        style?: CSSProperties;
        aria?: string;
        "aria-label"?: string;
        "aria-labelledby"?: string;
        children?: ReactNode;
        [key: string]: any;
    }

    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<any>;
    export const SplideTrack: ComponentType<any>;
}

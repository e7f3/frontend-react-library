export type SkeletonShape = 'rectangle' | 'circle';

interface BaseSkeletonConfig<TShape extends SkeletonShape = SkeletonShape> {
    /*
     * Shape of skeleton element
     */
    shape?: TShape;
    /**
     * Class name
     */
    className?: string;
}

type DimensionConfig<TShape extends SkeletonShape> = TShape extends 'circle'
    ? {
        /**
     * Width in any CSS format. Optional for circles.
     */
        width?: string;
        /**
     * Height in any CSS format. Optional for circles.
     */
        height?: string;
    }
    : {
        /**
     * Width in any CSS format. Required for rectangles.
     */
        width: string;
        /**
     * Height in any CSS format. Required for rectangles.
     */
        height: string;
    };
  
/**
 * Config for single skeleton element
 */
export type SkeletonElementConfig<TShape extends SkeletonShape = SkeletonShape> = 
    BaseSkeletonConfig<TShape> & DimensionConfig<TShape>;



/**
 * Config for skeleton
 */
export type SkeletonConfig = SkeletonElementConfig[];
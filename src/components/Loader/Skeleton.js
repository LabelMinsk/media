import classNames from "classnames";

export const Skeleton = ({times,classNameProp}) => {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        classNameProp
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );

    const boxes = Array(times)
        .fill('')
        .map((_, i) => {
            return (
                <div key={i} className={outerClassNames}>
                    <div className={innerClassNames}/>
                </div>
            )
        });

    return boxes;
}
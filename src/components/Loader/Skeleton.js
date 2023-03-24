import classNames from "classnames";

export const Skeleton = ({times,classNameProp}) => {
    const outerBlockClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        classNameProp
    );
    const innerBlockClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );

    return Array(times)
        .fill('')
        .map((_, i) => {
            return (
                <div key={i} className={outerBlockClassNames}>
                    <div className={innerBlockClassNames}/>
                </div>
            )
        });
}
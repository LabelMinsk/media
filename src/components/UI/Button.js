import className from 'classnames';

function Button({
                    children,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    outline,
                    rounded,
                    ...rest
                }) {

    const classes = className( rest.classes,` flex items-center px-3 py-1.5 border`, {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-400': outline && primary,
        'text-gray-400': outline && secondary,
        'text-green-400': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-400': outline && danger,
    })
    return <button className={classes} {...rest}>{children}</button>
}

export default Button;
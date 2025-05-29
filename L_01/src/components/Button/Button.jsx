import './Button.scss'

export default function Button({
    children,
    type,
    size,
    className }) {
    return (
        <button className={`
            button 
            ${className} 
            button--${type} 
            button--size-${size}
        `}>
            {children}
        </button>
    )
}
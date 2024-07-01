import './WidgetContainer.css';

const WidgetContainerVandaag = ({ children, title, icon, className}) => {

    return (
        <div className={`widgetContainer ${className}`}>
            {icon && (
                <img className='vandaagIcon' src={icon} />
            )}
            <h3>{title}</h3>
            <div className='vandaagContentContainer'>{children}</div>
        </div>
    )
};

export default WidgetContainerVandaag;
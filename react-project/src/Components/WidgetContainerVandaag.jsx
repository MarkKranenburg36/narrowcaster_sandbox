import './WidgetContainer.css';

const WidgetContainerVandaag = ({ children, title, icon, className}) => {

    return (
        <div className={`widgetContainer ${className}`}>
            {icon && (
                <img id='lightBulp' src={icon} />
            )}
            <h3>{title}</h3>
            <div id='factContainer'>{children}</div>
        </div>
    )
};

export default WidgetContainerVandaag;
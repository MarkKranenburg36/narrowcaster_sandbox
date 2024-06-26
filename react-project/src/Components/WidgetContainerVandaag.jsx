import './WidgetContainer.css';

const WidgetContainerVandaag = ({ children, title, icon}) => {

    return (
        <div className={'widgetContainer'}>
            {icon && (
                <h6>{icon}</h6>
            )}
            <h3>{title}</h3>
            <div id='factContainer'>{children}</div>
        </div>
    )
};

export default WidgetContainerVandaag;
const WidgetContainerEvents = ({ children, title, className}) => {

    return (
        <div className={`widgetContainer ${className}`}>
            {children}
        </div>
    )
};

export default WidgetContainerEvents;
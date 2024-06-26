import './WidgetContainer.css';

const WidgetContainer = ({ children, title, bgColor}) => {

    return (
        <div className={`widgetContainer ${bgColor}`}>
            <h3>{title}</h3>
            {children}
        </div>
    )
};

export default WidgetContainer;
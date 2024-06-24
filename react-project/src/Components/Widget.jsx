import './Widget.css';

const Widget = ({ children, title, className }) => {
    return (
        <div className={`widget ${className}`}>
            {title && (
                <div className="widget-header">
                    <h2>{title}</h2>
                </div>
            )}
            <div className="widget-content">
                {children}
            </div>
        </div>
    );
};

export default Widget;

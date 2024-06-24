import './Widget.css';

const Widget = ({ children, title, id, className, childClassName }) => {
    return (
        <div id={id} className={`widget ${className}`}>
            {title && (
                <div className="widget-header">
                    <h2>{title}</h2>
                </div>
            )}
            <div className={`widget-content ${childClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default Widget;

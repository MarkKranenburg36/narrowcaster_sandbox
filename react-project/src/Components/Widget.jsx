import './Widget.css';

const Widget = ({ children, title, id, className, childClassName, NSlogo }) => {
    return (
        <div id={id} className={`widget ${className}`}>
            {NSlogo && (
                <div className='NS-logo-container'>
                    <image src={NSlogo} alt='NS-Icon'/>
                </div>
            )}
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

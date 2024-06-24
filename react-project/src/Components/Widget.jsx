import './Widget.css';
import './../assets/NS-logo.png';

const Widget = ({ children, title, id, className, childClassName, NSlogo }) => {
    return (
        <div className={`widget ${className}`}>
            {NSlogo ? (
                <div className='widget-header'>
                    <img id='NS-icon' src={NSlogo} alt='NS-Icon' />
                    <h2>{title}</h2>
                </div>
            ) : (
                title && (
                    <div className="widget-header">
                        <h2>{title}</h2>
                    </div>
                ))}
            <div className={`widget-content ${childClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default Widget;

import './Widget.css';

const Widget = ({ children, title }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h2>{title}</h2>
      </div>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};

export default Widget;

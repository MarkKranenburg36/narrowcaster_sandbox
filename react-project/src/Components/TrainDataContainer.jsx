import PlatformIcon from "./PlatFormIcon";

const TrainDataContainer = ({className, time, destination, platformIcon, route}) => {
    return(
        <div className={className}>
            <p className="timeNS">{time}</p>
            <p className="destinationNS">{destination}</p>
            <p className="routeNS">{route}</p>
            {platformIcon ? (
                <PlatformIcon number={platformIcon}/>
            ) : (
                null
            ) }
        </div>
    )
}

export default TrainDataContainer;
import PlatformIcon from "./PlatFormIcon";

const TrainDataContainer = ({className, time, destination, platformIcon}) => {
    return(
        <div className={className}>
            <p className="timeNS">{time}</p>
            <p className="destinationNS">{destination}</p>
            <PlatformIcon />
        </div>
    )
}

export default TrainDataContainer;
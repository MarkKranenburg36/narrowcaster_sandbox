import './Greeting.css';

export const Greeting = ({text}) => {

    return(
        <div id="greeting">
            <h1>{text}</h1>
        </div>
    )
}
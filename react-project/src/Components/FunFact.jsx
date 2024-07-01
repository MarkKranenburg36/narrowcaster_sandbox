import { useEffect, useState } from "react"
import './FunFact.css';

export const FunFact = () => {
    const [fact, setFact] = useState('');

    useEffect(() => {
        const fetchFunFact = async () => {
            try {
                const response = await fetch('https://api.api-ninjas.com/v1/facts', {
                    headers: {
                        'X-API-Key': 'roCysqp+c4OAQQbNjyUbiA==VbXp9wZIBXqQbnCO'
                    },
                });

                if (!response.ok) {
                    throw new Error('Problem fetching fun fact from api-ninja\s: Fact API.')
                }

                const factData = await response.json(); 
                if (factData && factData.length > 0) {
                    setFact(factData[0].fact);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchFunFact();
    }, []);

    console.log(fact);

    return (
        <>
            <p className="vandaagContent">{fact + '.'}</p>
        </>
    )
}
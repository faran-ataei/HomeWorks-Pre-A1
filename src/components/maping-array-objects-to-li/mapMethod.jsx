
export function MapMethode( { animals } ) {
    return (
        <>
            <ol>
                { animals.map((value, index) => <li key={index}>{value.label}</li>) }
            </ol>       
        </>
    )
}
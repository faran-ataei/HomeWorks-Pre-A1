

export function Pokecard(value) {
      return (
        <div>
            <h2>{value.name}</h2>
          <div>
            <img src={value.image} alt="pokemon" />
            {console.log(value.name)}
          </div>
          <h3>Type: {value.type} </h3>
        </div>
        )
}

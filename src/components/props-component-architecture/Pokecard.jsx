

export function Pokecard(value) {
      return (
        <div style={{ margin: "20px", background: "lightblue", width: "120px", padding: "30px", borderRadius: "10px", textAlign: "center"
         }}>
            <h2>{value.name}</h2>
          <div>
            <img src={value.image} alt="pokemon" />
          </div>
          <h3>Type: {value.type} </h3>
        </div>
        )
}

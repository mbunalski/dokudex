export function PokeMetric() {
    const types = [
        {type:"Fire"},
        {type:"Water"},
        {type:"Grass"},
        {type:"Ground"}
      
      ]

    return (

        <div>
            <h3>Dropdown Menu</h3>
            <select>
                {types.map(type => (
                    <option value={type.type}>{type.type}</option>
                ))}
            </select>
        </div>

    );

}
import {PokeInfo} from './PokeInfo';

// import {useState} from 'react';

// function MyButton() {
//     const [count, setCount] = useState(0);
  
//     function handleClick() {
//       setCount(count + 1);
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Clicked {typeof pokelist} times
//       </button>
//     );
//   }

export function Display({pokelist}){

    return(
        <div class="h-5/6 justify-start">
        <div class="overflow-y-auto h-5/6 justify-start ">
            <ul>
                {pokelist[0].map(pokemon => (
                    <PokeInfo key={pokemon} pokemon={pokemon} />
                ))}
            </ul>
        </div>
        </div>
    );
}
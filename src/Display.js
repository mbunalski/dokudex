import {PokeInfo} from './PokeInfo';

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
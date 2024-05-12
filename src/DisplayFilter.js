import {PokeMetric} from './PokeMetric';

export function DisplayFilter({update, metric1, metric2}){
    return(
        <div>
            <PokeMetric update={update} metric={metric1}/>
            <PokeMetric update={update} metric={metric2}/>
        </div>
    );
}
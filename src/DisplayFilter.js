import {PokeMetric} from './PokeMetric';

export function DisplayFilter({metric1, metric2}){
    return(
        <div className="">
            <PokeMetric metric={metric1} />
            <PokeMetric metric={metric2} />
        </div>
    );
}
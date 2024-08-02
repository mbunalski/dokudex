import {PokeMetric} from './PokeMetric';

export function DisplayFilter({metric1, metric2}){
    return(
        <div className="flex-col">
            <PokeMetric metric={metric1} />
            <PokeMetric metric={metric2} />
        </div>
    );
}
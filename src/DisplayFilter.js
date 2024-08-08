import {PokeMetric} from './PokeMetric';

export function DisplayFilter({metric1, metric2, category1, category2}){
    return(
        <div className="flex-col">
            <PokeMetric metric={metric1} category={category1} />
            <PokeMetric metric={metric2} category={category2}/>
        </div>
    );
}

import styles from '../styles/Home.module.css';
import {populateall} from './api'
import {popupfilter} from './filter'
import displayall from './history';

// export default function Square() {
//     return <button className="square">X</button>;
//   }

export default function landingpage() {
  return <main>


        <div className={styles.container}>
            <div>
                <button onClick={popupfilter} id="filter">Filter</button>
                <button onClick={displayall} id="filter">History</button>
            </div>

            <div id="filter" style={{backgroundColor: "#00B1E1"}}>wammy</div>

            <ul id="pokelist">
            </ul>
        </div>
      </main>
}
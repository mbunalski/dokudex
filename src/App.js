import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {populateall, byType} from './api'
import PokeFilter from './PokeFilter'
import displayall from './history';
import {DisplayFilter} from './DisplayFilter';


export default function landingpage() {
  return <div className={styles.container}>
  <Head>
    <title>Your DEX for DOKU</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  

  <h1 className={styles.title}>
      Welcome to DOKU DEX
  </h1>
  <PokeFilter />
  <DisplayFilter />

  
    <main>

        <div  className={styles.container}> 
            <div id="filter" style={{backgroundColor: 'lightgreen'}}>
                <button onClick={populateall} id="filter">Filter</button>
                <button onClick={populateall} id="filter">History</button>
            </div>

            <div id="display" style={{backgroundColor: 'lightblue'}}>
                <ul id="pokelist"></ul>
            </div>
        </div>
      </main>
    </div>  
}
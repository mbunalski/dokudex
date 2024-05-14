import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {populateall, byType, filtered} from './api'
import PokeFilter from './PokeFilter'
import displayall from './history';
import {DisplayFilter} from './DisplayFilter';
import {Display} from './Display';
import {useState} from 'react';


export default function landingpage() {
    const [pokelist, setPokelist] = useState([[]]);
    const [metricone, setMetricone] = useState("None");
    const [metrictwo, setMetrictwo] = useState("None");

    function UpdateList() {
        // setPokelist(filtered(metricone, metrictwo));
        console.log("UpdateList")
        // console.log(typeof populateall())
        // populateall().then(x => {
        //     return x
        // })
        Promise.all([populateall()]).then(x => {
            setPokelist(x)
        });
        // console.log("above")
        // console.log(populateall().then(x => {
        //     return x
        // }));
        // console.log("below")
        // console.log(pokelist)
        // console.log(metricone)
        // console.log(metrictwo)
    }

    function UpdateMetricTwo(str) {
        setMetrictwo(str)
    }

    function UpdateMetricOne(str) {
        setMetricone(str)

    }
  return <div className={styles.container}>
  <Head>
    <title>Your DEX for DOKU</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  

  <h1 className={styles.title}>
      Welcome to DOKU DEX
  </h1>
  {/* <PokeFilter /> */}
  <DisplayFilter update={UpdateList} metric1={UpdateMetricOne} metric2={UpdateMetricTwo}/>
  <Display pokelist={pokelist}/>

    {/* <main>
        <div  className={styles.container}> 
            <div id="display" style={{backgroundColor: 'lightblue'}}>
                <ul id="pokelist"></ul>
            </div>
        </div>
      </main> */}
    </div>  
}
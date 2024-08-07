import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {populateall, byType, filtered} from './api'
import PokeFilter from './PokeFilter'
import displayall from './history';
import {DisplayFilter} from './DisplayFilter';
import {Display} from './Display';
import {useState, useEffect} from 'react';


export default function landingpage() {
    const [pokelist, setPokelist] = useState([[]]);
    const [metricone, setMetricone] = useState("Fire");
    const [metrictwo, setMetrictwo] = useState("Fire");

    useEffect(() =>{
        UpdateList()
    }, [metricone, metrictwo]);

    function UpdateList() {
        console.log("UpdateList")
        // console.log(typeof populateall())
        // populateall().then(x => {
        //     return x
        // })
        Promise.all([filtered(metricone, metrictwo)]).then(x => {
            setPokelist(x)
        });
    }

    function UpdateMetricTwo(str) {
        console.log("Update Metric2")
        setMetrictwo(str)
    }

    function UpdateMetricOne(str) {
        console.log("Update Metric1")
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

  <DisplayFilter metric1={UpdateMetricOne} metric2={UpdateMetricTwo} />
  <Display pokelist={pokelist}/>

    </div>  
}
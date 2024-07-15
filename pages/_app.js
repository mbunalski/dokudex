import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {populateall, byType, filtered} from '../src/api'
import {DisplayFilter} from '../src/DisplayFilter';
import {Display} from '../src/Display';
import {useState, useEffect} from 'react';
import '../styles/global.css';


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
  return <div className="">
  <Head>
    <title>Your DEX for DOKU</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  

  <h1 className="">
      Welcome to DOKU DEX
  </h1>

  <DisplayFilter metric1={UpdateMetricOne} metric2={UpdateMetricTwo} />
  <Display pokelist={pokelist}/>

    </div>  
}
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {populateall, byType, filtered} from '../src/api'
import {DisplayFilter} from '../src/DisplayFilter';
import {Display} from '../src/Display';
import {useState, useEffect} from 'react';
import '../styles/global.css';


export default function landingpage() {
    const [pokelist, setPokelist] = useState([[]]);
    const [metricone, setMetricone] = useState("Type");
    const [metrictwo, setMetrictwo] = useState("Type");

    useEffect(() =>{
        UpdateList()
    }, [metricone, metrictwo]);

    function UpdateList() {
        console.log("UpdateList")
  
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
  return <>
            <Head>
                <title>Your DEX for DOKU</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div>
            <div class="sticky">
            <h1 className="">
                Welcome to DOKU DEX
            </h1>
            <DisplayFilter metric1={UpdateMetricOne} metric2={UpdateMetricTwo} />
            </div>

            <Display pokelist={pokelist}/>
            </div>
        </>  
}
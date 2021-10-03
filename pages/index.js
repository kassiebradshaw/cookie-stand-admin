import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReportTable from '../components/ReportTable'
import CreateForm from '../components/CreateForm'
import { hours } from '../data'

export default function CookieStandAdmin() {

  const [reports, setAllStores] = useState([])

  function createStoreHandler(event) {
    event.preventDefault();

    const storeData = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }

    setAllStores([...reports, storeData]);
    calcTotals();
  }

  function getLastStore() {
    if (allStores.length == 0) {
      return;
    }
    console.log(reports[reports.length -1]);
    
    return reports[reports.length -1]
  }

  // function calcTotals() {
  //   let footerTotals = [];
  //   let grandTotal = 0;
  //   for (let i = 0; i < hours.length; i++) {
  //     let hourTotal = 0;
  //     for (let j=0; j < reports.length; j++) {
  //       hourTotal += reports[j].hourly_sales[i];
  //     }
  //     footerTotals.push(hourTotal);
  //     grandTotal += hourTotal;
  //   }
  //   return footerTotals, grandTotal
  // }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <CreateForm onCreate={createStoreHandler}/>
          
        { reports[0] ? <ReportTable 
          hours={hours}
          reports={reports} /> : <h2 className="m-5 text-center">No Cookie Stands Available</h2>
        }
        
      </main>

      <Footer reports={reports.length}/>
    

      {/* <main>           
          <form onSubmit={ createStoreHandler } className="flex p-6 mx-20 my-5 bg-green-300 rounded-md">
            <div className="flex items-center mx-auto text-center">
              <label className="text-xl text-center">Create Cookie Stand</label>            
            </div>
            <div className="flex items-center">
              <label className="">Location: <input type="text" name="location" className=""></input></label>  
              <label for="minCustomers">Minimum Customers per Hour</label>
              <input name="minCustomers" type="number" className="" />
              <label for="maxCustomers">Maximum Customers per Hour</label>
              <input name="maxCustomers" type="number" className="" />
              <label for="avgCookies">Average Cookies per Sale</label>
              <input name="avgCookies" type="number" className=""/>
              <button className="px-10 py-4 m-2 text-xs bg-green-500">Create</button>
            </div>
          </form>
            
          <div className="w-1/2 m-3 mx-auto">
            <p className="mx-auto mt-5 mb-5 text-center">Report Table Coming Soon...</p>
            <p className="mx-auto mt-5 mb-5 font-mono text-center">{ JSON.stringify(getLastStore()) }</p>
          </div>
      </main> */}

    </div>
  )
}
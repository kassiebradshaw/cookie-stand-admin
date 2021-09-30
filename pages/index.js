import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [allStores, setAllStores] = useState([])

  function createStoreHandler(event) {
    event.preventDefault();

    const storeData = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value
    }

    setAllStores([...allStores, storeData]);
  }

  function getLastStore() {
    if (allStores.length == 0) {
      return;
    }
    console.log(allStores[allStores.length -1]);
    
    return allStores[allStores.length -1]
  }
  
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="items-center p-3 text-xl bg-green-500 text-black-100">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main>           
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
      </main>

      <footer className="p-3 bg-green-500">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}

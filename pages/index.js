import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { hours } from '../data'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login, logout } = useAuth();

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

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {user ? 
        <CookieStandAdmin /> :
        <h2>Need to log in</h2>}

      <Footer reports={reports.length}/>

    </div>
  )
}
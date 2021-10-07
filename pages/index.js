import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { hours } from '../data'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'

export default function Home() {

  const { user } = useAuth();

  const [reports, setAllStores] = useState([])

  function createStoreHandler(event) {
    event.preventDefault();

    const storeData = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value
    }

    setAllStores([...reports, storeData]);
    calcTotals();
  }

  return (
    <div className="bg-white">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
      {user ? <CookieStandAdmin /> : <Login />}
      </main>

      <Footer reports={reports.length}/>

    </div>
  )
}
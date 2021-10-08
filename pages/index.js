import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { hours } from '../data'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'
import CookieStandAdmin from '../components/CookieStandAdmin'

export default function Home() {

  const { user, login } = useAuth();

  const [reports, setAllStores] = useState([])

  // function createStoreHandler(event) {
  //   event.preventDefault();

  //   const storeData = {
  //     location: event.target.location.value,
  //     minCustomers: event.target.minCustomers.value,
  //     maxCustomers: event.target.maxCustomers.value,
  //     avgCookies: event.target.avgCookies.value
  //   }

  //   setAllStores([...reports, storeData]);
  //   calcTotals();
  // }

  return (
    <div className="bg-white">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={ {user} }/>
      
      
      <main>
      <button onClick={()=> login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="p-2 text-white bg-gray-500 rounded-md">LOGIN</button>
        {user 
        ? <div>
            <h2>Welcome {user.username}</h2>
            <CookieStandAdmin /> 
        </div>
        // : <Login />
        : <h2>Need to log in</h2>
          }
      
        {/* <CookieStandAdmin 
          reports={reports}
          setAllStores={setAllStores}
        /> */}
      
      </main>

      <Footer reports={reports.length}/>

    </div>
  )
}
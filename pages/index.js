import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';
import StoreForm from '../components/StoreForm'
import ReportTable from '../components/ReportTable'

import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';


export default function Home() {

  const { user, login, logout } = useAuth();
  console.log("User", user);
  const { resources } = useResource();
  console.log(resources);

  return (
    <div className="bg-white">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />  
      
      <main>
        {user ? (
          <div>
            <StoreForm />
            <ReportTable resources={resources} />
          </div>
        ) : (<Login /> )}
      </main>

      <Footer resources={resources}/>

    </div>
  )
}
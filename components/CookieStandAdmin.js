import ReportTable from '.ReportTable'
import CreateForm from '.CreateForm'

export default function CookieStandAdmin() {
  
    return (
      <div>
          <CreateForm onCreate={createStoreHandler}/>
            
          { reports[0] ? <ReportTable 
            hours={hours}
            reports={reports} /> : <h2 className="m-5 text-center">No Cookie Stands Available</h2>
          }
          
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
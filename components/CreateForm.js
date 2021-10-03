export default function CreateForm(props) {
    return (
        <form onSubmit={ props.onCreate } className="items-center w-3/4 p-6 mx-auto my-5 bg-green-300 rounded-md ">
          <div className="items-center text-center ">
            <label className="text-xl text-center">Create Cookie Stand</label>            
          </div>

          <div className="items-center text-center">
            <label className="w-full">Location: <input type="text" name="location" className="flex-auto w-4/5 m-4"></input></label>
          </div>

          <div className="flex w-full justify-items-center h-1/2">
            <ul className="w-1/4 h-full p-2 m-3 text-sm text-center bg-green-200">
              <li><label>Minimum Customers Per Hour</label></li>
              <li><input name="minCustomers" type="number" className="w-full"/></li>
            </ul>
            <ul className="w-1/4 p-2 m-3 text-sm text-center bg-green-200">
              <li><label for="maxCustomers">Maximum Customers per Hour</label></li>
              <li><input name="maxCustomers" type="number" className="w-full" /></li>
            </ul>
            <ul className="w-1/4 p-2 m-3 text-sm text-center bg-green-200">
              <li><label for="avgCookies">Average Cookies per Sale</label></li>
              <li><input name="avgCookies" type="number" className="w-full"/></li>
            </ul>
            <button className="w-1/4 m-3 text-sm bg-green-500 border-2 border-green-500 hover:border-black">Create</button>
          </div>
        </form>
    )
}



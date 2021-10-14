import {useState } from 'react';
import useResource from '../hooks/useResource';

export default function StoreForm(props) {

  const [formInputs, setFormInputs] = useState({});
  const { createResource } = useResource();
  
  const handleChange = (event) => {
    const newFormInputs = {
      ...formInputs,
      [event.target.name]: event.target.value,
    };
    setFormInputs(newFormInputs);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createResource(formInputs);
  };
  
  return (
      <form 
        onSubmit={handleSubmit} 
        className="items-center w-3/4 p-6 mx-auto my-5 bg-green-300 rounded-md ">
          
        <div className="items-center text-center">
          <label className="ml-5 font-bold">Add A Location</label><br />
            <input 
              type="text" 
              name="location"
              className="flex-auto w-2/3 m-4"
              placeholder="Cookie Stand Location"
              onChange={handleChange} />
          
          <button className="flex-auto w-1/4 m-3 text-sm font-bold bg-green-500 border-2 border-green-500 hover:border-black">Create</button>
        </div>

        <div className="flex w-full justify-items-center h-1/2">
          <ul className="w-1/3 h-full p-2 m-3 text-sm text-center bg-green-200">
            <li><label className="font-bold">Minimum Customers Per Hour</label></li>
            <li>
              <input 
                name="minimum_customers_per_hour"
                type="number"
                className="w-full"
                placeholder="0" 
                onChange={handleChange} />
            </li>
          </ul>
          
          <ul className="w-1/3 p-2 m-3 text-sm text-center bg-green-200">
            <li><label className="font-bold">Maximum Customers per Hour</label></li>
            <li>
              <input 
                name="maximum_customers_per_hour"
                type="number"
                className="w-full" 
                placeholder="0"
                onChange={handleChange} />
            </li>
          </ul>
          
          <ul className="w-1/4 p-2 m-3 text-sm text-center bg-green-200">
            <li><label className="font-bold">Average Cookies per Sale</label></li>
            <li>
              <input 
                name="average_cookies_per_sale"
                type="number"
                className="w-full"
                placeholder="0"
                onChange={handleChange} />
            </li>
          </ul>  
                  
        </div>
      </form>
  );
}



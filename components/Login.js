import { useState } from 'react';
import { useAuth } from '../contexts/auth';

export default function Login() {
    const { login } = useAuth();
    const [formItems, setFormItems] = useState({});

    const handleChange = (event) => {
        const newFormItems = {
            ...formItems,
            [event.target.name]: event.target.value,
        };
        console.log(newFormItems);
        setFormItems(newFormItems);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formItems.username, formItems.password);
    };

    return (
            <form 
                onSubmit={handleSubmit}
                className="flex w-1/2 mx-auto bg-green-200 border-4 border-green-400 rounded-md"
            >
                <ul className="w-full mx-auto my-auto text-center">
                    <li className="p-2 font-bold">USER NAME</li>
                    <li className="w-full">
                        <input 
                            name="username"
                            type="text" 
                            className="w-4/5 p-2 border-2 border-solid border-black-300"
                            placeholder="User Name"
                            onChange={handleChange}
                        />
                    </li>
                    
                    <li className="p-2 font-bold">PASSWORD</li>
                    <li>
                        <input 
                            name="password"
                            type="password" 
                            className="w-4/5 p-2 border-2 border-solid border-black-300" 
                            placeholder="password"
                            onChange={handleChange}
                        />
                    </li>
                    
                    <li>
                        <button className="w-4/5 p-2 m-5 font-bold bg-green-500">SIGN IN</button>
                    </li>
                </ul>
            </form>
    );
}
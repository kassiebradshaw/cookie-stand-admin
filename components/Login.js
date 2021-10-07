export default function Login() {
    return (
            <form className="flex w-1/2 mx-auto bg-green-200 border-4 border-green-400 rounded-md">
                <ul className="w-full mx-auto my-auto text-center">
                    <li className="p-2 font-bold">USER NAME</li>
                    <li className="w-full"><input type="text" className="w-4/5 p-2 border-2 border-solid border-black-300" placeholder="User Name"/></li>
                    <li className="p-2 font-bold">PASSWORD</li>
                    <li><input type="text" className="w-4/5 p-2 border-2 border-solid border-black-300" placeholder="password" /></li>
                    <li><button className="w-4/5 p-2 m-5 font-bold bg-green-500">SIGN IN</button></li>
                </ul>
            </form>
    )
}
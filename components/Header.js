import Link from 'next/link'

export default function Header(props) {
    return (
        <header className="inline-flex justify-between w-full mb-5 bg-green-500 p-7 text-black-100">
            <h1 className="text-3xl font-bold">Cookie Stand Admin</h1>
            <nav className="mx-10">
                <div className="flex float-right mx-3 mr-48 text-sm">
                    <button className="p-2 bg-green-300 rounded-md">user</button>
                    <button className="w-20 mx-3 text-white bg-green-600 rounded-md">Logout</button>
                    <Link href="/overview">
                        <button className="h-10 bg-gray-200 rounded-md"><a>Overview</a></button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
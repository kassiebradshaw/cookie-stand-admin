import Link from 'next/link'

export default function Header(props) {
    return (
        <header className="p-3 bg-green-500 text-black-100">
            <nav className="flex justify-between">
                <h1 className="text-2xl">Cookie Stand Admin</h1>
                <Link href="/overview">
                    <button className="justify-between w-20 text-xs bg-gray-200 h-7"><a>Overview</a></button>
                </Link>
            </nav>
        </header>
    )
}
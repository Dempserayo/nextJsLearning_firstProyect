import Link from "next/link"
function navbar() {
  return (
    <nav className="bg-slate-400 mb-4 rounded-md flex  justify-between items-center  px-20  p-3 font-bold text-black"> 
        <Link href="/">Home</Link>

        <ul>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
    )
}

export default navbar
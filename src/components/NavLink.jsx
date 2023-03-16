import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-slate-900 hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900  hover:underline text-xl "
    >
      {children}
    </Link>
  )
}

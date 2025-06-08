function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-white shadow">

      <div className="text-2xl font-bold text-red-600">Youtube clone</div>

      <input type="text" placeholder="Search" className="border rounded px-2 py-1 w-1/2" />

      <button className="ml-2 px-3 py-1 bg-gray-200 rounded">Theme</button>

    </header>
  )
}
export default Header;

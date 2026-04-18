function MainLayout({ children }) {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white">Navbar</nav>
      <main className="p-4">{children}</main>
      <footer className="p-4 bg-gray-200">Footer</footer>
    </div>
  )
}

export default MainLayout
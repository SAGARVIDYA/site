export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">Accredian</h1>

      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Programs</a></li>
        <li><a href="#testimonials">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}
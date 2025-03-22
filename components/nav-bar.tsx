const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CraftPass</div>
        <button className="py-2 px-4 bg-neutral-100 text-neutral-950 rounded-md hover:bg-neutral-200 transition-colors">
          Get on the waitlist
        </button>
      </div>
    </nav>
  );
};

export default NavBar; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">P</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                            PromosiSekolah
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                            <Link to="/about" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                            <Link to="/pixel-world" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors border-2 border-dashed border-indigo-500/50">Pixel World</Link>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

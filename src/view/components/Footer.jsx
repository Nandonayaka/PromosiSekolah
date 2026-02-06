const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">P</span>
                            </div>
                            <span className="text-xl font-bold text-white">PromosiSekolah</span>
                        </div>
                        <p className="text-neutral-500 max-w-sm">
                            Solusi terbaik untuk meningkatkan visibilitas dan pendaftaran sekolah Anda dengan teknologi modern.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Links</h4>
                        <ul className="space-y-2 text-neutral-500 text-sm">
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Home</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">About</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Features</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-neutral-500 text-sm">
                            <li>support@promosisekolah.id</li>
                            <li>+62 812 3456 7890</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-neutral-900 text-center text-sm text-neutral-600">
                    &copy; {new Date().getFullYear()} PromosiSekolah. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;


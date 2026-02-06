const About = () => {
    return (
        <div className="pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">Tentang Kami</h1>
                    <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                        PromosiSekolah adalah inisiatif untuk membantu institusi pendidikan di Indonesia dalam mengadopsi teknologi digital untuk keperluan branding dan pemasaran.
                    </p>
                    <p className="text-lg text-neutral-400 mb-12 leading-relaxed">
                        Kami percaya bahwa setiap sekolah memiliki keunikan tersendiri, dan kami hadir untuk membantu menyampaikan nilai-nilai tersebut kepada masyarakat luas dengan cara yang menarik.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-indigo-400 font-bold text-3xl mb-1">100+</h4>
                            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Sekolah Terdaftar</p>
                        </div>
                        <div>
                            <h4 className="text-purple-400 font-bold text-3xl mb-1">50k+</h4>
                            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Siswa Terjangkau</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


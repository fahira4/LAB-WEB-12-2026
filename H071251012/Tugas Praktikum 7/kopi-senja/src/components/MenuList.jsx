    import MenuCard from "./MenuCard";

    function MenuList({ daftarMenu, onTambah }) {

    return (
        <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="mb-8">
            <p className="text-sm text-[#B58C9A] mb-2">
            OUR MENU
            </p>

            <h2 className="text-3xl font-bold text-[#493942]">
            Menu Kedai Kopi Senja
            </h2>

            <p className="text-[#765866] mt-2">
            Pilih menu favoritmu dan nikmati setiap momennya.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {daftarMenu.map((menu) => (
            <MenuCard
                key={menu.id}
                menu={menu}
                onTambah={onTambah}
                />
            ))}

        </div>

        {daftarMenu.length === 0 && (
            <p className="text-center text-[#B58C9A] py-10">
            Menu tidak ditemukan.
            </p>
        )}

        </section>
    );
    }

    export default MenuList;
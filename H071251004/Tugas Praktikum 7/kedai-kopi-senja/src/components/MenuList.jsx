import MenuCard from "./MenuCard.jsx";

function MenuList({ menuList, kategoriAktif, onTambah }) {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-maroon-800">
          {kategoriAktif === "Semua" ? "Semua Menu" : kategoriAktif}
        </h2>
        <span className="text-sm text-maroon-600">{menuList.length} menu</span>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
        {menuList.map((menu) => (
          <MenuCard
            key={menu.id}
            id={menu.id}
            nama={menu.nama}
            kategori={menu.kategori}
            harga={menu.harga}
            tersedia={menu.tersedia}
            deskripsi={menu.deskripsi}
            onTambah={onTambah}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuList;
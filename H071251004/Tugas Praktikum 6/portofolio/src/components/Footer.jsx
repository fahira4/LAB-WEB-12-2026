function Footer() {
  const nama = "Zahra Intan Pratiwi";
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-tinta px-6 py-8 text-center">
      <p className="m-0 text-sm text-kertas/80">
        © {tahun} {nama}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
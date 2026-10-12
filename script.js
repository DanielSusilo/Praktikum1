// Data profil mahasiswa: ubah nilainya sesuai data milikmu.
const profileData = {
  nama: "Daniel Susilo",
  nim: "G.231.23.0150",
  kelas: "Sore A",
  kelompok: "A1"
};

document.getElementById("studentName").textContent = profileData.nama;
document.getElementById("studentNim").textContent = profileData.nim;
document.getElementById("studentClass").textContent = profileData.kelas;
document.getElementById("studentGroup").textContent = profileData.kelompok;

// Tombol tema terang/gelap.
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☼" : "◐";
  themeToggle.setAttribute("aria-label", isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#171815" : "#f4f1e9");
});

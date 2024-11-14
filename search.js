function toggleSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    
    // Toggle visibility of the search input
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'inline-block';
        searchContainer.classList.add('active'); // Tambah kelas untuk geser kiri
        searchInput.focus();
    } else {
        searchInput.style.display = 'none';
        searchContainer.classList.remove('active'); // Hapus kelas untuk kembali ke kanan
    }
}

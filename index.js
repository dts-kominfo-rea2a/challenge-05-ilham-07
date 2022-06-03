const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, fnSort) => {
  // Invoke function sorter
  sortData = fnSort(arr);

  // Make numbered list from sorted Data
  let data = [];
  for (let i = 0; i < sortData.length; i++) {
    // Data looping
    let loop = "";
    loop += i + 1 + "- " + sortData[i];
    // Add to array
    data.push(loop);
  }

  return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arr) => {
  let data = arr.sort();
  return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) => {
  let data = arr.sort().reverse();
  return data;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

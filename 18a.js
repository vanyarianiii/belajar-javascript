var grade = prompt('Masukan Nilaimu:');

if (grade <= 39) {
    alert("nilai = " + grade + " Maka grade E");
} else if (grade > 39 && grade <= 64) {
    alert("nilai = " + grade + " Maka grade D")
}  else if (grade > 64 && grade <= 74) {
    alert("nilai = " + grade + " Maka grade C")
}  else if (grade > 74 && grade <= 84) {
    alert("nilai = " + grade + " Maka grade B")
}  else if (grade > 84 && grade <= 100) {
    alert("nilai = " + grade + " Maka grade A+")
} else {
    alert("Nama Tidak Valid!")
}
// Ini JavaScript
let Name = prompt('Selamat Datang Kak', '');
document.getElementById('Name').innerHTML = Name;

function submitForm() {
	// Ambil nilai dari setiap input
	var nama = document.getElementById('nama').value;
	var tanggal_lahir = document.getElementById('tanggal_lahir').value;
	var jenis_kelamin = document.querySelector(
		'input[name="jenis_kelamin"]:checked'
	).value;
	var pesan = document.getElementById('pesan').value;

	var waktuSekarang = new Date();
	var waktuSubmit = waktuSekarang.toLocaleString();
	// Buat format hasil submit

	var hasil = 'Waktu Submit: ' + waktuSubmit + '\n';
	hasil += 'Nama: ' + nama + '\n';
	hasil += 'Tanggal Lahir: ' + tanggal_lahir + '\n';
	hasil += 'Jenis Kelamin: ' + jenis_kelamin + '\n';
	hasil += 'Pesan: ' + pesan;

	// Tampilkan hasil ke dalam textarea

	document.getElementById('textareaA').value = hasil;
}

function validasiform() {
	const nama = document.forms['form-messageus']['nama'].value;
	const tanggal_lahir = document.forms['form-messageus']['tanggal_lahir'].value;
	const jenis_kelamin = document.forms['form-messageus']['jenis_kelamin'].value;
	const pesan = document.forms['form-messageus']['pesan'].value;

	if (nama == '' || tanggal_lahir == '' || jenis_kelamin == '' || pesan == '') {
		alert('Data Tidak Boleh Kosong YA !!');
		return false;
	}

	setSenderUI(nama, tanggal_lahir, jenis_kelamin, pesan);
	return false;
	
}

function scrollToSection(sectionId) {
	var section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
}

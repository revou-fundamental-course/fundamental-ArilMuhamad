// Ini JavaScript
let Name = prompt('Selamat Datang Kak', '');
document.getElementById('Name').innerHTML = Name;

function validasiForm() {
	const nama = document.getElementById('nama').value;
	const tanggalLahir = document.getElementById('tanggal_lahir').value;
	const jenisKelamin = document.querySelector(
		'input[name="jenis_kelamin"]:checked'
	);
	const pesan = document.getElementById('pesan').value;

	if (nama === '') {
		alert('Nama harus diisi !!');
		return false;
	}
	if (tanggalLahir === '') {
		alert('Tanggal lahir harus diisi !!');
		return false;
	}
	if (!jenisKelamin) {
		alert('Jenis kelamin harus dipilih !!');
		return false;
	}
	if (pesan === '') {
		alert('Pesan harus diisi !!');
		return false;
	}
	return true;
}

function submitForm() {
	if (validasiForm()) {
		const nama = document.getElementById('nama').value;
		const tanggalLahir = document.getElementById('tanggal_lahir').value;
		const jenisKelamin = document.querySelector(
			'input[name="jenis_kelamin"]:checked'
		).value;
		const pesan = document.getElementById('pesan').value;
		const waktuSubmit = new Date().toLocaleString('id-ID', {
			timeZone: 'Asia/Jakarta',
		});

		const output = `Waktu Submit: ${waktuSubmit}\nNama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}\n`;
		document.getElementById('textareaA').value = output;
	}
}

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName('mySlides');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = 'block';
	setTimeout(carousel, 5000); // Change image every 2 seconds
}

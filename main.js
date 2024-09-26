let nilai = [];
let jumlahNilai = 0;
let jumlahMataPelajaran = 0;

function mulaiInput() {
    jumlahMataPelajaran = parseInt(document.getElementById('jumlahPelajaran').value);
    if (jumlahMataPelajaran > 0) {
        let nilaiInputs = document.getElementById('nilaiInputs');
        nilaiInputs.innerHTML = '';
        for (let i = 0; i < jumlahMataPelajaran; i++) {
            nilaiInputs.innerHTML += `
                <label for="nilai${i}">Nilai Mata Pelajaran ${i + 1}:</label>
                <input type="number" id="nilai${i}" min="0" max="100" required>
            `;
        }
        document.getElementById('inputSection').style.display = 'none';
        document.getElementById('nilaiSection').style.display = 'block';
    } else {
        alert('Jumlah mata pelajaran harus lebih dari 0!');
    }
}

function hitungRataRata() {
    nilai = [];
    jumlahNilai = 0;
    for (let i = 0; i < jumlahMataPelajaran; i++) {
        let nilaiPelajaran = parseFloat(document.getElementById(`nilai${i}`).value);
        if (isNaN(nilaiPelajaran) || nilaiPelajaran < 0 || nilaiPelajaran > 100) {
            alert(`Nilai untuk mata pelajaran ke-${i + 1} tidak valid!`);
            return;
        }
        nilai.push(nilaiPelajaran);
        jumlahNilai += nilaiPelajaran;
    }
    const rataRata = jumlahNilai / jumlahMataPelajaran;
    document.getElementById('hasilRataRata').textContent = `Rata-rata nilai kamu: ${rataRata.toFixed(2)}`;
    document.getElementById('nilaiSection').style.display = 'none';
    document.getElementById('hasilSection').style.display = 'block';
}

function reset() {
    document.getElementById('jumlahPelajaran').value = '';
    document.getElementById('hasilSection').style.display = 'none';
    document.getElementById('inputSection').style.display = 'block';
    nilai = [];
    jumlahNilai = 0;
    jumlahMataPelajaran = 0;
}
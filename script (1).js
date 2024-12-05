function getMatriks() {
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);

    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    return {
        A: [[a11, a12], [a21, a22]],
        B: [[b11, b12], [b21, b22]]
    };
}

function tampilkanHasil(hasil) {
    document.getElementById("resultText").innerText = 
        `Hasil:\n[ ${hasil[0][0]} ${hasil[0][1]} ]\n[ ${hasil[1][0]} ${hasil[1][1]} ]`;
}

function tambahMatriks() {
    const { A, B } = getMatriks();
    let hasil = [
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ];
    tampilkanHasil(hasil);
}

function kurangMatriks() {
    const { A, B } = getMatriks();
    let hasil = [
        [A[0][0] - B[0][0], A[0][1] - B[0][1]],
        [A[1][0] - B[1][0], A[1][1] - B[1][1]]
    ];
    tampilkanHasil(hasil);
}

function kaliMatriks() {
    const { A, B } = getMatriks();
    let hasil = [
        [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
        [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
    ];
    tampilkanHasil(hasil);
}

function bagiMatriks() {
    const { A, B } = getMatriks();
    let detB = B[0][0] * B[1][1] - B[0][1] * B[1][0];
    if (detB === 0) {
        document.getElementById("resultText").innerText = "Matriks B tidak dapat dibagi karena determinannya 0!";
        return;
    }
    let inverseB = [
        [B[1][1] / detB, -B[0][1] / detB],
        [-B[1][0] / detB, B[0][0] / detB]
    ];
    let hasil = [
        [A[0][0] * inverseB[0][0] + A[0][1] * inverseB[1][0], A[0][0] * inverseB[0][1] + A[0][1] * inverseB[1][1]],
        [A[1][0] * inverseB[0][0] + A[1][1] * inverseB[1][0], A[1][0] * inverseB[0][1] + A[1][1] * inverseB[1][1]]
    ];
    tampilkanHasil(hasil);
}

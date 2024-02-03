// ==========================================================================================================
// // SPREAD OPERATOR
// // ===============================================================
// // MEMECAH ITERABLES MENJADI SINGLE ELEMENTS
// const mhs = ["dhea", "afani", "dody"];
// console.log(...mhs); // dhea afani dody
// console.log(...mhs[1]); // a f a n i

// // MENGGABUNGKAN 2 ARRAY
// const mhs = ["dhea", "afani", "dody"];
// const dosen = ["aji", "ade", "boby"];
// const orang = [...mhs, ...dosen];
// console.log(orang); // ["dhea", "afani", "dody", "aji", "ade", "boby"]

// // MENG-COPY ARRAY
// const mhs = ["dhea", "afani", "dody"];
// const mhs1 = [...mhs];
// mhs1[2] = "akhira";
// console.log(mhs); // ["dhea", "afani", "dody"]
// console.log(mhs1); // ["dhea", "afani", "akhira"]
// // ===============================================================

// // ===============================================================
// const liNama = document.querySelectorAll("li");
// const arr = [];
// for (let i = 0; i < liNama.length; i++) {
//   arr.push(liNama[i].innerHTML);
// }
// console.log(arr);

// const arr = [...liNama].map((nama) => nama.innerHTML);
// console.log(arr);
// // ===============================================================

// // ===============================================================
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
// // ===============================================================

// ==========================================================================================================

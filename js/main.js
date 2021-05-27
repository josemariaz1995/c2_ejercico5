const palindromo = "AÍbo,fobía";
const noPalindromo = "yoJose";
function esPalindromo(string) {
  let formateo = string;
  let formateoReverse;
  let formateoArray;
  let formateoReverseArray;
  let esPalindoromo = false;
  formateo = formateo.toLowerCase();
  formateo = formateo.replace(/[.,:;()_?¿!¡-\s]/g, "");
  formateo = formateo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  formateoArray = formateo.split("");
  formateoReverseArray = formateoArray.reverse();
  formateoReverse = formateoReverseArray.join("");
  console.log(formateoReverse);
  console.log(formateo);
  if (formateo === formateoReverse) {
    esPalindoromo = true;
    console.log(esPalindoromo);
  } else {
    console.log(esPalindoromo);
  }
}
esPalindromo(palindromo);
esPalindromo(noPalindromo);

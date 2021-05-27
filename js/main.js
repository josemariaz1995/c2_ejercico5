const palindromo = "AÍbo,fobía";
const noPalindromo = "yoJose";
function esPalindromo(string) {
  let formateo = string;
  let esPalindoromo = false;
  formateo = formateo.toLowerCase();
  formateo = formateo.replace(/[.,:;()_?¿!¡-\s]/g, "");
  formateo = formateo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const formateoArray = formateo.split("");
  const formateoReverseArray = formateoArray.reverse();
  const formateoReverse = formateoReverseArray.join("");
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

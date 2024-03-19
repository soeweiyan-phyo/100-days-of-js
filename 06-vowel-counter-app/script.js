const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
  const word = document.querySelector(".input-text").value;
  const sum = [...word].reduce(
    (sum, letter) => (sum += letter.match(/[a,e,i,o,u]/) ? 1 : 0),
    0
  );

  result.innerHTML = `${word.toUpperCase()} has ${sum} ${
    sum > 1 ? "vowels" : "vowel"
  }`;
}

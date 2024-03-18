const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  const len = word.length;

  const firstHalf = word.substring(0, Math.floor(len / 2));
  const secondHalf = word.substring(len - Math.floor(len / 2));

  const flippedSecondHalf = [...secondHalf].reverse().join("");

  if (firstHalf === flippedSecondHalf) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
}

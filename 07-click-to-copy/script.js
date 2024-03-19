const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.textContent = "Copied!!!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.disabled = false;
    }, 3000);
  });
};

btn.addEventListener("click", copyText);

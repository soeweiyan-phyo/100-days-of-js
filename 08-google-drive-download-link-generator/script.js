// VARIABLES
const gLink = document.querySelector(".glink");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateLinks);

function generateLinks(e) {
  e.preventDefault();

  // Check if link is valid
  const confirmLink = gLink.value.includes("https://drive.google.com/file/d");
  if (!confirmLink) return;

  // Generate direct download link
  const directDownloadLink = gLink.value
    .replace("file/d/", "uc?export=download&id=")
    .replace("/view?usp=sharing", "");

  const downloadLink = document.querySelector("#download-link");
  downloadLink.value = directDownloadLink;

  const copyLink = document.querySelector(".copy");
  copyLink.addEventListener("click", () => {
    copy(copyLink, directDownloadLink);
  });

  // Generate embed audio link
  const embedAudioLink = `<audio width="300px" height="32" controls="controls" src="${directDownloadLink}" type="audio/mp3"></audio>`;

  const embedAudio = document.querySelector("#embed-audio");
  embedAudio.value = embedAudioLink;

  const copyAudioLink = document.querySelector(".copy-audio");
  copyAudioLink.addEventListener("click", () => {
    copy(copyAudioLink, embedAudioLink);
  });

  // Generate embed video link
  const videoLink = gLink.value.replace("/view?usp=sharing", "");
  const embedVideoLink = `<iframe src="${videoLink}/preview" width="560" height="315"></iframe>`;

  const embedVideo = document.querySelector("#embed-video");
  embedVideo.value = embedVideoLink;

  const copyVideoLink = document.querySelector(".copy-video");
  copyVideoLink.addEventListener("click", () => {
    copy(copyVideoLink, embedVideoLink);
  });
}

function copy(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "Copied!!!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.disabled = false;
    }, 3000);
  });
}

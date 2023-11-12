
function countCharacters(text) {
  const characters = text.match(/[a-zA-Z0-9]/g);
  return characters ? characters.length : 0;
}
function validateForm() {
  const subject = document.getElementById("sbj").value;
  const message = document.getElementById("message").value;
  const subjectLength = countCharacters(subject);
  const messageLength = countCharacters(message);

  if (subjectLength < 5 || subjectLength > 20) {
    alert("subject harus lebih dari 5 dan kurang dari 20 karakter");
    return false;
  }

  if (messageLength < 20 || messageLength > 540) {
    alert("message harus lebih dari 20 dan kurang dari 540 karakter");
    return false;
  }

  window.location.href = "https://mail.google.com/mail/u/1/#inbox";

}


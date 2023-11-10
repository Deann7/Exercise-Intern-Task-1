
function countLetters(text) {
  const letters = text.match(/[a-z]/gi);
  return letters ? letters.length : 0;
}

function validateForm() {
  const subject = document.getElementById("sbj").value;
  const message = document.getElementById("message").value;
  const subjectLength = countLetters(subject);
  const messageLength = countLetters(message);

  if (subjectLength < 5 || subjectLength > 20) {
    alert("Subject must be between 5 and 20 characters.");
    return false;
  }

  if (messageLength < 20 || messageLength > 540) {
    alert("Message must be between 20 and 540 characters.");
    return false;
  }

  window.location.href = "https://mail.google.com/mail/u/1/#inbox";

}

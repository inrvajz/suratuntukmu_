const message = `I don’t even know if you’ll ever read this.\n\nTapi aku orangnya ga pandai mengungkapkan perasaan secra langsung. Ada banyak hal yang sebenr]arnya ingin aku sampaikan, tapi sering kali cuma bisa aku simpan sendiri.\n\naku gatau kamu menyadarinya atau ga, tapi aku pernah mengagumimu diam-diam.\n\n\naku cuma ingin menuliskan sesuatu yang selama ini ga pernah aku ucapkan.`
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

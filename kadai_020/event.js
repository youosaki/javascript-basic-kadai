const eventBtn = document.getElementById("btn");
const heading2 = document.getElementById("text");

eventBtn.addEventListener("click", () => {
    heading2.textContent="ボタンをクリックしました。";
})
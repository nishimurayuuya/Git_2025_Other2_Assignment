
const question = "日本で一番高い山はどれ？";
const choices = ["北岳", "富士山", "穂高岳", "谷川岳"];
const correctIndex = 1; 

document.getElementById("question").textContent = question;

const buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
  button.textContent = choices[index];
  button.onclick = () => {
    const result = document.getElementById("result");
    if (index === correctIndex) {
      result.textContent = "正解！おめでとうございます。";
    } else {
      result.textContent = "不正解… 正解は「富士山」です。";
    }
  };
});

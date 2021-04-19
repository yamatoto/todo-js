import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const span = document.createElement("span");
  span.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const div2 = document.createElement("div");
    div2.className = "list-row";
    const span2 = document.createElement("span");
    span2.innerText = inputText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget3 = backButton.parentNode.parentNode;
      document.getElementById("complete-ul").removeChild(deleteTarget3);
    });
    div2.appendChild(span2);
    div2.appendChild(backButton);

    const li2 = document.createElement("li");
    li2.appendChild(div2);
    document.getElementById("complete-ul").appendChild(li2);
    const deleteTarget2 = completeButton.parentNode.parentNode;
    document.getElementById("incomplete-ul").removeChild(deleteTarget2);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-ul").removeChild(deleteTarget);
  });

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplete-ul").appendChild(li);
};

document.getElementById("add-btn").addEventListener("click", () => {
  onClickAdd();
});

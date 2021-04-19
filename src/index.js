import "./styles.css";

const createSpan = (todoText) => {
  const span = document.createElement("span");
  span.innerText = todoText;
  return span;
};

const createBaseBtn = (text) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  return btn;
};

const createCompleteBtn = (todoText) => {
  const completeBtn = createBaseBtn("完了");
  completeBtn.addEventListener("click", () => {
    onClickCompleteBtn(todoText, completeBtn);
  });
  return completeBtn;
};

const onClickCompleteBtn = (todoText, completeButton) => {
  const span = createSpan(todoText);
  const backBtn = creteBackBtn(todoText);
  const li = createItem(span, backBtn);
  document.getElementById("complete-ul").appendChild(li);
  removeTodo("incomplete-ul", completeButton);
};

const removeTodo = (removeUlId, btn) => {
  const deleteTarget = btn.parentNode.parentNode;
  document.getElementById(removeUlId).removeChild(deleteTarget);
};

const onClickDeleteBtn = (deleteBtn) => {
  removeTodo("incomplete-ul", deleteBtn);
};

const creteDeleteBtn = () => {
  const deleteBtn = createBaseBtn("削除");
  deleteBtn.addEventListener("click", () => {
    onClickDeleteBtn(deleteBtn);
  });
  return deleteBtn;
};

const creteBackBtn = (todoText) => {
  const backBtn = createBaseBtn("戻す");
  backBtn.addEventListener("click", () => {
    onClickBackBtn(todoText, backBtn);
  });
  return backBtn;
};

const onClickBackBtn = (todoText, backBtn) => {
  addItemToInCompleteList(todoText);
  removeTodo("complete-ul", backBtn);
};

const createItem = (span, btn1, btn2 = null) => {
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(span);
  div.appendChild(btn1);
  if (btn2) div.appendChild(btn2);

  const li = document.createElement("li");
  li.appendChild(div);
  return li;
};

const addItemToInCompleteList = (todoText) => {
  const span = createSpan(todoText);
  const completeBtn = createCompleteBtn(todoText);
  const deleteBtn = creteDeleteBtn(todoText);
  const li = createItem(span, completeBtn, deleteBtn);
  document.getElementById("incomplete-ul").appendChild(li);
};

document.getElementById("add-text").addEventListener("input", (event) => {
  setAddBtnDisabled();
});

const setAddBtnDisabled = () => {
  const inputText = document.getElementById("add-text").value;
  if (inputText?.length === 0) {
    document.getElementById("add-btn").setAttribute("disabled", true);
  } else {
    document.getElementById("add-btn").removeAttribute("disabled");
  }
};

document.getElementById("add-btn").addEventListener("click", () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  setAddBtnDisabled();
  addItemToInCompleteList(inputText);
});

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    }
  });

  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-icon")) {
      deleteTask(event.target.parentElement);
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
          <span>${taskText}</span>
          <i class="fas fa-trash delete-icon"></i>
      `;
    taskList.appendChild(li);
  }

  function deleteTask(taskElement) {
    taskList.removeChild(taskElement);
  }
});

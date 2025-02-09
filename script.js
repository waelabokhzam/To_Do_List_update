let input = document.querySelector("input");

let up = document.querySelector(".fa-arrow-up-from-bracket");

let task = document.querySelector(".container");

// when click on up to create new task ;
up.addEventListener("click", (eo) => {

  if (input.value !== "") {
    task.innerHTML += `<div class="box">
            <i class="fa-regular fa-star"></i>
            <p lang="ar"> ${input.value}</p>
            <div class="right">
              <i class="fa-regular fa-face-angry"></i>
              <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>`;
  }
  else {
    Swal.fire({
      title: 'Task Is Not Shoud Be Empty!',
      text: 'please enter a task agin.',
      timer: 4000,
      icon: 'warning',
      timerProgressBar: true
    });
  }
  input.value = "";
});

// when click on (trash-star-angry) to (delete-favorite-overline) a task ;
task.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "fa-regular fa-star":
      task.prepend(eo.target.parentElement);
      eo.target.parentElement.classList.toggle("active") 
      break;

    case "fa-regular fa-trash-can":
      eo.target.parentNode.parentElement.remove();
      break;
    case "fa-regular fa-face-angry":
      eo.target.parentElement.parentElement.classList.toggle("overline");
      break;
    default:
      break;
  }
})
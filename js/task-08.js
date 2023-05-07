const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitButton);

function onSubmitButton(event) {
  event.preventDefault();
  const newUser = {};
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email !== "" && password !== "") {
    newUser.email = email;
    newUser.password = password;
    console.log(newUser);
    form.reset();
  } else {
    alert("Ви ще не заповнили всі поля!");
  };

};

// const formData = new FormData(event.currentTarget);
//     console.log(formData);

//     formData.forEach((value, name) => {
//       newUser[name] = value;
//     });

//     console.log(newUser);

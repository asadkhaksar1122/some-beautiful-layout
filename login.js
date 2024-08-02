let icon = document.getElementsByClassName("icon")[0];
let password = document.getElementById("password");
icon.addEventListener("click", function () {
  if (password.type == "password") {
    password.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    password.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
});
let profile = document.getElementById("profile")
let profileimage = document.getElementById("profileimage")
console.log(profileimage)
profile.addEventListener("change",function () {
    if (profile.files.length) {
        let file = profile.files[0];
        console.log(file)
        profileimage.src = URL.createObjectURL(file);
    } else {
        profileimage.src=""
    }
})
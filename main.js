const f = document.getElementById("newsletterForm");

f.addEventListener("submit", (e) => {
  e.preventDefault();

  let n = userName.value.trim();
  let em = userEmail.value.trim();

  if (!n || !em.includes("@")) return alert("Enter valid details");
  alert("Subscribed!");
  f.reset();
});
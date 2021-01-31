document.addEventListener("DOMContentLoaded", () => {
   console.log("document loaded");

   // OPEN/CLOSE FORM
   document.querySelector("#log-in-button").addEventListener("click", () => {
      document.querySelector(".form-container").classList.remove("display");
   });
   document.querySelector("#close-form").addEventListener("click", () => {
      document.querySelector(".form-container").classList.add("display");
   });

   // PROCESSING FORM SUBMISSIONS
   document
      .querySelector("#contact-form")
      .addEventListener("submit", async (eventToListenTo) => {
         eventToListenTo.preventDefault();
         // Create an object to receive form's data
         const data = {
            firstname: document.querySelector("#firstname").value,
            lastname: document.querySelector("#lastname").value,
            email: document.querySelector("#email").value,
            subject: document.querySelector("#subject").value,
            message: document.querySelector("#message").value,
         };
         console.log("this is the data object: ", data);
         // HTTP POST request to send the data to the backend
         const response = await axios.post(
            "https://tripadvisor-clone-back.herokuapp.com/",
            data
         );
         console.log("this is the response from axios: ", response);
      });
});

const h1 = document.querySelector("#fact");
const button = document.querySelector(".catfact");

const getCatFact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    h1.innerText = response.data.fact;
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
};

button.addEventListener("click", getCatFact);

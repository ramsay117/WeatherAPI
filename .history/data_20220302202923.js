let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

const tbody = document.querySelector("tbody");
const countries = document.querySelectorAll("li");
countries[0].addEventListener("click", () => {
  const newurl = url + "London";
  getData(newurl, "London");
});
countries[1].addEventListener("click", () => {
  const newurl = url + "New York";
  getData(newurl, "New York");
});
countries[2].addEventListener("click", () => {
  const newurl = url + "Las Vegas";
  getData(newurl, "Las Vegas");
});
countries[3].addEventListener("click", () => {
  const newurl = url + "Los Angeles";
  getData(newurl, "Los Angeles");
});

const getData = (newurl, country) => {
  fetch(newurl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tbody.innerHTML += (
        `<tr>
          <td>${country}</td>
          <td>${data.description}</td>
          <td>${data.temp_in_celsius}</td>
          <td>${data.pressure_in_hPa}</td>
          <td>${data.humidity_in_percent}</td>
          <td id=${country}>Delete</td>
        </tr>`
      );
    });
};

const delrows = document.querySelectorAll("#London");
const delrows = document.querySelectorAll("#London");
const delrows = document.querySelectorAll("#Las Vegas");
const delrows = document.querySelectorAll("#Los Angeles");
const delfun = () => {

}

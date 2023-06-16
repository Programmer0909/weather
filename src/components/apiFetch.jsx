
const getData = async function (city) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=e8f064c3b8a78085a12b329aec9faeb3&units=metric";
    var data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
    return data;
    // console.log(data);
};

export default getData;
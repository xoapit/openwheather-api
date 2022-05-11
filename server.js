const express = require("express");
const app = express();
const axios = require("axios");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const HTTP_PORT = 8000;
const API_KEY = "df5838796101bde17b640cbad3d77a7b";

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/api/weather/danang", async (req, res, next) => {
  const params = {
    lat: "16.10099252477368",
    lon: "108.22856121256758",
    appid: API_KEY,
    lang: "vi",
    units: "metric",
  };

  // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=16.10099252477368&lon=108.22856121256758&appid=${API_KEY}&lang=vi&units=metric`);
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    { params }
  );

  console.log(response.data);

  return res.json({
    message: "success",
    data: response.data,
  });
});


app.post("/api/weather/city", async (req, res, next) => {
    const params = {
      q: req.body.city,
      appid: API_KEY,
      lang: "vi",
      units: "metric",
    };
    
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=16.10099252477368&lon=108.22856121256758&appid=${API_KEY}&lang=vi&units=metric`);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      { params }
    );
  
    console.log(response.data);
  
    return res.json({
      message: "success",
      data: response.data,
    });
  });

app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

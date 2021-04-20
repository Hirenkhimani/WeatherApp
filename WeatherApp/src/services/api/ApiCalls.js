export const Api_key = '1fced79ff59ad59ca51510d00e6192c2';

let baseURL = 'http://api.openweathermap.org/data/2.5/';

export const getForcastCity = (lat, long) => {
  try {
    var url = `find?lat=${lat}&lon=${long}&cnt=50&appid=${Api_key}`
    return fetch(baseURL + url).then((res) => res.json())
  } catch (err) {
    console.log(err)
  }
};
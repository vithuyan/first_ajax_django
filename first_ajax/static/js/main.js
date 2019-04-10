document.addEventListener("DOMContentLoaded", function() {
  const getDataBtn = document.getElementById("data_button");
     console.log('Get more data', getDataBtn);


 getDataBtn.addEventListener('click', function() {
    console.log("Button Click ")
      const request = axios.get('http://intro-ajax-api.herokuapp.com/')
});

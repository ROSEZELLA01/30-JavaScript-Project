
function updateTime(){
  let newDate = new Date();
  console.log(newDate);
  const hour = newDate.getHours();
  const hours = String(hour).padStart(2, 0);
  const minutes = String(newDate.getMinutes()).padStart(2, 0);
  const seconds = String(newDate.getSeconds()).padStart(2, 0);
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");
  date.textContent = `${newDate.getDate()}/${
    newDate.getMonth()
  }/${newDate.getFullYear()}`;
  const time = document.createElement("h1");
  time.textContent = `${hours}:${minutes}:${seconds}`;
  clock.appendChild(time);
  const prefix = document.createElement("p")
  clock.appendChild(prefix);
    if(hour<12){
       prefix.textContent = "AM";
   }else{
       prefix.textContent = "PM";
   }

}

setInterval(function(){
  document.getElementById("clock").innerHTML = "";
  updateTime();
}, 1000);


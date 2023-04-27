const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  let tempDate = new Date();   // tempDate tempYear tempMonth tempDay always check current time 
  let tempYear = tempDate.getFullYear(); 
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


 // let futureDate = new Date(2023,4,7,11,30,0);//it gives us a index number day and month thats why we use braces
  
  const Year = futureDate.getFullYear();  //2020
  const hour = futureDate.getHours() //11
  const Min = futureDate.getMinutes()//30
  const Month = futureDate.getMonth() 
  const date = futureDate.getDate();//22

  let month = months[Month];
  
  const weekday = weekdays[futureDate.getDay()]; //it gives index number thats why we take this in 	parenthesis  


  giveaway.textContent = `givesaway  ends on  ${weekday}, ${date}  ${month}  ${Year} ${hour}:${Min}  `;


  // future time in ms
  const futureTime = futureDate.getTime();

  function getRemaningTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms(miliseconds)
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //set values array;
    const values = [days,hours,minutes,seconds]

     function format(item){
      if(item<10){
        return (item = `0${item}`);
      }
      return item; //if item is bigger than 10 return item only 
    }

    items.forEach(function(item,index){
      item.innerHTML = format(values[index]) 
    })
    if(t<0){
      clearInterval(countdown)
      deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has been expired </h4>`
    }
  }

  let countdown = setInterval(getRemaningTime,1000)

  getRemaningTime();
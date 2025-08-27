let totalHeart = parseInt(document.getElementById("heart-value").innerText);
let totalCoin = parseInt(document.getElementById("coin-value").innerText);
let totalCopy = parseInt(document.getElementById("copy-value").innerText);

// ****** All Function******

function showCopy(num)
{
 navigator.clipboard.writeText(
      document.getElementById(num).innerText
    )
  alert("Copied successfully")
  let updatedCopy = ++totalCopy;
  document.getElementById("copy-value").innerText = updatedCopy;
  

}

function showCall(txt, num)
{
  
  if (totalCoin >= 20)
  {
    alert("📞 Calling " + txt + " " + num + " ...");
    totalCoin = totalCoin - 20;
    document.getElementById("coin-value").innerText = totalCoin;

    let time = new Date();

    document.getElementById("call-history").innerHTML += `
  <div class="bg-gray-200 rounded-lg p-4 px-8 mt-2">
    <h1 class="font-semibold text-lg">${txt}</h1>
    <div class="flex justify-between items-center">
      <p class="hind-font text-[#5C5C5C] text-lg">${num}</p>
      <p class="hind-font text-[#5C5C5C] text-lg">${time.toLocaleTimeString()}</p>
    </div>
  </div>
`;
  }

  else {
    alert("Not Enough Coin!!! You need at least 20 coin to Call")
  }
  
}

function showHeart()
{
  ++totalHeart;

    document.getElementById("heart-value").innerText = totalHeart;
}

//******All Event Listener for copy*******/
document.getElementById("national-copy-btn")
  .addEventListener('click', function ()
  {

    showCopy("national-num");
})

document.getElementById("police-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("police-num");
})

document.getElementById("fire-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("fire-num");
})

document.getElementById("ambulance-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("ambulance-num");
})

document.getElementById("women-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("women-num");
})

document.getElementById("anti-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("anti-num");
})

document.getElementById("electricity-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("electricity-num");
})

document.getElementById("brac-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("brac-num");
})

document.getElementById("railway-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy("railway-num");
  })

  //event listener for call
document.getElementById("national-call-btn")
  .addEventListener('click', function ()
  {
    const nationalText = document.getElementById("national-txt").innerText;
    const nationalNum = document.getElementById("national-num").innerText;

    showCall(nationalText, nationalNum);
})

document.getElementById("police-call-btn")
  .addEventListener('click', function ()
  {
    const policeText = document.getElementById("police-txt").innerText;
    const policeNum = document.getElementById("police-num").innerText;

    showCall(policeText, policeNum);
})

document.getElementById("fire-call-btn")
  .addEventListener('click', function () {
    const fireText = document.getElementById("fire-txt").innerText;
    const fireNum = document.getElementById("fire-num").innerText;

    showCall(fireText, fireNum);
});

document.getElementById("ambulance-call-btn")
  .addEventListener('click', function () {
    const ambulanceText = document.getElementById("ambulance-txt").innerText;
    const ambulanceNum = document.getElementById("ambulance-num").innerText;

    showCall(ambulanceText, ambulanceNum);
});

document.getElementById("women-call-btn")
  .addEventListener('click', function () {
    const womenText = document.getElementById("women-txt").innerText;
    const womenNum = document.getElementById("women-num").innerText;

    showCall(womenText, womenNum);
});

document.getElementById("anti-call-btn")
  .addEventListener('click', function () {
    const antiText = document.getElementById("anti-txt").innerText;
    const antiNum = document.getElementById("anti-num").innerText;

    showCall(antiText, antiNum);
});

document.getElementById("electricity-call-btn")
  .addEventListener('click', function () {
    const electricityText = document.getElementById("electricity-txt").innerText;
    const electricityNum = document.getElementById("electricity-num").innerText;

    showCall(electricityText, electricityNum);
});

document.getElementById("brac-call-btn")
  .addEventListener('click', function () {
    const bracText = document.getElementById("brac-txt").innerText;
    const bracNum = document.getElementById("brac-num").innerText;

    showCall(bracText, bracNum);
});

document.getElementById("railway-call-btn")
  .addEventListener('click', function () {
    const railwayText = document.getElementById("railway-txt").innerText;
    const railwayNum = document.getElementById("railway-num").innerText;

    showCall(railwayText, railwayNum);
});
  
// Heart event listener

document.getElementById("national-heart")
  .addEventListener('click', function ()
  {
    showHeart();
  
  })

  document.getElementById("police-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("fire-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("abmulance-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("women-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("anti-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("electricity-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("brac-heart")
  .addEventListener('click', function () {
    showHeart();
});

document.getElementById("railway-heart")
  .addEventListener('click', function () {
    showHeart();
});

//  *****Clear buton****

document.getElementById("clear-btn")
  .addEventListener('click', function () {
    document.getElementById("call-history").innerText = "";
});
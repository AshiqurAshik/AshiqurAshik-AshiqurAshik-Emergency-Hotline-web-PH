let totalHeart = parseInt(document.getElementById("heart-value").innerText);
let totalCoin = parseInt(document.getElementById("coin-value").innerText);
let totalCopy = parseInt(document.getElementById("copy-value").innerText);

// ****** All Function******

function showCopy(id)
{
  let updatedCopy = ++totalCopy;
    document.getElementById("copy-value").innerText = updatedCopy;
}

//******All Event Listener *******/
document.getElementById("national-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("police-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("fire-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("ambulance-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("women-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("anti-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("electricity-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("brac-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})

document.getElementById("railway-copy-btn")
  .addEventListener('click', function ()
  {
    showCopy();
})


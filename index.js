//Home Buttons
 
let homeStoreEl = document.getElementById("home-points")
let homeScoreBtn1 = document.getElementById("btn-1")
 
let homeScoreBtn2 = document.getElementById("btn-2")
 
let homeScoreBtn3 = document.getElementById("btn-3")
 
let homeScore = 0
 
function increaseHomeScoreOne(){
   homeScore += 1
   homeStoreEl.textContent = homeScore
}
 
function increaseHomeScoreTwo(){
   homeScore += 2
   homeStoreEl.textContent = homeScore
}
 
function increaseHomeScoreThree(){
   homeScore += 3
   homeStoreEl.textContent = homeScore
}
 
// Guest Buttons
 
let guestStoreEl = document.getElementById("guest-points")
let guestScoreBtn1 = document.getElementById("btns-1")
 
let guestScoreBtn2 = document.getElementById("btn-2")
 
guestScore = 0
 
function increaseGuestScoreOne() {
   guestScore += 1
   guestStoreEl.textContent = guestScore
}
 
function increaseGuestScoreTwo() {
   guestScore += 2
   guestStoreEl.textContent = guestScore
}
 
function increaseGuestScoreThree() {
   guestScore += 3
   guestStoreEl.textContent = guestScore
}
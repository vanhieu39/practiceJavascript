function makeRedColor() {
    document.getElementById('content').style.color = "red"
}
function makeBlueColor() {
    document.getElementById('content').style.color = "blue"
}
function makeOrangeColor() {
    document.getElementById('content').style.color = "orange"
}
function resetText() {
    document.getElementById('content').style.color = "black"
    document.getElementById('content').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint quo nihil amet pariatur eveniet totam a quos,
    repellat, non commodi ? Sapiente mollitia eligendi, at quisquam aliquam repellendus a animi.`
}
function changeText() {
    document.getElementById('content').innerHTML = "Chao Hieu"
}
function showMessage() {
    let message = document.getElementById('name').value;
    let city = document.getElementById('city').value
    let gender = document.querySelector('.gender:checked').value
    console.log(gender)
    document.getElementById('result').innerHTML = `
    hello:${message} <br>
    thành phố bạn: ${city} <br>
    giới tính của bạn là: ${gender}
    `

}
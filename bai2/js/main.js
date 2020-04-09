function changImage(id) {
    let imagePath = document.getElementById(id).getAttribute("src")
    document.getElementById('image-main').setAttribute('src', imagePath)
}
var img = "https://cf.shopee.vn/file/aaa833e58f19353a45cbf88bdea7f615_tn"

var image = document.querySelector(".image")

image.setAttribute("src", img)
image.setAttribute("alt", "chao bui van hieu")
image.setAttribute("width", 300)

var el = document.querySelectorAll('[data-title]');
el = Array.from(el)

var temp = ""
for (var index = 0; index < el.length; index++) {
    // console.log(el[index].getAttribute("data-title"))
    temp += el[index].getAttribute("data-title") + " "
}
document.getElementById("demo").setAttribute("data-title", temp.trim())
console.log(temp.trim())
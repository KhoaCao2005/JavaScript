function upDate(element) {
    let holder = document.getElementById("holder");
    holder.style.backgroundImage = `url(${element.src})`;
    holder.style.backgroundSize = "cover";
    holder.style.backgroundPosition = "center";
    holder.innerHTML = ""; // Xóa chữ
}

function unDo() {
    let holder = document.getElementById("holder");
    holder.style.backgroundImage = "none";
    holder.innerHTML = "Hover over an image below"; // Hiện lại chữ
}

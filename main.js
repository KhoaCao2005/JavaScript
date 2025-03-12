document.addEventListener("DOMContentLoaded", function () {
    addTabFocus(); // Call function to add tabindex dynamically
});

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

function addTabFocus() {
    let images = document.querySelectorAll(".thumb");
    let index = 0; // Start from the first image

    document.addEventListener("keydown", function (event) {
        if (event.key === "Tab") {
            event.preventDefault(); // Prevent default tab behavior
            
            if (index < images.length) {
                for (let i = 0; i < images.length; i++) {
                    if (i === index) {
                        upDate(images[i]); // Show the image at the current index
                        console.log("Tab pressed: Showing " + images[i].alt);
                        break; // Exit loop after updating the image
                    }
                }
                index++; // Move to the next image
            } else {
                unDo(); // Reset to the holder text when all images are shown
                console.log("Tab pressed: Reset to holder");
                index = 0; // Reset index to cycle again
            }
        }
    });
}
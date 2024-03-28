function toggleMenu() {
    var menu = document.getElementById("menu");
    var button = document.getElementById("button");

    if (menu.style.display === "none") {
        menu.style.display = "block";
        button.style.display = "none"; // Hide the button
    } else {
        menu.style.display = "none";
        button.style.display = "block"; // Show the button again
    }
}

console.log("Script running...");

document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.remove("sidebarGo");
    document.querySelector(".sidebar").style.transition = "all 0.3s";

    // If localStorage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Save the state of the sidebar as "opened"
        localStorage.setItem("sidebarStatus", "opened");

        document.querySelector(".ham").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
        }, 300);
    }
});

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.add("sidebarGo");
    document.querySelector(".sidebar").style.transition = "all 0.3s";

    // If localStorage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Save the state of the sidebar as "closed"
        localStorage.setItem("sidebarStatus", "closed");
        document.querySelector(".cross").style.display = "none";
        setTimeout(() => {
            document.querySelector(".ham").style.display = "inline";
        }, 300);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // If localStorage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // If we need to open the bar
        if (localStorage.getItem("sidebarStatus") == "opened" || "") {
            // Open the bar
            document.querySelector(".sidebar").classList.remove("sidebarGo");
            document.querySelector(".sidebar").style.transition = "none";
            setTimeout(() => {
                document.querySelector(".cross").style.display = "inline";
            }, 300);
            document.querySelector(".ham").style.display = "none";
        } else {
            // Close the bar
            document.querySelector(".sidebar").classList.add("sidebarGo");
            document.querySelector(".sidebar").style.transition = "none";
            setTimeout(() => {
                document.querySelector(".ham").style.display = "inline";
            }, 300);
            document.querySelector(".cross").style.display = "none";
        }
    }
});

// Call this function when the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript");
    document.querySelector(".skillBarHTML").style.width = "75%";
    document.querySelector(".skillBarCSS").style.width = "50%";
    document.querySelector(".skillBarJavaScript").style.width = "25%";
    document.querySelector(".skillBarBootstrap").style.width = "50%";
    document.querySelector(".skillBarGithub").style.width = "60%";

    // Code to increase the percentage of skillbar gradually
    let i1 = 0;
    let j1 = 0;
    setInterval(() => {
        for (; i1 < j1; i1++) {
            // Code to increase the percentage the html skillbar gradually
            if (i1 <= 75) {
                document.querySelector(".htmlPercent").innerText = i1 + "%";
            }
            // Code to increase the percentage the css skillbar gradually
            if (i1 <= 50) {
                document.querySelector(".cssPercent").innerText = i1 + "%";
            }

            // Code to increase the percentage the js skillbar gradually
            if (i1 <= 25) {
                document.querySelector(".jsPercent").innerText = i1 + "%";
            }

            // Code to increase the percentage the bootstrap skillbar gradually
            if (i1 <= 50) {
                document.querySelector(".bsPercent").innerText = i1 + "%";
            }

            // Code to increase the percentage the github skillbar gradually
            if (i1 <= 60) {
                document.querySelector(".githubPercent").innerText = i1 + "%";
            }
        }
        if (j1 <= 100) {
            j1++;
        }
    }, 10);
});

// Code for Blog Page

// Code for first blog Item
let blogItemBtn1ReadMore = true;
document.querySelector(".blogItemBtn1").addEventListener("click", () => {
    if (blogItemBtn1ReadMore === true) {
        document.querySelector(".blogItemBottom1").style.display = "block";
        document.querySelector(".blogItemBtn1").innerText = "Read Less";
        blogItemBtn1ReadMore = false;
    } else {
        document.querySelector(".blogItemBottom1").style.display = "none";
        document.querySelector(".blogItemBtn1").innerText = "Read More...";
        blogItemBtn1ReadMore = true;
    }
});

// Code for second blog Item
let blogItemBtn2ReadMore = true;
document.querySelector(".blogItemBtn2").addEventListener("click", () => {
    if (blogItemBtn2ReadMore === true) {
        document.querySelector(".blogItemBottom2").style.display = "block";
        document.querySelector(".blogItemBtn2").innerText = "Read Less";
        blogItemBtn2ReadMore = false;
    } else {
        document.querySelector(".blogItemBottom2").style.display = "none";
        document.querySelector(".blogItemBtn2").innerText = "Read More...";
        blogItemBtn2ReadMore = true;
    }
});

// Code for third blog Item
let blogItemBtn3ReadMore = true;
document.querySelector(".blogItemBtn3").addEventListener("click", () => {
    if (blogItemBtn3ReadMore === true) {
        document.querySelector(".blogItemBottom3").style.display = "block";
        document.querySelector(".blogItemBtn3").innerText = "Read Less";
        blogItemBtn3ReadMore = false;
    } else {
        document.querySelector(".blogItemBottom3").style.display = "none";
        document.querySelector(".blogItemBtn3").innerText = "Read More...";
        blogItemBtn3ReadMore = true;
    }
});

// Code for fourth blog Item
let blogItemBtn4ReadMore = true;
document.querySelector(".blogItemBtn4").addEventListener("click", () => {
    if (blogItemBtn4ReadMore === true) {
        document.querySelector(".blogItemBottom4").style.display = "block";
        document.querySelector(".blogItemBtn4").innerText = "Read Less";
        blogItemBtn4ReadMore = false;
    } else {
        document.querySelector(".blogItemBottom4").style.display = "none";
        document.querySelector(".blogItemBtn4").innerText = "Read More...";
        blogItemBtn4ReadMore = true;
    }
});

// Code for fifth blog Item
let blogItemBtn5ReadMore = true;
document.querySelector(".blogItemBtn5").addEventListener("click", () => {
    if (blogItemBtn5ReadMore === true) {
        document.querySelector(".blogItemBottom5").style.display = "block";
        document.querySelector(".blogItemBtn5").innerText = "Read Less";
        blogItemBtn5ReadMore = false;
    } else {
        document.querySelector(".blogItemBottom5").style.display = "none";
        document.querySelector(".blogItemBtn5").innerText = "Read More...";
        blogItemBtn5ReadMore = true;
    }
});


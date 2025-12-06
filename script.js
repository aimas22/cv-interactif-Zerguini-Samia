function showSection(id) {
        let sections = document.getElementsByClassName("fade-section");
        for (let s of sections) {
            s.style.display = "none";
        }
        let home = document.getElementById("home");
        if (id === "home") {
            home.style.display = "block";
        } else {
            home.style.display = "none";
            document.getElementById(id).style.display = "block";
        }
    }

    // Default section
    showSection("home");
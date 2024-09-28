/* ---- particles.js config ---- */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 200, // Increased for a fuller background
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ["#39FF14", "#00BFFF", "#FFD700", "#FF6F61", "#FF69B4"], // Bright and varied colors
        },
        shape: {
            type: ["circle", "triangle", "edge", "polygon"], // Diverse shapes
            stroke: {
                width: 0,
                color: "#fff",
            },
            polygon: {
                nb_sides: 6, // Hexagons for visual interest
            },
        },
        opacity: {
            value: 0.7, // Higher opacity for clarity
            random: true,
            anim: {
                enable: true,
                speed: 3,
                opacity_min: 0.2,
                sync: false,
            },
        },
        size: {
            value: 8, // Consistent size for all particles
            random: true,
            anim: {
                enable: true,
                speed: 15,
                size_min: 4,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#d3d3d3", // Glowish grey-white connecting lines
            opacity: 0.6,
            width: 1.5,
            shadow: {
                enable: true,
                blur: 5,
                color: "#d3d3d3" // Glowing grey-white effect
            },
            animation: {
                enable: true,
                speed: 3,
                sync: true
            }
        }
,
        move: {
            enable: true,
            speed: 4, // Moderate speed for smooth motion
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble", // Bubble effect on hover
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 300,
                duration: 2,
                size: 25, // Larger bubble size for more impact
                opacity: 0.8,
                sync: false,
            },
            push: {
                particles_nb: 5, // Increased number of particles pushed
            },
            repulse: {
                distance: 100, // Repulsion effect on hover
                duration: 1,
            },
        },
    },
    retina_detect: true,
});

// Text animation for portfolio intro
const allElements = document.querySelectorAll(".animated-text");

if (allElements.length > 0) {
    allElements.forEach((element) => {
        const txtElement = element,
            wordsList = txtElement.getAttribute("data-words"),
            words = wordsList.split(", ");

        let wordsCount = 0;

        entry();

        function entry() {
            if (wordsCount < words.length) {
                let word = words[wordsCount],
                    txtArr = word.split(""),
                    count = 0;

                txtElement.textContent = "";

                txtArr.forEach((letter) => {
                    let _letter = letter === " " ? "&nbsp;" : letter;
                    txtElement.innerHTML += `<span class="space-letter">${_letter}</span>`;
                });

                let spans = txtElement.childNodes;
                const letterInterval = setInterval(activeLetter, 70);

                function activeLetter() {
                    spans[count].classList.add("active");
                    spans[count].style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    count++;

                    if (count === spans.length) {
                        clearInterval(letterInterval);
                        setTimeout(() => {
                            eraseText();
                        }, 600);
                    }
                }

                function eraseText() {
                    let removeInterval = setInterval(removeLetter, 40);
                    count--;

                    function removeLetter() {
                        spans[count].classList.remove("active");
                        count--;

                        if (count === -1) {
                            clearInterval(removeInterval);
                            wordsCount++;
                            entry();
                        }
                    }
                }
            } else {
                wordsCount = 0;
                entry();
            }
        }
    });
}

const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    attacked: function () {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
        }

        renderCharacter();
    },

    levelUp: function () {
        this.level++;
        renderCharacter();
    }
};

function renderCharacter() {
    document.querySelector("#characterName").textContent =
        character.name;

    document.querySelector("#characterClass").textContent =
        `Class: ${character.class}`;

    document.querySelector("#characterLevel").textContent =
        `Level: ${character.level}`;

    document.querySelector("#characterHealth").textContent =
        `Health: ${character.health}`;

    
}

document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
    character.levelUp();
});

renderCharacter();
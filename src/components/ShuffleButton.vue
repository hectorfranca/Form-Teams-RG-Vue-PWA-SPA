<template>
  <div class="shuffle-container">
      <button v-on:click="loadTeams()" class="shuffle-button" type="button"></button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: "ShuffleButton",
    data() {
        return {
            teams: [
                { players: [] },
                { players: [] },
                { players: [] }
            ],
            formedTeams: [
                { formed: false },
                { formed: false },
                { formed: false }
            ]
        }
    },
    methods: {
        loadTeams() {
            const inputList = document.getElementById("list");
         
            if (inputList.value != "") {
                this.addLoadingBackground();
                setTimeout(this.setTeams, 2000);
            }
        },
        addLoadingBackground() {
            const loading = document.querySelector(".loading-container");
            const header = document.querySelector("header");
            const errorList = document.querySelector(".error-container");
            const list = document.querySelector("form");
            const teams = document.querySelector(".teams-container");
            const shuffleButton = document.querySelector(".shuffle-container");

            loading.classList.remove("--hidden");
            header.classList.add("--loading-background");
            list.classList.add("--loading-background");
            errorList.classList.add("--loading-background");
            teams.classList.add("--loading-background");
            shuffleButton.classList.add("--loading-background");
            document.body.classList.add("--overflow-hidden");
        },
        removeLoadingBackground() {
            const loading = document.querySelector(".loading-container");
            const header = document.querySelector("header");
            const errorList = document.querySelector(".error-container");
            const list = document.querySelector("form");
            const teams = document.querySelector(".teams-container");
            const shuffleButton = document.querySelector(".shuffle-container");

            loading.classList.add("--hidden");
            header.classList.remove("--loading-background");
            list.classList.remove("--loading-background");
            errorList.classList.remove("--loading-background");
            teams.classList.remove("--loading-background");
            shuffleButton.classList.remove("--loading-background");
            document.body.classList.remove("--overflow-hidden");
        },
        setTeams() {
            const inputList = document.getElementById("list");
            const maxPlayers = 21;
            let lines = inputList.value.split('\n');
            
            // Replace unnecessary data
            lines = lines.map(element => {
                return element.replace(/^\D.+|[0-9]+.\s|[0-9]\s.\s|[0-9]\s\.|[0-9]\s-|[0-9]+.|-.+|\(.+/gm, "");
            });

            // Remove empty elements
            lines = lines.filter(element => element != "");

            // Remove alternates
            let remain = 0;
            for (let c = 0; c < lines.length; c++) {
                if (c >= maxPlayers) {
                    remain++;
                }
            }
            lines.splice(maxPlayers, remain);

            // Shuffle list
            this.shuffleList(lines);

            // Reset teams
            this.teams.forEach(element => {
                element.players = [];
            })

            // Reset formed teams
            this.formedTeams.forEach(element => {
                element.formed = false;
            })

            // Separate the teams
            this.separateTheTeams(lines);

            // Update formed teams
            for (let c = 0; c < this.teams.length; c++) {
                if (this.teams[c].players.length > 0) {
                    this.formedTeams[c].formed = true;
                }
            }

            // Check error list
            const errorList = document.querySelector(".error-list");
            if (this.formedTeams[0].formed == false) {
                errorList.classList.remove("--hidden");
            } else {
                errorList.classList.add("--hidden");
            }

            // Send to eventBus
            eventBus.$emit("click", this.teams, this.formedTeams);

            // Hidden loading
            this.removeLoadingBackground();
        },
        shuffleList(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
        },
        separateTheTeams(lines) {
            let playerPerTeam;

            if (lines.length > 12 && lines.length <= 14 || lines.length > 18) {
                playerPerTeam = 7;
            } else {
                playerPerTeam = 6;
            }

            for(let c = 0; c < lines.length; c++) {
                if (c < playerPerTeam) {
                    this.teams[0].players.push(lines[c]);
                } else if (c >= playerPerTeam && c < (playerPerTeam * 2)) {
                    this.teams[1].players.push(lines[c]);
                } else {
                    this.teams[2].players.push(lines[c]);
                }
            }
        }
    }
}
</script>

<style>
    .shuffle-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }
    .shuffle-button {
        width: 60px;
        height: 60px;
        background-color: transparent;
        background-image: url("../img/dice.png");
        background-size: 150%;
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 50px;
        transition: 150ms linear;
    }
    .shuffle-button:active {
        filter: opacity(60%);
    }
    @media only screen and (min-width: 600px) {
        .shuffle-button {
            width: 70px;
            background-size: 140%;
        }
    }
    @media only screen and (min-width: 768px) {
        .shuffle-button:hover {
            filter: opacity(60%);
        }
    }
</style>

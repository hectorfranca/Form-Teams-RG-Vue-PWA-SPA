<template>
    <div v-bind:class="{ '--hidden': !formedTeams[0].formed }" class="teams-container">
        <button v-on:click="goToNewList()" class="teams__new-list-button" type="button">Nova Lista</button>
        <div class="teams">
            <div class="teams__team1">
                <img class="team1__logo" src="../img/fenix_logo.png" alt="team1_logo.png">
                <table v-for="(value, index, key) in teams[0].players" v-bind:key="key">
                    <tr>
                        <td class="team1__player-number">{{ index + 1 }}</td>
                        <td class="team1__player-name">{{ value }}</td>
                    </tr>
                </table>
            </div>
            <div v-if="formedTeams[1].formed" class="teams__team2">
                <img class="team2__logo" src="../img/tiger_logo.png" alt="team2_logo.png">
                <table v-for="(value, index, key) in teams[1].players" v-bind:key="key">
                    <tr>
                        <td class="team2__player-number">{{ index + 1 }}</td>
                        <td class="team2__player-name">{{ value }}</td>
                    </tr>
                </table>
            </div>
            <div v-if="formedTeams[2].formed" class="teams__team3">
                <img class="team3__logo" src="../img/bear_logo.png" alt="team3_logo.png">
                <table v-for="(value, index, key) in teams[2].players" v-bind:key="key">
                    <tr>
                        <td class="team3__player-number">{{ index + 1 }}</td>
                        <td class="team3__player-name">{{ value }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: "Teams",
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
        goToNewList() {
            const inputList = document.getElementById("list");
            inputList.value = "";
            this.formedTeams[0].formed = false;
        }
    },
    created() {
        // Received from eventBus
        eventBus.$on('click', (teams, formedTeams) => {
            this.teams = teams;
            this.formedTeams = formedTeams;
        })
    }
}
</script>

<style>
    .teams__new-list-button {
        width: 116px;
        height: 32px;
        margin-bottom: 50px;
        color: var(--color-white);
        background-color: var(--color-darkblue);
        border-radius: 20px;
        border: 1px solid var(--color-black);
        font-size: 18px;
        font-family: 'Mate SC', serif;
        -webkit-text-stroke: 0.1px var(--color-black);
        transition: 150ms linear;
    }
    .teams__new-list-button:active {
        background-color: #152972;
    }
    .teams-container, .teams {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .teams__team1, .teams__team2, .teams__team3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 20px;
    }
    .team1__logo, .team2__logo, .team3__logo {
        width: 75px;
        height: 75px;
        align-self: center;
        margin-bottom: 20px;
    }
    .team1__player-number, .team2__player-number, .team3__player-number {
        width: 26px;
        height: 26px;
        color: var(--color-white);
        text-align: center;
        border-radius: 1px;
    }
    .team1__player-number {
        background-color: var(--color-darkred);
    }
    .team2__player-number {
        background-color: var(--color-yellow);
    }
    .team3__player-number {
        background-color: var(--color-brown);
    }
    .team1__player-name, .team2__player-name, .team3__player-name {
        width: 189px;
        height: 26px;
        background: var(--color-white);
        text-indent: 5px;
        color: var(--color-black);
        padding-top: 8px;
        border: 1px solid var(--color-black);
        border-radius: 1px;
    }
    @media only screen and (min-width: 600px) {
        .teams__new-list-button {   
            width: 150px;
            height: 40px;
        }
        .teams {
            flex-direction: row;
            justify-content: space-evenly;
            margin-bottom: 50px;
        }
        .team1__logo, .team2__logo, .team3__logo {
            width: 80px;
            height: 80px;
        }
        .team1__player-number, .team2__player-number, .team3__player-number {
            width: 30px;
            height: 30px;
            font-size: 18px;
        }
        .team1__player-name, .team2__player-name, .team3__player-name {
            width: 140px;
            height: 30px;
            font-size: 18px;
        }
    }
    @media only screen and (min-width: 768px) {
        .teams__new-list-button:hover {
            background-color: #152972;
        }
        .team1__player-number, .team2__player-number, .team3__player-number {
            width: 40px;
            height: 30px;
            font-size: 20px;
        }
        .team1__player-name, .team2__player-name, .team3__player-name {
            width: 180px;
            height: 30px;
            font-size: 20px;
            padding-top: 5px;
        }
    }
</style>
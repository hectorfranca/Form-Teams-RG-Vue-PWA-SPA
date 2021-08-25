<template>
    <form v-bind:class="{ '--hidden': formedTeams[0].formed }">
        <label class="form__label-list" for="list">Insira a lista:</label>
        <textarea class="form__list" type="file" name="list" id="list" rows="15" cols="25">
        </textarea>
    </form>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: "List",
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
    created() {
        eventBus.$on("click", (teams, formedTeams) => {
            this.teams = teams;
            this.formedTeams = formedTeams;
        })
    }
}
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form__label-list {
        font-size: 22px;
        color: var(--color-white);
        margin-bottom: 10px;
        -webkit-text-stroke: 0.1px var(--color-black);
    }
    .form__list {
        margin-bottom: 20px;
        border: 1px solid var(--color-black);
        border-radius: 5px;
        font-family: 'Mate SC', serif;
        font-size: 18px;
        font-weight: bold;
        color: var(--color-black);
        background: var(--color-white);
        padding-left: 5px;
        resize: none;
    }
    textarea:focus, input:focus, select:focus {
        outline: 0;
    }
    @media only screen and (min-width: 600px) {
        .form__label-list {
            font-size: 28px;
        }
        .form__list {
            width: 500px;
        }
    }
</style>
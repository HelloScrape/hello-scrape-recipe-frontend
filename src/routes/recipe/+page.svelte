<script lang="ts">
	import { goto } from "$app/navigation";
	import { HomeRoute } from "$lib/const/routes";
	import { onMount } from "svelte";


    onMount(() => {
        goto(HomeRoute);
    })
    </script>

    <div class="NoContent">
        Nothing to see here
    </div>

    <style>
        .NoContent{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: white;
            z-index: 1;
            box-shadow: 10px 10px 5px lightblue;
            width: 100%;
            height: 50px;
            margin-bottom: 5em;
            padding-top: 1em;
            padding-bottom: 1em;
        }
    </style>
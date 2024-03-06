<script lang="ts">
  import { onMount } from "svelte";
  import { fetchData } from "$lib/stores/fetch-crypto-data-store";

  let coins: any[] = [];

  onMount(async () => {
    try {
      const response = await fetchData();
      console.log("Fetched data:", response.data); // Log the fetched data
      if (response.data && response.data.coins) {
        coins = response.data.coins;
      } else {
        console.error("Invalid data structure:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div>
  <h2>Crypto Coins</h2>
  {#if coins.length > 0}
    <ul>
      {#each coins as coin}
        <li>{coin.name} - {coin.symbol}</li>
      {/each}
    </ul>
  {:else}
    <p>No data available</p>
  {/if}
</div>

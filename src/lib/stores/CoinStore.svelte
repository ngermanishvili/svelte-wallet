<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { fetchData } from "$lib/stores/fetch-crypto-data-store";
  import PinContainer from "$lib/components/ui/ThreeDPin/PinContainer.svelte";

  export const coins = writable([]);

  onMount(async () => {
    try {
      const response = await fetchData();
      console.log("Fetched data:", response.data); // Log the fetched data
      if (response.data && response.data.coins) {
        coins.set(response.data.coins.slice(0, 12));
      } else {
        console.error("Invalid data structure:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  });
</script>






<div class="flex flex-wrap justify-center gap-4">
  {#if $coins.length > 0}
    {#each $coins as coin}
      <PinContainer title={coin.name} href="https://sveltekit.io">
        <div
          class="flex h-[18rem] w-[20rem] basis-full gap-4 flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
        >
          <div class="flex justify-between">
            <h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
              {coin.symbol}
            </h3>

            <img class="w-8 h-8" src={coin.iconUrl} alt="iconurl" />
          </div>
          <div class="!m-0 !p-0 text-base font-normal">
            <h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
              $ {coin.price.split(".")[0]} USD
            </h3>
          </div>
          <div
            class="flex justify-center items-center w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
          >
            <img class="w-[50px] h-auto" src={coin.iconUrl} alt="iconurl" />
          </div>
        </div>
      </PinContainer>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if}
</div>

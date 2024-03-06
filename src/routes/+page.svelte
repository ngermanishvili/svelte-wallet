<script>
  import { MetaMaskStore } from "$lib";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import CopyButton from "../components/copy-button.svelte";
  import CoinStore from "../lib/stores/CoinStore.svelte";
  import Navbar from "$lib/components/ui/FloatingNavbar/Navbar.svelte";

  const { walletState, isMetaMaskPresent, connect, loaded, init } =
    MetaMaskStore();

  onMount(() => {
    init();
  });
</script>

<div class="flex justify-center items-center">
  <Navbar />
  <span class="text-2xl font-bold uppercase mt-8">Nika Germanishili</span>
</div>

<div class="mt-[100px] flex justify-center items-center">
  {#if $loaded}
    {#if $isMetaMaskPresent}
      {#if Boolean($walletState.account)}
        <div class="bg-violet-500 rounded-md flex justify-center items-center">
          <p class="text-whitep-4">{$walletState.account}</p>
          <CopyButton text={$walletState.account} />
        </div>
      {:else}
        <button
          class="btn flex justify-center items-center m-auto mt-[20px] p-4 bg-violet-500"
          on:click={connect}>Connect Your Wallet</button
        >
      {/if}
    {:else}
      <p>Please install MetaMask</p>
    {/if}
  {:else}
    <p>Loading...</p>
  {/if}
</div>
{#if $walletState.account}
  <div class="flex justify-center items-center">
    <button
      class="btn flex justify-center items-center m-auto bg-violet-500 text-white w-[250px] max-w-[100%] mt-[20px]"
      on:click={() => goto("/about")}
    >
      View Your Cabinet
    </button>
  </div>
{:else}
  <p class="text-center text-red-500 font-bold p-4 uppercase">
    To view your Cabinet, please connect your wallet first.
  </p>
{/if}
<CoinStore />

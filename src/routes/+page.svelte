<script>
  import { MetaMaskStore } from "$lib";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import CopyButton from "../components/copy-button.svelte";
  import BentoExample from "$lib/components/ui/BentoGrid/BentoExample.svelte";
  import TypeWritterExample from "$lib/components/ui/TypewriterEffect/TypeWritterExample.svelte";

  const { walletState, isMetaMaskPresent, connect, loaded, init } =
    MetaMaskStore();

  onMount(() => {
    init();
  });
</script>

<TypeWritterExample />

<div class="flex justify-center items-center m-10">
  {#if $loaded}
    {#if $isMetaMaskPresent}
      {#if Boolean($walletState.account)}
        <p class="text-white">{$walletState.account}</p>
        <CopyButton text={$walletState.account} />
      {:else}
        <button
          class="btn flex justify-center items-center m-auto"
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
  <div class="flex justify-center items-center m-10">
    <button
      class="btn flex justify-center items-center m-auto bg-red-400 text-white w-[250px] max-w-[100%]"
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
<BentoExample />

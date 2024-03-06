<script lang="ts">
  import PinContainer from "$lib/components/ui/ThreeDPin/PinContainer.svelte";
  import { MetaMaskStore } from "$lib";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import BentoExample from "$lib/components/ui/BentoGrid/BentoExample.svelte";

  const { walletState, init } = MetaMaskStore();

  onMount(() => {
    init();
  });
</script>

<div>
  <button class="btn ml-4 mt-4 bg-purple-500" on:click={() => goto("/")}
    >Back to main page</button
  >
</div>

<div class="flex h-[40rem] w-full items-center justify-center">
  <PinContainer title={$walletState.account} href="https://sveltekit.io">
    <div
      class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
    >
      <h3
        class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100 uppercase"
      >
        hover to see your wallet adress
      </h3>
      <div class="!m-0 !p-0 text-base font-normal">
        <span class="text-slate-500"> </span>
      </div>

      <div
        class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
      >
        <span class="flex justify-center items-center mx-auto uppercase">
          Nika Germanishili
        </span>
      </div>
    </div>
  </PinContainer>
  <button class="bg-purple-500 p-4 btn" on:click={() => goto("/chat")}>
    GO TO OPENAI API PAGE</button
  >
</div>
<div class="p-2">
  <BentoExample />
</div>

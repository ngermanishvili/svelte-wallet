<script lang="ts">
  import TypewriterEffectSmooth from "./TypewriterEffectSmooth.svelte";
  const words = [
    {
      text: "Connect",
    },
    {
      text: "your",
    },
    {
      text: "crypto",
    },
    {
      text: "wallet",
    },
    {
      text: "Svelte Example",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
</script>

<div class="flex mt-10 flex-col items-center justify-center">
  <p class="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
    Welcome to Nika Germanishvili NFT Collection
  </p>
  <TypewriterEffectSmooth {words} />
  <div
    class="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
  ></div>
</div>

<script lang="ts">
  import { cn } from "../../../utils/cn";
  export let className: string = "";
  export let title: string = "";
  export let description: string = "";
  export let icon: any;
  export let imageUrl: string = "";
</script>

<div
  class={cn(
    "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-gray-800 p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
    className
  )}
>
  <slot name="header" />
  <div class="transition duration-200 group-hover/bento:translate-x-2">
    <slot name="icon" />
    <div class="mb-2 text-white mt-2 font-sans font-bold dark:text-neutral-200">
      {title}
    </div>
    <div
      class="font-sans text-xs font-normal text-white dark:text-neutral-300 p-4"
    >
      {description}
      <div class="">
        {#if imageUrl}
          <img
            src={imageUrl}
            alt={title}
            class="w-full h-48 object-cover rounded-xl"
          />
        {/if}
      </div>
    </div>
  </div>
</div>

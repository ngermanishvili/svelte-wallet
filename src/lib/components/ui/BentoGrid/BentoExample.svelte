<script lang="ts">
  import { ClipboardCopy, File, FileSignature, Table } from "lucide-svelte";
  import BentoGrid from "./BentoGrid.svelte";
  import BentoGridItem from "./BentoGridItem.svelte";

  const items = [
    {
      title: "Appe Club NFT",
      description: "Nika Germanishvili NFT Collection",
      className: "md:col-span-2",
      icon: ClipboardCopy,
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=1060&t=st=1709658531~exp=1709659131~hmac=769682e5a983d0aa5cd54e6203f391f982828b71c6a4f6e3e364bb02b3169131",
    },
    {
      title: "Appe  NFT",
      description: "Nika Germanishvili NFT Collection",
      className: "md:col-span-1",
      icon: File,

      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=1060&t=st=1709658551~exp=1709659151~hmac=e551f7a1e911706a33bd7a6e7cb18d1d66a03c92050776f04199fd6183eff0ff",
    },
    {
      title: "Appe  NFT TEST ",
      description: "Nika Germanishvili NFT Collection",
      className: "md:col-span-1",
      icon: FileSignature,

      imageUrl:
        "https://img.freepik.com/premium-vector/hand-drawn-nft-style-ape-illustration_23-2149611024.jpg?w=1060",
    },
    {
      title: "APPE TEST ",
      description: "Nika Germanishvili NFT Collection",
      className: "md:col-span-2",
      icon: FileSignature,

      imageUrl:
        "https://img.freepik.com/premium-vector/hand-drawn-nft-style-ape-illustration_23-2149611024.jpg?w=1060",
    },
  ];
</script>

<div>
  <BentoGrid>
    {#each items as item (item)}
      <BentoGridItem
        title={item.title}
        description={item.description}
        className={item.className}
        icon={item.icon}
        imageUrl={item.imageUrl}
      >
        <div class="flex justify-center items-center">
          <item.icon class="w-12 h-12" />
        </div>
      </BentoGridItem>
    {/each}
  </BentoGrid>
</div>

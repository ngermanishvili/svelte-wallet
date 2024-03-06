<script lang="ts">
  import { Home, MessageCircle, User } from "lucide-svelte";
  import FloatingNavbar from "./FloatingNavbar.svelte";
  const navItems = [
    {
      name: "Svelte Test",
      link: "/",
      icon: Home,
    },
    {
      name: "Svelte Test2",
      link: "/",
      icon: User,
    },
    {
      name: "Svelte Test3",
      link: "/",
      icon: MessageCircle,
    },
    {
      name: "Svelte Test4",
      link: "/",
      icon: MessageCircle,
    },
    {
      name: "Svelte Test5",
      link: "/",
      icon: MessageCircle,
    },
  ];
</script>

<div class="relative w-full hidden sm:block">
  <FloatingNavbar {navItems} />
</div>

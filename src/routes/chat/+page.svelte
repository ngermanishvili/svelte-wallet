<script>
  import { useChat } from "ai/svelte";

  const { input, handleSubmit, messages } = useChat();
</script>

<div class="bg-black w-full h-[100vh] flex justify-center items-center">
  <!-- 
    
   -->
  <div class="bg-purple-500">
    <div class="w-[500px] h-[500[px]">
      <h2 class="text-white h-[500px] flex items-center justify-center">
        HERE WILL BE OUTPUT BUT OPENAI API CREDITS EXPIRED ! <br />
        HERE WILL BE OUTPUT BUT OPENAI API CREDITS EXPIRED ! <br />
        HERE WILL BE OUTPUT BUT OPENAI API CREDITS EXPIRED ! <br />
        HERE WILL BE OUTPUT BUT OPENAI API CREDITS EXPIRED ! <br />
        HERE WILL BE OUTPUT BUT OPENAI API CREDITS EXPIRED ! <br />
      </h2>
    </div>
  </div>
  <ul>
    {#each $messages as message}
      <li>{message.role}: {message.content}</li>
    {/each}
  </ul>
  <form on:submit={handleSubmit} class="ml-10">
    <input
      placeholder="ASK SOMETHING TO AI"
      class="w-full bg-purple-200 h-[50px] outline-none text-black"
      bind:value={$input}
    />
    <button
      class="bg-purple-500 w-full p-4"
      type="submit"
      on:click={() => alert("API CREDITS EXPIRED ! 😔😔😔")}>Send</button
    >
  </form>
</div>

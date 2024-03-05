<script>
  let buttonText = "Copy";

  /**
   * @param {string} text
   */
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        buttonText = "Your address is copied!";
        setTimeout(() => {
          buttonText = "Copy";
        }, 2000);
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  }
</script>

<button
  class="ml-4 bg-red-400 p-1 w-[200px] max-w-[100%] text-white rounded"
  on:click={() => copyToClipboard($$props.text)}
>
  {buttonText}
</button>

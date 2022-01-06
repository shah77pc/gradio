<script>
    export let value, setValue, theme;
    export let lines;
</script>


{#if lines > 1}
    <textarea
        rows={lines}
        class="textarea w-full rounded box-border p-2 resize-none focus:outline-none appearance-none"
        on:change={e => setValue(e.target.value)}
    ></textarea>
{:else}
    <input
        type="text"
        class="input w-full rounded box-border p-2 focus:outline-none appearance-none"
        on:change={e => setValue(e.target.value)}
        {theme}
    />
{/if}

<style lang="postcss">
    .input_text [theme="default"] {
        input, textarea {
            @apply shadow transition hover:shadow-md dark:bg-gray-800;
        }
    }
</style>
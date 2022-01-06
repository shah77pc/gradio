<script>
    export let value, setValue, theme;
    export let maximum, minimum, step;
</script>


<div class="input-slider text-center" {theme}>
    <input
        type="range"
        class="range w-full appearance-none transition rounded h-4"
        on:change={e => setValue(e.target.value)}
        value={value}
        min={minimum}
        max={maximum}
        step={step}
    />
    <div class="value inline-block mx-auto mt-1 px-2 py-0.5 rounded">{value}</div>
</div>

<style lang="postcss">
    .input-slider [theme="default"] {
        .range {
            @apply bg-white dark:bg-gray-800 shadow h-3 transition hover:shadow-md;
        }
        .range::-webkit-slider-thumb {
            @apply bg-gradient-to-b from-yellow-400 to-yellow-500 dark:from-red-500 dark:to-red-600 shadow;
        }
        .range::-moz-range-thumb {
            @apply bg-gradient-to-b from-yellow-400 to-yellow-500 shadow;
        }
        .value {
            @apply bg-gray-100 dark:bg-gray-600 font-semibold;
        }
    }
</style>
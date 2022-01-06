<script>
    export let value, setValue, theme;
    let labelConfidences = [{}];
    $: if ("confidences" in value) {
        for (let labelConfidence in value["confidences"]) {
            let confidence = Math.round(labelConfidence["confidence"] * 100) + "%";
            labelConfidences.push({"label": labelConfidence.Label, "confidence": confidence})
        }
    }
</script>

<!-- {#if "confidences" in value}
{#each labels as label}
        <div class="label" title={label}>
          {label_confidence.label}
        </div>
        
        <div
          className="confidence"
          title={confidence}
          style={{
            minWidth: "calc(" + confidence + " - 12px)"
          }}
        >
          {confidence}
        </div>

    return (
      <div className="output_label">
        <div className="output_class">{this.props.value["label"]}</div>
        <div className="confidence_intervals">
          <div className="labels" style={{ maxWidth: "120px" }}>
            {labels}
          </div>
          <div className="confidences">{confidences}</div>
        </div>
      </div>
    );
    {/each}
{/if} -->


<div class="output_label">
    <div class="output_class_without_confidences font-bold text-2xl py-6 px-4 flex-grow flex items-center justify-center">
      {value["label"]}
    </div>
</div>

<style lang="postcss">

</style>
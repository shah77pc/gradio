import InputNumber from "./input/Number.svelte";
import InputRadio from "./input/Radio.svelte";
import InputTextbox from "./input/Textbox.svelte"
import InputSlider from "./input/Slider.svelte"
import InputCheckbox from "./input/Checkbox.svelte"
import InputCheckboxGroup from "./input/CheckboxGroup.svelte"
import OutputTextbox from "./output/Textbox.svelte";
import OutputLabel from "./output/Label.svelte";
import OutputHighlightedText from "./output/HighlightedText.svelte";

export const inputComponentMap = {
    "number": InputNumber,
    "radio": InputRadio,
    "textbox": InputTextbox,
    "slider": InputSlider,
    "checkbox": InputCheckbox,
    "checkboxgroup": InputCheckboxGroup,
}
export const outputComponentMap = {
    "textbox": OutputTextbox,
    "highlightedText": OutputHighlightedText,
    "label": OutputLabel,
}

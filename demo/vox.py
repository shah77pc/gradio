import gradio as gr

def image_data(img):
    im, crop_data = img
    crop_data["original_height"] = im.shape[0]
    crop_data["original_width"] = im.shape[1]
    return im, crop_data

io = gr.Interface(image_data, gr.inputs.Image(tool="select"), 
    ["image", "json"])

io.launch()
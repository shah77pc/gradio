import gradio as gr

def chem(molecule):
    return molecule


gr.Interface(chem, "molecule", "text", layout="horizontal").launch()

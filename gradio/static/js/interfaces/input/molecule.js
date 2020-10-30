const molecule_input = {
  html: ``,
  init: function(opts) {
    this.composer = new Kekule.Editor.Composer(this.target[0]);
  },
  submit: function() {
    var mols = this.composer.exportObjs(Kekule.Molecule);
    var mol = mols[0];
    var smile_str = Kekule.IO.saveFormatData(mol, 'smi');
    this.io_master.input(this.id, smile_str)
  },
  clear: function() {
    var mols = this.composer.newDoc();
  },
}
  
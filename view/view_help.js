class ViewHelp {
  static help() {
    let help = [
      [`===== documentation ============================================================`],
      [`author add -> add<space> "data yang ingin dimasukkan"`],
      [`author read_one -> read_one<space> "masukkan id author"`],
      [`author read_all -> read_all<space>`],
      [`author update -> update<space> "masukkan data yang ingin di update dan idnya"`],
      [`author delete -> delete<space> "masukkan id author"`],
      [`tag add -> add<space> "data yang ingin dimasukkan"`],
      [`tag read_one -> read_one<space> "masukkan id tag"`],
      [`tag read_all -> read_all<space>`],
      [`tag update -> update<space> "masukkan data yang ingin di update dan idnya"`],
      [`tag delete -> delete<space> "masukkan id tag"`],
      [`article add -> add<space> "data yang ingin dimasukkan"`],
      [`article read_one -> read_one<space> "masukkan id article"`],
      [`article read_all -> read_all<space>`],
      [`article update -> update<space> "masukkan data yang ingin di update dan idnya"`],
      [`article delete -> delete<space> "masukkan id article"`],
      [`===============================================================================`]
    ];

    console.log(help.join('\n'));
  }
}

module.exports = ViewHelp;

class ChordButton {
  constructor(name, showing, diatonicNo, chordTypeNo) {
    this.name = name;
    this.showing = showing;
    this.diatonicNo = diatonicNo;
    this.chordTypeNo = chordTypeNo;
    this.x;
    this.y;
    this.notes;
  }

  // Should really make these prototypes
  // This works out where a note should display on the page
  calculatePosition() {
    let margin = 100;
    let gridGap = 10;
    let buttonWidth = 60;
    let buttonHeight = 40;
    this.x = margin + this.chordTypeNo * (buttonWidth + gridGap);
    this.y = margin + this.diatonicNo * (buttonWidth + gridGap);
  }

  // The button displays themselves
  show() {
    let buttonWidth = 60;
    let buttonHeight = 40;
    // fill(this.diatonicNo * 10 + this.chordTypeNo * 10);

    rect(this.x, this.y, buttonWidth, buttonHeight);

    text(this.name, this.x + buttonWidth / 2, this.y + buttonHeight / 2);
  }
}

ChordButton.prototype.getNotes = function () {
  let notes = [];
  // Is a three note chord
  notes[0] = this.getRoot();
  notes[1] = this.getThird(notes[0]);
  notes[2] = this.getFifth(notes[0]);
  // Is a four note chord
  if (this.chordTypeNo != 0 && this.chordTypeNo != 4 && this.chordTypeNo != 6) {
    notes[3] = this.getSeventh(notes[0]);
  }
  this.notes = notes;
}

// This swaps the 1-7 diatonic notes into the 1-12 chromatic system
ChordButton.prototype.diatonicTo12 = function () {
  if (this.diatonicNo === 1) {
    return 1;
  } else if (this.diatonicNo < 4) {
    return this.diatonicNo * 2 - 1;
  } else {
    return this.diatonicNo * 2 - 2;
  }
}

ChordButton.prototype.getRoot = function () {
  // DIATONIC CHORDS
  return this.diatonicTo12();
}

ChordButton.prototype.getThird = function (root) {
  let note;
  // DIATONIC CHORDS
  // If chord is major or minor
  if (this.diatonicNo === 1 || this.diatonicNo === 4 || this.diatonicNo === 5) {
    note = root + 4;
  } else {
    note = root + 3;
  }

  return note;
}

ChordButton.prototype.getFifth = function (root) {
  let note;
  // DIATONIC CHORDS 
  if (this.diatonicNo != 7) {
    note = root + 7;
  } else {
    note = root + 6;
  }

  return note;
}

ChordButton.prototype.getSeventh = function (root) {
  let note;
  // 7TH CHORDS
  // Different for major and minor/dominant
  if (this.diatonicNo === 1 || this.diatonicNo === 4) {
    note = root + 11;
  } else {
    note = root + 10;
  }

  return note;
}

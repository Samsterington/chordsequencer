
let chordButtons = [];
let isMajor = true;

function setup() {
	createCanvas(1000, 800);
	textAlign(CENTER, CENTER);

	// Initialize chord buttons
	createChordButtons();

	// Control chord buttons
	for (let i = 0; i < chordButtons.length; i++) {
		chordButtons[i].show();
	}
	console.log(chordButtons);
}

function createChordButtons() {
	// Names of diatonic chords 
	let diatonicChords;
	if (isMajor) {
		diatonicChords = [`I`, `ii`, `iii`, `IV`, `V`, `vi`, `vii°`];
	}

	// types of chords
	let chordTypes = [``, [`M7`, `m7`, '7'], `↑`, `↓`, `V/`, `V7/`, `vii°/`, `vii°7/`]

	for (let i = 0; i < 7; i++) {
		// chordButtons[i] = [];

		for (let j = 0; j < 8; j++) {
			if (i !== 0 || (i === 0 && j < 4)) { // This removes functional chords for the I chord
				let name = '';

				// Make basic chords be showing
				let showing = false;
				if (j === 0) {
					showing = true;
				}

				// This joins the names together correctly
				if (j < 4) {
					if (j === 1) {
						// Correct syntax for 7th chords
						let type7th;
						if (i === 0 || i === 3) {
							type7th = 0;
						} else if (i === 4 || i === 6) {
							type7th = 2;
						} else {
							type7th = 1;
						}
						name = diatonicChords[i] + chordTypes[j][type7th];
					} else {
						name = diatonicChords[i] + chordTypes[j];
					}
				} else {
					name = chordTypes[j] + diatonicChords[i];
				}

				// chordButtons[i][j] = new ChordButton(name, showing, i, j);
				chordButtons.push(new ChordButton(name, showing, i + 1, j));
				chordButtons[chordButtons.length - 1].calculatePosition();
				chordButtons[chordButtons.length - 1].getNotes();

			}
		}
	}
}

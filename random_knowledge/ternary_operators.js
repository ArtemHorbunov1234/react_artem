const age = 13;
const withParent = true;

// UNDERAGE | ADULT | WITH_PARENT
let category;
if (age >= 18) {
    category = 'ADULT';
} else if (withParent) {
    category = 'WITH_PARENT';
} else {
    category = 'UNDERAGE';
}

const categoryConst = age >= 18 ? 'ADULT' : withParent ? 'WITH_PARENT' : 'UNDERAGE';

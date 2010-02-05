load("../mjs.js");

if (MJS_FLOAT_ARRAY_TYPE == Array) {
    function randMatrix() {
	return [Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
		Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
		Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
		Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000];
    }
} else {
    function randMatrix() {
	return new MJS_FLOAT_ARRAY_TYPE([Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
					 Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
					 Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
					 Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000]);
    }
}

var m1 = randMatrix();
var m2 = randMatrix();
var m3 = randMatrix();
var tmp;

const COUNT = 1000000;

var t0 = Date.now();
for (var i = 0; i < COUNT; ++i) {
    // reuse m3
    M4x4.mul(m1, m2, m3);

    // don't reuse m3, allocate new
    //m3 = M4x4.mul(m1, m2);

    tmp = m3;
    m3 = m2;
    m2 = m1;
    m1 = tmp;
}
var t1 = Date.now();

print (COUNT + " muls: " + (t1-t0) + " ms\n");

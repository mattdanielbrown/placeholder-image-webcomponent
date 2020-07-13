import test from 'ava';
import placeholderImageWebcomponent from '.';

test('title', t => {
	t.throws(() => {
		placeholderImageWebcomponent(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(placeholderImageWebcomponent('unicorns'), 'unicorns & rainbows');
});

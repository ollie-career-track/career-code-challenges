const Set = require('../set');

describe('Set class', () => {
  describe('Set instantiation', () => {

    it('creates an empty set upon instantiation', () => {
      const set = new Set;

      expect(set.setArray).toEqual([]);
      expect(set.setArray.length).toBe(0);
    });
  });

  describe('Instance methods', () => {
    describe('Add method', () => {

      it('adds an item', () => {
        const set = new Set;
        set.add('item');

        expect(set.setArray[0]).toBe('item');
        expect(set.setArray.length).toBe(1);
      });

      it('can add multiple items', () => {
        const set = new Set;

        set.add('one');
        set.add('two');
        set.add('three');

        expect(set.setArray[0]).toBe('one');
        expect(set.setArray[1]).toBe('two');
        expect(set.setArray[2]).toBe('three');

        expect(set.setArray.length).toBe(3);
      });

      it('will not add to set if item already in set', () => {
        const set = new Set;
        set.add('item');

        const result = set.add('item');

        expect(result).toBe('Cannot add item already in set');
        expect(set.setArray.length).toBe(1);
      });
    });

    describe('Remove method', () => {
      it('removes an item', () => {
        const set = new Set;

        set.add('item');
        set.add('remove me');

        set.remove('remove me');
        const result = set.has('remove me');

        expect(result).toBe(false);
        expect(set.setArray.length).toBe(1);
      });

      it('can empty a set of items', () => {
        const set = new Set;

        set.add('one');
        set.add('two');
        set.add('three');

        set.remove('one');
        set.remove('two');
        set.remove('three');

        expect(set.has('one')).toBe(false);
        expect(set.has('two')).toBe(false);
        expect(set.has('three')).toBe(false);

        expect(set.setArray.length).toBe(0);
      });
    });

    describe('Has method', () => {
      it('returns true when set contains item', () => {
        const set = new Set;
        set.add('item');

        const result = set.has('item');
        expect(result).toBe(true);
      });

      it('returns false when item is not in set', () => {
        const set = new Set;
        const result = set.has('item');

        expect(result).toBe(false);
      });
    });

    describe('Intersection method', () => {
      it('returns new set containing items in both sets with no duplicates', () => {

      });

      it('returns false if no intersections', () => {

      });
    });

    describe('Union method', () => {
      it('returns new set with all items from both sets', () => {
        const one = new Set;

        one.add(0);
        one.add(1);

        const two = new Set;

        two.add(2);
        two.add(3);

        const result = one.union(two);
        expect(result.setArray.length).toBe(4);
      });

      it('returns a new set with no duplicates', () => {

      });
    });

    describe('Difference method', () => {
      it('returns new set containing items not shared between sets', () => {

      });

      it('returns false if no differences', () => {

      });
    });
  });

  describe('Static methods', () => {
    describe('Static intersection method', () => {

      it('returns new set containing items in both sets with no duplicates', () => {

      });

      it('returns false if no intersections', () => {

      });
    });

    describe('Static union method', () => {
      it('returns new set with all items from both sets with no duplicates', () => {
        const one = new Set;

        one.add(0);
        one.add(1);

        const two = new Set;

        two.add(2);
        two.add(3);

        const result = Set.union(one, two);

        expect(result.setArray.length).toBe(4);
      });

      it('returns set with no duplicates', {

      });
    });

    describe('Static difference method', () => {
      it('returns new set containing items not shared between sets', () => {

      });

      it('returns false if no differences', () => {

      });
    });
  });
});
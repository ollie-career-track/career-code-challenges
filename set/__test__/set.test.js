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

      it('throws error if set already contains item', () => {

      });
    });

    describe('Remove method', () => {
      it('removes an item', () => {

      });

      it('can empty a set of items', () => {

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
      it('returns new set containing items in both sets', () => {

      });

      it('returns false if no intersections', () => {

      });
    });

    describe('Union method', () => {
      it('returns new set with all items from both sets', () => {

      });
    });

    describe('Difference method', () => {
      it('returns new set containing items that not shared between sets', () => {

      });

      it('returns false if no differences', () => {

      });
    });
  });

  describe('Static methods', () => {
    describe('Static intersection method', () => {

      it('returns new set containing items in both sets', () => {

      });

      it('returns false if no intersections', () => {

      });
    });

    describe('Static union method', () => {
      it('returns new set with all items from both sets', () => {

      });
    });

    describe('Static difference method', () => {
      it('returns new set containing items that not shared between sets', () => {

      });

      it('returns false if no differences', () => {

      });
    });
  });
});
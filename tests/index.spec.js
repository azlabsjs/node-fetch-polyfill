
import '../';

describe('Node Fetch global tests', () => {
  it('should test if fetch function is globaly available', () => {
    expect(typeof fetch !== 'undefined' && fetch !== null).toBe(true);
    expect(typeof fetch === 'function').toBe(true);
  });

  it('should test if Request is available in the global scope', () => {
    expect(typeof Request !== 'undefined' && Request !== null).toBe(true);
    expect(typeof Request === 'function').toBe(true);
  });

  it('should test if Response is available in the global scope', () => {
    expect(typeof Response !== 'undefined' && Response !== null).toBe(true);
    expect(typeof Response === 'function').toBe(true);
  });

  it('should test if Blob is available in the global scope', () => {
    expect(typeof Blob !== 'undefined' && Blob !== null).toBe(true);
    expect(typeof Blob === 'function').toBe(true);
  });

  it('should test if FormData is available in the global scope', () => {
    expect(typeof FormData !== 'undefined' && FormData !== null).toBe(true);
    expect(typeof FormData === 'function').toBe(true);
  });
});

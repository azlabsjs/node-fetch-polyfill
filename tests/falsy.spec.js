
describe('Node Fetch global tests', () => {
  it('should test if fetch function is not globaly available', () => {
    expect(typeof fetch !== 'undefined' && fetch !== null).toBe(false);
  });

  it('should test if Request is not available in the global scope', () => {
    expect(typeof Request !== 'undefined' && Request !== null).toBe(false);
  });

  it('should test if Response is not available in the global scope', () => {
    expect(typeof Response !== 'undefined' && Response !== null).toBe(false);
  });

  it('should test if Blob is not available in the global scope', () => {
    expect(typeof Blob !== 'undefined' && Blob !== null).toBe(false);
  });

  it('should test if FormData is not available in the global scope', () => {
    expect(typeof FormData !== 'undefined' && FormData !== null).toBe(false);
  });
});

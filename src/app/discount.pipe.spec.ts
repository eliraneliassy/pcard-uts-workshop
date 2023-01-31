import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should give a x percent discount', () => {
    //arrane:
    const pipe = new DiscountPipe();

    //act
    const res = pipe.transform(500, 0.1);
    

    //assert
    expect(res).toBe(500 * 0.9)
    

  });
});

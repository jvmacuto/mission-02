class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop(value) {
    if (this.top < 0) return null;
    const result = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return result;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("is created empty", () => {
    const stack = new Stack();
    expect(stack.top).toBe(-1);
  });

  it("can push items", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe(1);
  });

  it("can pop off", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.top).toBe(-1);
  }); // TODO
});

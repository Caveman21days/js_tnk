// FIRST TASK
describe("first_task:: ", () => {
  describe("when arg is kind of 'Array'", () => {
    it("returns sum of positive values", () => {
      assert.equal(positiveElements([1, 2, 3, 4, 5, -6, -19]), 15);
      assert.equal(positiveElements([-3, 3]), 3);
    });
  })

  describe("when arg is empty array", () => {
    it("returns 0", () => {
      assert.equal(positiveElements([]), 0);
    });
  })

  describe("when kind of arg is not 'Array'", () => {
    it("throws error", () => {
      assert.throw(() => positiveElements('not array'), 'arg is not an array');
    });
  })
});


// DESC SORT
describe("desc_sort:: ", () => {
  describe("when arg is kind of 'Array'", () => {
    it("returns desc sorted array", () => {
      // Так я и не понял, почему .to.have.ordered возвращает undefined
      assert.equal(
        JSON.stringify(descSort([4, 2, 1, 1, 5, -6, -19])),
        JSON.stringify([5, 4, 2, 1, 1, -6, -19])
      );
      // Тоже не работает
      // assert.sameOrderedMembers(descSort([4, 2, 1, 1, 5, -6, -19]), [5, 4, 2, 1, 1, -6, -19])
    });
  })

  describe("when arg is empty array", () => {
    it("returns empty array", () => {
      expect(descSort([])).to.have.members([]);
    });
  })

  describe("when kind of arg is not 'Array'", () => {
    it("throws error", () => {
      assert.throw(() => descSort('not array'), 'arr.sort is not a function');
    });
  })
});


// FILTER
describe("desc_sort:: ", () => {
  describe("when arg is kind of 'Array'", () => {
    describe("when all elements are strings", () => {
      it("returns filtered array", () => {
        expect(_filter(['str', 'i', 'ng', 'string'], 3, 6)).to.have.members(['str', 'string']);
      });
    })

    describe("when some of elements are arrays to", () => {
      it("throws error", () => {
        assert.throw(() => _filter(['string', 3, 'string']), 'all array elements must be strings');
      });
    })
  })

  describe("when arg is empty array", () => {
    it("returns empty array", () => {
      expect(_filter([], 1, 2)).to.have.members([]);
    });
  })

  describe("when kind of arg is not 'Array'", () => {
    it("throws error", () => {
      assert.throw(() => _filter('not array'), 'first argument must be array');
    });
  })

  describe("when min or max are not int", () => {
    it("throws error", () => {
      assert.throw(() => _filter([], 1, '2'), 'min and max args must be integer');
      assert.throw(() => _filter([], '1', 2), 'min and max args must be integer');
    });
  })
});


// CACHE
describe("cache:: ", () => {
  describe("cahchePow", () => {
    it("returns function", () => {
      assert.equal(typeof cachePow(), 'function');
    });
  })

  describe("cachePow returned func", () => {
    let f = cachePow()

    describe("when one of args is not integer", () => {
      it("throws error", () => {
        assert.throw(() => f(2, '2'), 'both args must be int');
        assert.throw(() => f('2', 2), 'both args must be int');
      });
    })

    describe("when both args are integer", () => {
      it("returns object result", () => {
        expect(f(2, 2)).to.eql({ fromCache: false, value: 4 });
        expect(f(2, 2)).to.eql({ fromCache: true, value: 4 });
      });
    })
  })
});


// MONEY BOX
describe("money_box:: ", () => {
  it("returns an object", () => {
    assert.equal(typeof MoneyBox(), 'object')
  });

  describe("MoneyBox returned func", () => {
    let o = MoneyBox()

    describe("#getAmount #getCoin", () => {
      it("returns count of coins", () => {
        assert.equal(o.getAmount(), 0)
        o.addCoin()
        o.addCoin()
        assert.equal(o.getAmount(), 2)
      });
    })
  })
});


// CALC
describe("Calc:: ", () => {
  it("returns an object", () => {
    assert.equal(typeof new Calc(), 'object')
  });

  describe("Calc object methods and props", () => {
    let o = new Calc()

    describe("#getOperation", () => {
      let fn = () => {}

      it("adds fn to operations cache", () => {
        assert.equal(o.operations['a'], undefined)
        o.addOperation('a', fn)
        assert.equal(o.operations['a'], fn)
      });
    })

    describe("#operation", () => {
      let fn = (a, b) => `${a} and ${b}`

      before(() => o.addOperation('q', fn));

      describe("#when operation exists", () => {
        it("updates history", () => {
          assert.equal(o.history()[0], undefined)
          o.operation('5 q 5')
          assert.deepEqual(o.history()[0], {operation: 'q', operands: [5, 5]})
        });

        it("returns result of operation execution", () => {
          assert.equal(o.operation('5 q 5'), '5 and 5')
        });
      })

      describe("#when operation does not exist", () => {
        it("throws error", () => {
          assert.throw(() => o.operation('5 * 5'), "operation '*' is not defined");
        });
      })
    })

    describe("#history", () => {
      before(() => {
        o.clearHistory()
        o.operation('5 + 5')
      });

      it("returns operations history", () => {
        console.log(o.history())
        assert.deepEqual(o.history(), [{operation: '+', operands: [5, 5]}])
      });
    })

    describe("#clearHistory", () => {
      it("returns operations history", () => {
        assert.equal(o.history().length, 1)
        o.clearHistory()
        assert.equal(o.history().length, 0)
      });
    })
  // Дальше упарываться с тестами лень :)
  })
});


// EVENT_HANDLER
describe("event_handler:: ", () => {
  it("returns an object with methods", () => {
    let e = eventHandler()
    assert.equal(typeof e, 'object')
    assert.equal(typeof e.buyTicket, 'function')
    assert.equal(typeof e.createEvent, 'function')
    assert.equal(typeof e.returnTicket, 'function')
    assert.equal(typeof e.events, 'function')
    assert.equal(typeof e.sum, 'function')
    assert.equal(typeof e.sold, 'function')
  });

  let e = eventHandler()

  describe("#create_event", () => {
    it("add new event to store", () => {
      assert.deepEqual(e.events(), {})
      e.createEvent('Concert', 500)
      assert.deepEqual(e.events(), {Concert: 500})
    });
  })

  describe("#buy_ticket", () => {
    describe("#when event exists", () => {
      it("add price of event to sum and add event to sold and returns ticket id", () => {
        assert.deepEqual(e.sold(), [])
        assert.equal(e.sum(), 0)

        let id = e.buyTicket("Concert")
        assert.deepEqual(e.sold(), [['Concert', id]])
        assert.equal(e.sum(), 500)
      });
    })

    describe("#when event does not exist", () => {
      it("returns no event message", () => {
        assert.equal(e.buyTicket("Concert123"), 'События с таким названием еще не придумали')
      });
    })
  })

  describe("#return_ticket", () => {
    let e = eventHandler()

    describe("#when ticket was sold", () => {
      before(() => {
        e.createEvent('Concert', 500)
      })

      it("removes price of event from sum and add event from sold", () => {
        let id = e.buyTicket("Concert")
        assert.deepEqual(e.sold(), [['Concert', id]])
        assert.equal(e.sum(), 500)

        e.returnTicket(id)

        assert.deepEqual(e.sold(), [])
        assert.equal(e.sum(), 0)
      });
    })
  // Писать тесты для events, sum, sold не стал, они были протестированы раньше так или иначе
  //  Я этих unit тестов на Rspec не один десяток тысяч написал)
  })
});

describe("[APP] this is the general test",() => {
    test("return",() => {
        const a = 4;
        const b = 4;
        const total = a+b;
        expect(total).toEqual(8);
    })
})
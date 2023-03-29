{
    const arr = [1, 2, 3];

    const res = arr;
    res.push(7);

    // console.log(arr);
}

{
    const arr = [1, 2, 3];

    const res = arr.concat([7]);
    console.log(res);
    console.log(arr);
}

{
    const a = [1, 2, 3];
    const b = [9, 5];
    const res = a.concat(b);
}

{
    const a = [1, 2, 3];
    const res = a.concat([7]);
    const resBetter = [0, ...a, 7];
    console.log(resBetter);
}

{
    let num = 4;
    num = 5;

    const a = [1, 3];
    a.push(10);
}

{
    const a = {
        name: 'Artem',
        age: 21,
        sex: 'male',
    };

    const b = {
        ...a,
        age: 22,
    };

    console.log(b);
}

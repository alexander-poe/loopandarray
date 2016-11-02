var loaf = {
flour:300,
water:210,
hydration: function () {
  return this.water / this.flour * 100;
}
};

//() to call methods in objects
console.log(loaf.hydration());

var meta = {
foo: 'scram',
bar: 'whiskey',
fum: 'giant',
quux: 'steele',
spam: 'van rossum'
};

for (var name in meta)
    console.log(name, meta[name]);
//whatever comes after var in a for in statement, when called will return keys.
//calling object name with [name] will return values. ex. meta[name]


var hobbit = {meals:['breakfast', '2nd breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};
  console.log(hobbit.meals[3]);

var one = [
           {name: 'John',
           jobTitle: 'Programmer'},
           {name: 'Jane',
           jobTitle: 'Coder'},
            {name: 'Jim',
           jobTitle: 'Barista'}
];

for (var what of one) {
console.log(what.name + " is a " + what.jobTitle);
}

var employee = [
           {name: 'John',
           jobTitle: 'Programmer',
           boss: 'Jane'},
           {name: 'Jane',
           jobTitle: 'Coder'},
            {name: 'Jim',
           jobTitle: 'Barista',
            boss: 'Jane'}
];

for (var job of employee) {
    if (!job.boss) 
      console.log(`${job.jobTitle} ${job.name} doesn't report to anybody.`);
    else 
      console.log(`${job.jobTitle} ${job.name} reports to ${job.boss}.`);

}


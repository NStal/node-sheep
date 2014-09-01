# a handy script to help write nodejs in shell


# install

```bash
npm install -g node-sheep
```

# usage

```bash
echo 1 2 3 4 5 | sheep "
     numbers = input.split(/\s/).filter(function(item){
         return item;
     }).map(function(item){
         return parseInt(item)+2;
     });
     put(numbers.join(' '))
     
"
```

All stdin has been buffered into var ```input```. var ```put``` is the alias to console.log.



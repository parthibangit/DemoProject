const userInfo = new Map<string, string>();

// 1. add values to map
userInfo.set('FirstName', 'Parthiban');                 
userInfo.set('LastName', 'Subburam');
console.log(userInfo);

// 2. Modify the value in map
userInfo.set('FirstName', 'Sarathi');

// 3. get values from map
const lastName = userInfo.get('LastName');                      
userInfo.get('Age');                                            // Return 'undefined' if the key is unavailable
console.log(lastName);

// 4. checking existence (has)
const hasKey = userInfo.has('LastName');                        // Return true if key availble, else false
console.log(hasKey)                                             // true

// 5. checking the size (size)
const totalSize = userInfo.size;
console.log(totalSize)

// 6. delete the key and value using key (delete)
const isDeleted = userInfo.delete('Age');                       // return true if key deleted, else false
console.log(isDeleted);  

// 7. Remove all elements from map
// userInfo.clear()

// 8. iterate through entries using for
for(const[key, value] of userInfo) {
    console.log(`Key is ${key} and value is ${value}`)
}

// 9. iterate keys only using Map.keys()
for (const key of userInfo.keys()) {
    console.log(`Key is ${key}`);
}

// 10. iterate values using Map.values()
for (const value of userInfo.values()) {
    console.log(`value is ${value}`);
}

// 11. iterate entries using Map.forEach
userInfo.forEach((value, key) => {
    console.log(`Key is ${key} and value is ${value}`);
});

// 12. create a new array using map values
const valuesArray: string[] = [...userInfo.values()];
console.log(valuesArray);


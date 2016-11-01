function mergeDataStreams(stream1, stream2) {
  // Strategy:
  // Create a new array.
  // Create multiple new objects to hold the merged props.
  // Copy the keys and values of each Stream 1 object to new objects.
  // For Stream 2, if the ID is the same then copy the k/v too.
  // Add the new objects to the new array.
}

function mergeDataStreams(stream1, stream2) {
    //what we're solving for
    var contactInfo = {};
    //setting up the loop for stream1
    for (i = 0; i<=stream1.length; i++) {
    //copy the array for stream 1 into contactInfo
    
    } 
    for (i = 0; i<=stream2.length; i++) {
    //copy the array for stream 2 into contactInfo
    
    }   
  
    var info = Object.keys(contactInfo[0]);
    for (info in ) {
}
  return contactInfo;
}
  
// data
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests 
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
  });
  
  var actual = mergeDataStreams(stream1, stream2);
  
  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );
  
  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }
  
  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);
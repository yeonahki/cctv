var fs = require('fs');

fs.writeFile('fs_async', 'Hello async', function(err){
  if(err)
    throw err;

  fs.readFile('fs_async', 'utf8', function(err, data){
    if(err)
      throw err;
    console.log('[Read] fs_async: ', data);
  });
});

fs.writeFileSync('fs_sync', 'Hello sync');
console.log('[Read] fs_sync: ', fs.readFileSync('fs_sync', 'utf8'));

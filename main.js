let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(24);
secretMessage.push('to', 'Program');
secretMessage.splice(7,1,'right');
secretMessage.splice(0,1,'programming')
secretMessage.splice(6,5,'know');


console.log(secretMessage.join());  

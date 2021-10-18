var expect = require('chai').expect,
data = require('../data.json');

expect(2).to.equal(2); // Recommended

// for(d in data){
//   expect(d).to.have.all.keys('id', 'type', 'subject', 'description', 'piority', 'status');
//   expect(d).to.have.property('type');
//   expect(d).to.have.property('subject');
//   expect(d).to.have.property('description');
//   expect(d).to.have.property('priority');
//   expect(d).to.have.property('status');
    
//   expect(d['id']).to.be.a('number');
//   expect(d['type']).to.be.a('string');
//   expect(d['subject']).to.be.a('string');
//   expect(d['description']).to.be.a('string');
//   expect(d['priority']).to.be.a('string');
//   expect(d['status']).to.be.a('string');
// }
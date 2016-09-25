import expect from 'expect';

import IdeasAPI from 'IdeasAPI';

describe('IdeasAPI', ()=>{
  it('should exist', ()=>{
    expect(IdeasAPI).toExist();
  });

  // Cannot find server.js...

  // describe('getKeywordRelated', ()=>{
  //   it('should return an array of new words', (done)=>{
  //     var keywords = ['test'];
  //     IdeasAPI.getKeywordRelated(keywords).then((response)=>{
  //       expect(response).toInclude('test');
  //       expect(response.length).toBeGreaterThan(0);
  //       done();
  //     }).catch(done);
  //   });
  //
  // });

});

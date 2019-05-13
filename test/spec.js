const should = require("should");
const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const urlBase = "https://api.trello.com/1/";
const keyUser = "7578d8ceb1714fdff73303a4ce15680d";
const tokenUser = "94dc371cf00b80b4d6a840841af681db64f2e1e8aaa5bb2fb1315ffea6f8ba04";
let idBoard = '';
let idCard = '';
const nameBoard = "Test Board";
const cardName = "Test Card";
const newCardName = "DBServer";
let backlogList = '';
let todoList = '';
let inprogressList = '';
let testingList = '';
let doneList = '';

describe("Testes API Trello",function(){

  it("Criar novo quadro",function(done){
    request.post(
      {url : urlBase + "boards?name="+ nameBoard +"&defaultLabels=true&defaultLists=false&keepFromSource=none&prefs_permissionLevel=private&prefs_voting=disabled&prefs_comments=members&prefs_invitations=members&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=blue&prefs_cardAging=regular&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);
        if( _body.should.have.property('id') ){
                   
            idBoard = _body.id;
            console.log("id board criado: " + idBoard);
        }
        done(); 
      }
    );
  })

  it("Validar criação de quadro",function(done){
    request.get({url : urlBase + "boards/"+idBoard+"?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key="+keyUser+"&token="+ tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('id') ){          
        }
        done();
      }
    );
  })
  
  it("Adicionar lista Done",function(done){
    request.post({url : urlBase + "boards/"+idBoard+"/lists?name=Done&pos=top&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('id') ){          
          
        }
        done();
      }
    );
  })

  it("Adicionar lista Testing",function(done){
    request.post({url : urlBase + "boards/"+idBoard+"/lists?name=Testing&pos=top&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('id') ){          
          
        }
        done();
      }
    );
  })

  it("Adicionar lista In Progress",function(done){
    request.post({url : urlBase + "boards/"+idBoard+"/lists?name=In Progress&pos=top&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('id') ){          
          
        }
        done();
      }
    );
  })

  it("Adicionar lista ToDo",function(done){
    request.post({url : urlBase + "boards/"+idBoard+"/lists?name=ToDo&pos=top&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('id') ){          
          
        }
        done();
      }
    );
  })

  it("Adicionar lista Backlog",function(done){
    request.post({url : urlBase + "boards/"+idBoard+"/lists?name=Backlog&pos=top&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('id') ){          
          
        }
        done();
      }
    );
  })

  it("Validar criação de listas no quadro",function(done){
    request.get({url : urlBase + "boards/"+idBoard+"/lists?cards=none&card_fields=all&filter=open&fields=all&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);

        backlogList = _body[0].id;
        todoList = _body[1].id;
        inprogressList = _body[2].id;
        testingList = _body[3].id;
        doneList = _body[4].id;
        console.log("lists: "+backlogList, todoList, inprogressList, testingList, doneList);
        done();
      }
    );
  })

  it("Incluir novo card ",function(done){
    request.post({url : urlBase + "cards?name="+cardName+"&pos=top&idList="+backlogList+"&keepFromSource=all&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200);
        idCard = _body.id;   
        console.log("id card " + idCard)    
        done();
      }
    );
  })

  it("Alterar nome do card",function(done){
    request.put({url : urlBase + "cards/"+idCard+"?name="+newCardName+"&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200); 
        expect(_body.name).to.equal(newCardName); 
        done();
      }
    );
  })

  it("Mover card para ToDo",function(done){
    request.put({url : urlBase + "cards/"+idCard+"?idList="+todoList+"&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200); 
        done();
      }
    );
  })

  it("Mover card para In Progress",function(done){
    request.put({url : urlBase + "cards/"+idCard+"?idList="+inprogressList+"&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200); 
        done();
      }
    );
  })

  it("Mover card para Testing",function(done){
    request.put({url : urlBase + "cards/"+idCard+"?idList="+testingList+"&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200); 
        done();
      }
    );
  })

  it("Mover card para Done",function(done){
    request.put({url : urlBase + "cards/"+idCard+"?idList="+doneList+"&key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200); 
        done();
      }
    );
  })

  it("Excluir card",function(done){
    request.delete({url : urlBase + "boards/"+idBoard+"?key="+keyUser+"&token="+tokenUser},
      function(error, response, body){   
        var _body = {};
        try{_body = JSON.parse(body);}
        catch(e){_body = {};}
        expect(response.statusCode).to.equal(200); 
        done();
      }
    );
  })
});

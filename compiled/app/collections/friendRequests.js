'use strict';

var db = require('../dbConnection');
var FriendRequest = require('../models/friendRequest');

//create FriendRequests collection
var FriendRequests = new db.Collection();
FriendRequests.model = FriendRequest;

module.exports = FriendRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb2xsZWN0aW9ucy9mcmllbmRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksS0FBSyxRQUFRLGlCQUFSLENBQVQ7QUFDQSxJQUFJLGdCQUFnQixRQUFRLHlCQUFSLENBQXBCOzs7QUFHQSxJQUFJLGlCQUFpQixJQUFJLEdBQUcsVUFBUCxFQUFyQjtBQUNBLGVBQWUsS0FBZixHQUF1QixhQUF2Qjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoiZnJpZW5kUmVxdWVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGIgPSByZXF1aXJlKCcuLi9kYkNvbm5lY3Rpb24nKTtcbnZhciBGcmllbmRSZXF1ZXN0ID0gcmVxdWlyZSgnLi4vbW9kZWxzL2ZyaWVuZFJlcXVlc3QnKTtcblxuLy9jcmVhdGUgRnJpZW5kUmVxdWVzdHMgY29sbGVjdGlvblxudmFyIEZyaWVuZFJlcXVlc3RzID0gbmV3IGRiLkNvbGxlY3Rpb24oKTtcbkZyaWVuZFJlcXVlc3RzLm1vZGVsID0gRnJpZW5kUmVxdWVzdDtcblxubW9kdWxlLmV4cG9ydHMgPSBGcmllbmRSZXF1ZXN0czsiXX0=
'use strict';

var knex = require('knex')({
  client: 'mysql',
  // connection: {
  //   host     : '127.0.0.1',
  //   user     : 'root',
  //   password : '12345',
  //   database : 'MainDatabase',
  //   charset  : 'utf8'

  // }

  connection: {
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b41928aa9d6e3c',
    password: '5a72009f',
    database: 'heroku_75e4ff295c2758d'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('movies').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('movies', function (movie) {
      movie.integer('id').primary();
      movie.string('title', 255);
      movie.string('genre', 255);
      movie.string('poster', 255);
      movie.string('release_date', 255);
      movie.string('description', 255);
      movie.integer('imdbRating');
    }).raw('ALTER TABLE movies ADD FULLTEXT (title)').then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('ratings').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('ratings', function (rating) {
      rating.increments('id').primary();
      rating.integer('score');
      rating.integer('movieid');
      rating.integer('userid');
      rating.string('review', 255);
      rating.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 255).unique();
      user.string('password', 255);
      user.string('email', 255);
      user.string('firstName', 255);
      user.string('lastName', 255);
      user.string('profilePicture', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('relations').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('relations', function (relation) {
      relation.increments('id').primary();
      relation.integer('user1id');
      relation.integer('user2id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('allRequests').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('allRequests', function (request) {
      request.increments('id').primary();
      request.string('requestor', 255);
      request.string('requestee', 255);
      request.string('requestTyp', 255);
      request.string('movie', 255);
      request.string('message', 255);
      request.string('response', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9kYkNvbm5lY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE9BQU8sUUFBUSxNQUFSLEVBQWdCO0FBQ3pCLFVBQVEsT0FEaUI7Ozs7Ozs7Ozs7QUFXekIsY0FBWTtBQUNWLFVBQVcsa0NBREQ7QUFFVixVQUFXLGdCQUZEO0FBR1YsY0FBVyxVQUhEO0FBSVYsY0FBVztBQUpEO0FBWGEsQ0FBaEIsQ0FBWDs7QUFtQkEsSUFBSSxLQUFLLFFBQVEsV0FBUixFQUFxQixJQUFyQixDQUFUOztBQUVBLEdBQUcsSUFBSCxDQUFRLE1BQVIsQ0FBZSxRQUFmLENBQXdCLFFBQXhCLEVBQWtDLElBQWxDLENBQXVDLFVBQVMsTUFBVCxFQUFpQjtBQUN0RCxNQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsT0FBRyxJQUFILENBQVEsTUFBUixDQUFlLFdBQWYsQ0FBMkIsUUFBM0IsRUFBcUMsVUFBVSxLQUFWLEVBQWlCO0FBQ3BELFlBQU0sT0FBTixDQUFjLElBQWQsRUFBb0IsT0FBcEI7QUFDQSxZQUFNLE1BQU4sQ0FBYSxPQUFiLEVBQXNCLEdBQXRCO0FBQ0EsWUFBTSxNQUFOLENBQWEsT0FBYixFQUFzQixHQUF0QjtBQUNBLFlBQU0sTUFBTixDQUFhLFFBQWIsRUFBdUIsR0FBdkI7QUFDQSxZQUFNLE1BQU4sQ0FBYSxjQUFiLEVBQTZCLEdBQTdCO0FBQ0EsWUFBTSxNQUFOLENBQWEsYUFBYixFQUE0QixHQUE1QjtBQUNBLFlBQU0sT0FBTixDQUFjLFlBQWQ7QUFDRCxLQVJELEVBU0MsR0FURCw0Q0FVQyxJQVZELENBVU0sVUFBVSxLQUFWLEVBQWlCO0FBQ3JCLGNBQVEsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBN0I7QUFDRCxLQVpEO0FBYUQ7QUFDRixDQWhCRDs7QUFrQkEsR0FBRyxJQUFILENBQVEsTUFBUixDQUFlLFFBQWYsQ0FBd0IsU0FBeEIsRUFBbUMsSUFBbkMsQ0FBd0MsVUFBUyxNQUFULEVBQWlCO0FBQ3ZELE1B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LEtBQTdCO0FBQ0QsS0FWRDtBQVdEO0FBQ0YsQ0FkRDs7QUFnQkEsT0FBTyxPQUFQLEdBQWlCLEVBQWpCIiwiZmlsZSI6ImRiQ29ubmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBrbmV4ID0gcmVxdWlyZSgna25leCcpKHtcbiAgY2xpZW50OiAnbXlzcWwnLFxuICAvLyBjb25uZWN0aW9uOiB7XG4gIC8vICAgaG9zdCAgICAgOiAnMTI3LjAuMC4xJyxcbiAgLy8gICB1c2VyICAgICA6ICdyb290JyxcbiAgLy8gICBwYXNzd29yZCA6ICcxMjM0NScsXG4gIC8vICAgZGF0YWJhc2UgOiAnTWFpbkRhdGFiYXNlJyxcbiAgLy8gICBjaGFyc2V0ICA6ICd1dGY4J1xuXG4gIC8vIH1cblxuICBjb25uZWN0aW9uOiB7XG4gICAgaG9zdCAgICAgOiAndXMtY2Rici1pcm9uLWVhc3QtMDQuY2xlYXJkYi5uZXQnLFxuICAgIHVzZXIgICAgIDogJ2I0MTkyOGFhOWQ2ZTNjJyxcbiAgICBwYXNzd29yZCA6ICc1YTcyMDA5ZicsXG4gICAgZGF0YWJhc2UgOiAnaGVyb2t1Xzc1ZTRmZjI5NWMyNzU4ZCdcbiAgfVxufSk7XG5cbnZhciBkYiA9IHJlcXVpcmUoJ2Jvb2tzaGVsZicpKGtuZXgpO1xuXG5kYi5rbmV4LnNjaGVtYS5oYXNUYWJsZSgnbW92aWVzJykudGhlbihmdW5jdGlvbihleGlzdHMpIHtcbiAgaWYgKCFleGlzdHMpIHtcbiAgICBkYi5rbmV4LnNjaGVtYS5jcmVhdGVUYWJsZSgnbW92aWVzJywgZnVuY3Rpb24gKG1vdmllKSB7XG4gICAgICBtb3ZpZS5pbnRlZ2VyKCdpZCcpLnByaW1hcnkoKTtcbiAgICAgIG1vdmllLnN0cmluZygndGl0bGUnLCAyNTUpO1xuICAgICAgbW92aWUuc3RyaW5nKCdnZW5yZScsIDI1NSk7XG4gICAgICBtb3ZpZS5zdHJpbmcoJ3Bvc3RlcicsIDI1NSk7XG4gICAgICBtb3ZpZS5zdHJpbmcoJ3JlbGVhc2VfZGF0ZScsIDI1NSk7XG4gICAgICBtb3ZpZS5zdHJpbmcoJ2Rlc2NyaXB0aW9uJywgMjU1KTtcbiAgICAgIG1vdmllLmludGVnZXIoJ2ltZGJSYXRpbmcnKTtcbiAgICB9KVxuICAgIC5yYXcoYEFMVEVSIFRBQkxFIG1vdmllcyBBREQgRlVMTFRFWFQgKHRpdGxlKWApXG4gICAgLnRoZW4oZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBUYWJsZScsIHRhYmxlKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmRiLmtuZXguc2NoZW1hLmhhc1RhYmxlKCdyYXRpbmdzJykudGhlbihmdW5jdGlvbihleGlzdHMpIHtcbiAgaWYgKCFleGlzdHMpIHtcbiAgICBkYi5rbmV4LnNjaGVtYS5jcmVhdGVUYWJsZSgncmF0aW5ncycsIGZ1bmN0aW9uIChyYXRpbmcpIHtcbiAgICAgIHJhdGluZy5pbmNyZW1lbnRzKCdpZCcpLnByaW1hcnkoKTtcbiAgICAgIHJhdGluZy5pbnRlZ2VyKCdzY29yZScpO1xuICAgICAgcmF0aW5nLmludGVnZXIoJ21vdmllaWQnKTtcbiAgICAgIHJhdGluZy5pbnRlZ2VyKCd1c2VyaWQnKTtcbiAgICAgIHJhdGluZy5zdHJpbmcoJ3JldmlldycsIDI1NSk7XG4gICAgICByYXRpbmcudGltZXN0YW1wcygpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBUYWJsZScsIHRhYmxlKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmRiLmtuZXguc2NoZW1hLmhhc1RhYmxlKCd1c2VycycpLnRoZW4oZnVuY3Rpb24oZXhpc3RzKSB7XG4gIGlmICghZXhpc3RzKSB7XG4gICAgZGIua25leC5zY2hlbWEuY3JlYXRlVGFibGUoJ3VzZXJzJywgZnVuY3Rpb24odXNlcikge1xuICAgICAgdXNlci5pbmNyZW1lbnRzKCdpZCcpLnByaW1hcnkoKTtcbiAgICAgIHVzZXIuc3RyaW5nKCd1c2VybmFtZScsIDI1NSkudW5pcXVlKCk7XG4gICAgICB1c2VyLnN0cmluZygncGFzc3dvcmQnLCAyNTUpO1xuICAgICAgdXNlci5zdHJpbmcoJ2VtYWlsJywgMjU1KTtcbiAgICAgIHVzZXIuc3RyaW5nKCdmaXJzdE5hbWUnLCAyNTUpO1xuICAgICAgdXNlci5zdHJpbmcoJ2xhc3ROYW1lJywgMjU1KTtcbiAgICAgIHVzZXIuc3RyaW5nKCdwcm9maWxlUGljdHVyZScsIDI1NSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIFRhYmxlJywgdGFibGUpO1xuICAgIH0pO1xuICB9XG59KTtcblxuZGIua25leC5zY2hlbWEuaGFzVGFibGUoJ3JlbGF0aW9ucycpLnRoZW4oZnVuY3Rpb24oZXhpc3RzKSB7XG4gIGlmICghZXhpc3RzKSB7XG4gICAgZGIua25leC5zY2hlbWEuY3JlYXRlVGFibGUoJ3JlbGF0aW9ucycsIGZ1bmN0aW9uKHJlbGF0aW9uKSB7XG4gICAgICByZWxhdGlvbi5pbmNyZW1lbnRzKCdpZCcpLnByaW1hcnkoKTtcbiAgICAgIHJlbGF0aW9uLmludGVnZXIoJ3VzZXIxaWQnKTtcbiAgICAgIHJlbGF0aW9uLmludGVnZXIoJ3VzZXIyaWQnKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgVGFibGUnLCB0YWJsZSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5kYi5rbmV4LnNjaGVtYS5oYXNUYWJsZSgnYWxsUmVxdWVzdHMnKS50aGVuKGZ1bmN0aW9uKGV4aXN0cykge1xuICBpZiAoIWV4aXN0cykge1xuICAgIGRiLmtuZXguc2NoZW1hLmNyZWF0ZVRhYmxlKCdhbGxSZXF1ZXN0cycsIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgIHJlcXVlc3QuaW5jcmVtZW50cygnaWQnKS5wcmltYXJ5KCk7XG4gICAgICByZXF1ZXN0LnN0cmluZygncmVxdWVzdG9yJywgMjU1KTtcbiAgICAgIHJlcXVlc3Quc3RyaW5nKCdyZXF1ZXN0ZWUnLCAyNTUpO1xuICAgICAgcmVxdWVzdC5zdHJpbmcoJ3JlcXVlc3RUeXAnLCAyNTUpO1xuICAgICAgcmVxdWVzdC5zdHJpbmcoJ21vdmllJywyNTUpO1xuICAgICAgcmVxdWVzdC5zdHJpbmcoJ21lc3NhZ2UnLCAyNTUpO1xuICAgICAgcmVxdWVzdC5zdHJpbmcoJ3Jlc3BvbnNlJywgMjU1KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgVGFibGUnLCB0YWJsZSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuXG5cblxuIl19
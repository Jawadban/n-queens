/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// this is a cheeky version of solving the problem. 
window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  
  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //input = n
  // output number of sol
  // constraints ; 
  // edge cases
  var board = new Board({n: n});
  var solutionCount = 0;

  var recursiveSol = function (rows) {
    if (rows === n) {
      solutionCount ++;
    }
    for (var i = 0; i < n; i ++) {
      board.togglePiece (rows, i);
      if (!board.hasAnyRooksConflicts()) {
        recursiveSol(rows + 1);
      }
      board.togglePiece (rows, i);
    }
  };
  recursiveSol(0);
  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     board.togglePiece(i, j);
  //      if (!board.hasAnyRooksConflicts()) {
  //       for (var k = 0; k < n; k ++) {
  //         board.togglePiece(j + 1, k);
  //         if (!board.hasAnyRooksConflicts()) {
  //           for (var l = 0; l < n; l ++) {
  //             board.togglePiece(j + 2, l);
  //             if (!board.hasAnyRooksConflicts()) {
  //               solutionCount ++;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

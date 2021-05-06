/* 
카카오 2019 겨울 인턴십 크레인 인형뽑기 게임

board에 역순으로 stacks 에 쌓고 해당 위치의 마지막 인형부터 basket에 담음
담길때 마지막에 담긴 인형과 담을 인형을 비교해서 같으면 지우고
사라진 인형 수를 2 증가 
*/

function solution(board, moves) {
    var answer = 0;
    var basket = [];
    var blocks = board.length;
    var stacks = Array.from(new Array(blocks+1), () => []);

    for (var i = blocks-1; i >= 0; i--) {
        board[i].forEach((value, index) => {
            if (value > 0) {
                stacks[index+1].push(value);
            }
        })
    }
    moves.forEach(point => {
        var picked = stacks[point].pop();
        var last = basket[basket.length-1];
        if (picked) {
            if (last == picked) {
                basket.pop();
                answer+=2;
            } else {
                basket.push(picked);
            }
        }
    })
    

    return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))
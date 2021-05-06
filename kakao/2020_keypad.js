/*
카카오 2020 인턴쉽 키패드 누르기 문제 풀이
*/ 

// 키패드 이동거리 (x - y) / 3 + (x - y) % 3 
function distance(a, b) {
    var diff = Math.abs(a - b);

    return Math.floor(diff / 3 + diff % 3);
}

/*
1, 4, 7 을 3으로 나눈 나머지는 1 / 3, 6, 9를 3으로 나눈 나머지는 0
1 = 왼손(L), 0 = 오른손(R)
* = 10, 0 = 11, # = 12 로 정의
*/
function solution(numbers, hand) {
    var answer = [];
    var position = [12, 10];
    var hands = ['R', 'L'];
    var base_hand_index = hands.indexOf(hand.substr(0, 1).toUpperCase());

    answer = numbers.map(number => {
        if (number == 0) {
            number = 11;
        }
        var pos = number % 3;
        if (pos == 2) {
            var diff = distance(number, position[0]) - distance(number, position[1]);
            pos = diff == 0
                    ? base_hand_index 
                    : (diff > 0 ? 1 : 0);
        }
        
        position[pos] = number;
        return hands[pos];

    })

    return answer.join('');
}

console.log(
    // solution(5, [2,4], [5,3,1]),
    solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'),
    // solution(2, [2], [2]),
    // solution(5, [2,3,4], [1,2,3]),
);
/*
스택/큐 > 다리를 지나는 트럭
*/

function solution(bridge_length, weight, truck_weights) {

    var answer = 0;
    var leave_trucks = [];
    var current_weight = 0;
    var truck_length = truck_weights.length;
    var distances = Array(bridge_length).fill(0);
    while (leave_trucks.length < truck_length) {
        var truck = truck_weights[0];
        var leave_truck = distances.shift();
        if (leave_truck > 0) {
            leave_trucks.push(leave_truck);
            current_weight -= leave_truck;
        }
        if (current_weight + truck <= weight) {
            truck_weights.shift();
            distances.push(truck);
            current_weight += truck;
        } else {
            distances.push(0);
        }
        answer++;
    }

    return answer;
}


//var ans = solution2(2, 10, [7,4,5,6]);
//var ans = solution2(100, 100, [10]);
var ans = solution(100, 100, [10,10,10,10,10,10,10,10,10,10]);

console.log("result: " + ans)

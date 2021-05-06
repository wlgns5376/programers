/*
스택/큐 > 기능개발
개발을 진행하고 
첫번째 개발이 완료되면 빼내고 배포 수 증가 
*/
function solution(progresses, speeds) {
    var answer = [];
    var deploy = 0
    while (progresses.length > 0) {
        if (progresses[0] >= 100) {
            progresses.shift()
            speeds.shift()
            deploy++
            continue
        }
        if(deploy > 0){
            answer.push(deploy)
            deploy = 0
        }

        progresses.forEach((pr, i) => {
            if(pr < 100) {
                progresses[i] = pr+speeds[i]
            }
        })
        
    }

    if(deploy > 0){
        answer.push(deploy)
    }

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
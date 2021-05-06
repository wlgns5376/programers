/*
2018 KAKAO BLIND RECRUITMENT > [1차] 다트 게임
*/
function solution(dartResult) {
    var area_points = {
        'S': 1,
        'D': 2,
        'T': 3,
    };
    var point_results = [...dartResult.matchAll(/([0-9]+)([STD])([*#]?)/g)].reduce((acc, c, i) => {
        var point = Math.pow(parseInt(c[1]), area_points[c[2]]);
        switch(c[3]) {
            case '*':
                if (i > 0) {
                    acc[i-1] *= 2;
                }
                point *= 2;
                break;
            case '#':
                point *= -1;
                break;
        }
        acc.push(point);
        return acc;
    }, [])

    return point_results.reduce((acc, c) => acc+c);
}
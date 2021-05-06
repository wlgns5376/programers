/*
2021 KAKAO BLIND RECRUITMEMT > 메뉴 리뉴얼
*/
function solution(orders, course) {
    var courses = {}
    var max_cources = {};

    orders.forEach(order => {
        var menus = order.split('').sort();
        menus.reduce((acc, c) => {
            acc.forEach(v => {
                var key = v+c;
                var key_length = key.length;
                if (course.indexOf(key_length) > -1) {
                    courses[key] = courses[key] ? courses[key] + 1 : 1;
                    max_cources[key_length] = max_cources[key_length]
                                            ? Math.max(courses[key], max_cources[key_length])
                                            : courses[key];
                }
                acc.push(key);
            })

            acc.push(c);

            return acc;
        }, []);
    });

    var answer = [];

    for (var c in courses) {
        if (courses[c] > 1 && courses[c] == max_cources[c.length]) {
            answer.push(c);
        }
    }
    
    return answer.sort();
}
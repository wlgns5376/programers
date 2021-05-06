/*
2021 KAKAO BLIND RECRUITMEMT > 순위 검색
*/
function solution(info, query) {
    var answer = [];
    var indexes = {
        "points": []
    };
    var sorted_index = {}

    info.forEach(form => {
        var forms = form.split(' ');
        var point = forms.pop();
        
        point = parseInt(point);

        forms.reduce((acc, c, i) => {
            acc.forEach(col => {
                var key = col+'_'+c;
                indexes[key] ? indexes[key].push(point) : indexes[key] = [point];
                acc.push(key);
            })

            indexes[c] ? indexes[c].push(point) : indexes[c] = [point];
            acc.push(c);
            return acc;
        }, [])
        indexes.points.push(point)
    });

    info = null;

    query.forEach(qry => {
        var query = qry.replace(/(and|-) /g, '').split(' ');
        var point = query.pop();
        var index = query.join('_') || 'points';

        var points = indexes[index] || [];
        var size = points.length;
        if (size == 0) {
            answer.push(0);
        } else {
            if (!sorted_index[index]) {
                points.sort((a, b) => a - b);
                sorted_index[index] = true;
            }
            answer.push(size - lower_bound(points, point, 0, size));   
        }
        
    });
    
    return answer;
}

function lower_bound(arr, target, start, end) {
    if (start < end) {
        var center = parseInt(start + (end - start) / 2);
        if (arr[center] >= target) {
            return lower_bound(arr, target, start, center);
        }
        return lower_bound(arr, target, center + 1, end);
    }

    return start;
}
var genres = ["classic", "pop", "classic", "classic", "pop"];
var plays =	[500, 600, 600, 800, 2500];
var result = [4, 1, 3, 0];

/*
장르별 총 재생 수
장르별 총 재생 수가 큰 순으로 검색
각 장르별 많이 재생된 2곡을 찾아옴

많이 재생된 장르 순서 = [pop, classic]



classic = [500, 0, 150, 800, 0]
classic index = [3, 0, 2, ]
pop = [0, 600, 0, 0, 2500]
pop = [4, 1, ..]

pop = 3100
classic = 1450
*/


function solution(genres, plays) {
    var answer = [];
    var genres_plays = {};

    var genres_play_total = genres.reduce((acc, c, i) => {
        genres_plays[c] ? genres_plays[c].push([i, plays[i]]) : genres_plays[c] = [[i, plays[i]]];
        //acc[c] = acc[c] ? acc[c]+plays[i] : plays[i];

        return acc.set(c, acc.get(c) ? acc.get(c)+plays[i] : plays[i]);
    }, new Map());

    ([...genres_play_total]).sort((a, b) => b[1]-a[1])
        .map(gp => {
            answer = answer.concat(genres_plays[gp[0]].sort((a, b) => b[1]-a[1]).map(v => v[0]).slice(0, 2))
        })

    return answer;
}

var ans = solution(genres, plays);

console.log("result: ", ans);
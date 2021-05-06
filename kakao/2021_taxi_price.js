/*
2021 KAKAO BLIND RECRUITMEMT > 합승 택시 요금
*/
function solution(n, s, a, b, fares) {
    var max_i = Number.MAX_SAFE_INTEGER;
    var answer = max_i;
    var adj = Array.from(Array(n+1), () => Array(n+1).fill(max_i))
    fares.forEach(fare => {
        adj[fare[0]][fare[1]] = fare[2];
        adj[fare[1]][fare[0]] = fare[2];
    })
    for(var k=1; k<=n; k++){
        for(var i=1; i<=n; i++){
            for(var j=1; j<=n; j++){
                adj[i][j] = i != j ? Math.min(adj[i][j], adj[i][k] + adj[k][j]) : 0;
            }
        }
    }       
    for(var k=1; k<=n; k++){
        answer = Math.min(answer, adj[s][k] + adj[k][a] + adj[k][b]);
    }

    return answer;
}
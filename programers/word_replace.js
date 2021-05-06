/*
깊이/너비 우선 탐색(DFS/BFS) > 단어 변환
*/
function solution(begin, target, words) {
    var answer = 0;
    
    if (words.indexOf(target) == -1) {
        return answer;
    }

    var changed = []
    dfs(begin, target, words, changed)
    
    if (changed.length) {
        answer = changed[0].length
    }

    return answer;
}

function dfs(begin, target, words, changed) {
    if (begin == target) {
        if (changed.length > 1) {
            changed[0].length <= changed[1].length ? changed.pop() : changed.shift();
        }
        return;
    }
    var change = changed.pop() || []
    for(var i=0; i<words.length; i++) {
        if (change.indexOf(words[i]) > -1) {
            continue;
        }
        if (other_count(begin, words[i]) == 1) {
            changed.push([...change, words[i]])
            dfs(words[i], target, words, changed)
        }
    }
}

function other_count(begin, target) {
    var begin = begin.split('');
    var target = target.split('');
    var count = 0;
    for(var i=0; i<target.length; i++) {
        if(begin[i] != target[i]) { 
            count++;
        }
    }

    return count;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
document.getElementById('submit-quiz').addEventListener('click', function() {
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    
    if (q1 && q2) {
        var score = 0;
        
        if (q1.id === 'q1a2') {
            score++;
        }
        
        if (q2.id === 'q2a1') {
            score++;
        }
        
        var resultsDiv = document.getElementById('quiz-results');
        resultsDiv.innerHTML = 'Quiz Results: You scored ' + score + ' out of 2.';
    } else {
        alert('Please answer all questions.');
    }
});

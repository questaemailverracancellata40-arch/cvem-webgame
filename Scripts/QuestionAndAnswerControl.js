function setQuestion(isSettingSwitchQuestion){
	var targetQuestion = null;
	
	if(isSettingSwitchQuestion == false){
		targetQuestion = window.GameVariables.QuestionsAndAnswers[window.GameVariables.QuestionLevel - 1];
	}
	else{
		targetQuestion = window.GameVariables.SwitchQuestionsAndAnswers[window.GameVariables.QuestionLevel - 1];
	}
	
	window.GameVariables.CurrentCorrectAnswer = targetQuestion.CorrectAnswer;
	
	$('.questionTd').html(targetQuestion.Question);
	$('#answerA .answerP').html(targetQuestion.AnswerA);
	$('#answerB .answerP').html(targetQuestion.AnswerB);
	$('#answerC .answerP').html(targetQuestion.AnswerC);
	$('#answerD .answerP').html(targetQuestion.AnswerD);
}

function revealQuestionAndAnswerStraps(){
	$('.answerStrapDiv').css('opacity', 1);
	$('.questionStrapDiv').css('opacity', 1);
	
	if(window.GameVariables.IsSTQLifeLineActiveAtStart == true){
		window.GameVariables.IsSTQLifeLineActiveAtStart = false;
		showLifeLineCentered('#stqLifeLineCenterImg');
	}
}

function hideQuestionAndAnswerStraps(){
	$('.answerStrapDiv').css('opacity', 0);
	$('.questionStrapDiv').css('opacity', 0);
	clearTimeout(window.GameVariables.ShowAnswerTimeout);
}

function revealAnswersOneByOne(){
	window.GameVariables.RevealAnswerCounter++;
	
	if(window.GameVariables.RevealAnswerCounter == 1){
		$('#answerA .letterP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerA .answerP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerA .diagonalImg').transition({perspective:0,opacity:1}, 150, 'linear');
	}
	else if(window.GameVariables.RevealAnswerCounter == 2){
		$('#answerB .letterP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerB .answerP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerB .diagonalImg').transition({perspective:0,opacity:1}, 150, 'linear');
	}
	else if(window.GameVariables.RevealAnswerCounter == 3){
		$('#answerC .letterP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerC .answerP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerC .diagonalImg').transition({perspective:0,opacity:1}, 150, 'linear');
	}
	else if(window.GameVariables.RevealAnswerCounter == 4){
		$('#answerD .letterP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerD .answerP').transition({perspective:0,opacity:1}, 150, 'linear');
		$('#answerD .diagonalImg').transition({perspective:0,opacity:1}, 150, 'linear');
		window.GameVariables.RevealAnswerCounter = 0;
	}
}

function revealAllAnswersAtOnce(){
	$('#answerA .letterP, #answerB .letterP, #answerC .letterP, #answerD .letterP').transition({perspective:0,opacity:1}, 150, 'linear');
	$('#answerA .answerP, #answerB .answerP, #answerC .answerP, #answerD .answerP').transition({perspective:0,opacity:1}, 150, 'linear');
	$('#answerA .diagonalImg, #answerB .diagonalImg, #answerC .diagonalImg, #answerD .diagonalImg').transition({perspective:0,opacity:1}, 150, 'linear');
}

function lockInFinalAnswer(answer){
	$('#answer' + answer + ' .finalImg').transition({perspective:0,opacity:1}, 150, 'linear');
	$('#answer' + answer + ' .letterP').css('color', '#FFFFFF');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	window.GameVariables.QuestionSequenceCounter = 6;
}

function showFinalToCorrectAnswerStep1(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 200, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep2(answer);
	}, 200);
}

function showFinalToCorrectAnswerStep2(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 200, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep3(answer);
	}, 200);
}

function showFinalToCorrectAnswerStep3(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 200, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep4(answer);
	}, 200);
}

function showFinalToCorrectAnswerStep4(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 200, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep5(answer);
	}, 200);
}

function showFinalToCorrectAnswerStep5(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 200, 'linear');
}

function revealNormalToCorrectAnswerStep1(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 200, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep2(answer);
	}, 200);
}

function revealNormalToCorrectAnswerStep2(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 200, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/orange_diagonal.png');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep3(answer);
	}, 200);
}

function revealNormalToCorrectAnswerStep3(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 200, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep4(answer);
	}, 200);
}

function revealNormalToCorrectAnswerStep4(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 200, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/orange_diagonal.png');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep5(answer);
	}, 200);
}

function revealNormalToCorrectAnswerStep5(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 200, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
}

function resetAnswerStraps(){
	$('#answerA .letterP, #answerA .answerP').css('opacity', 0);
	$('#answerB .letterP, #answerB .answerP').css('opacity', 0);
	$('#answerC .letterP, #answerC .answerP').css('opacity', 0);
	$('#answerD .letterP, #answerD .answerP').css('opacity', 0);
	$('.finalImg, .correctImg, .diagonalImg').css('opacity', 0);
	$('.diagonalImg').attr('src', 'Images/orange_diagonal.png');
	$('.answerP').css('color','#FFFFFF');
	$('.letterP').css('color','#EA932C');
	$('#ataPercentStrapA').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapB').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapC').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapD').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	window.GameVariables.AnswerAIsOut = false;
	window.GameVariables.AnswerBIsOut = false;
	window.GameVariables.AnswerCIsOut = false;
	window.GameVariables.AnswerDIsOut = false;
	window.GameVariables.CurrentTargetAnswer = "";
}

function undoFinaledAnswer(){
	window.GameVariables.CurrentTargetAnswer = "";
	
	if(window.GameVariables.AnswerAIsOut == false){
		$('#answerA .finalImg').css('opacity', 0);
		$('#answerA .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerA .answerP').css('color','#FFFFFF');
		$('#answerA .letterP').css('color','#EA932C');
	}
	
	if(window.GameVariables.AnswerBIsOut == false){
		$('#answerB .finalImg').css('opacity', 0);
		$('#answerB .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerB .answerP').css('color','#FFFFFF');
		$('#answerB .letterP').css('color','#EA932C');
	}
	
	if(window.GameVariables.AnswerCIsOut == false){
		$('#answerC .finalImg').css('opacity', 0);
		$('#answerC .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerC .answerP').css('color','#FFFFFF');
		$('#answerC .letterP').css('color','#EA932C');
	}
	
	if(window.GameVariables.AnswerDIsOut == false){
		$('#answerD .finalImg').css('opacity', 0);
		$('#answerD .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerD .answerP').css('color','#FFFFFF');
		$('#answerD .letterP').css('color','#EA932C');
	}
}


















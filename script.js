// complete the given function

function palindrome(str){
	const len=str.length;
	for(i=0; i<length/2; i++){
		if(str[i]!=str[len-1-i]){
			alert('false');
		}
	}
	alert('true');
}
module.exports = palindrome

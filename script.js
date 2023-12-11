const extendHex = (shortHex) => {
  // write your code here
	let ans="#";
	for(let i=0;i<shortHex.length;i++){
		if(shortHex[i]=='#')continue;
		ans+=shortHex[i]+shortHex[i];
	}
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

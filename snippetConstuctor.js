{
	"Console Log" : {
		"prefix": "cl",
		"body": "console.log($1);",
		"description": "Console Log"
	},

	"arrow function": {
		"prefix": "arfn",
		"body": [
		  "const ${1:functionName} = ($2) =>{",
		  "  $3"
		  "}"
		],
		"description": "arrow function"
	 },
	 
	 "Named Function": {
		"prefix": "nfn",
		"body": [
		  "function ${1:functionName} ($2){",
		  "  $3",
		  "}"
		],
		"description": "Named Function"
	 },

	 "Array Method": {
		"prefix": "arrmth",
		"body": [
		  "${1|forEach,map,filter,reduce,some|}((${2:item})=>{",
		  "  $3",
		  "})"
		],
		"description": "Array Method"
	 },
	 "Axios Request": {
		"prefix": "axrq",
		"body": [
		  "axios.${1|get,post,put,delete|}(\"${2:url}\")",
		  "  .then(res => res.data)",
		  "  mydata = res.data",
		  "  console.log(mydata)",
		  "  .catch(err => console.log(err));"
		],
		"description": "Axios Request"
	 },
	 "Fetch": {
		"prefix": "fetch",
		"body": [
		  "  useEffect(() => {",
		  "    const url = '$1url'",
		  "    fetch(url)",
		  "      .then(response => response.json())",
		  "      .then(data => {",
		  "        setCountries(data)",
		  "      })",
		  "  }, [])"
		],
		"description": "Fetch"
	 }
}

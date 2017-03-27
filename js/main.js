function getInfo(){
	var signs = [
	{
		sign: "Aquarius",
		info: "Aquarius is an air sign, and as such, uses their mind at every opportunity. If there is no mental stimulation, they are bored and lack a motivation to achieve the best result."
	},
	{
		sign: "Pisces",
		info: "People born under the Pisces sign have an intuitive understanding of the life cycle and thus achieve the best emotional relationship with other beings."
	},
	{
		sign: "Aries",
		info: "Aries rules the head and leads with the head, often literally walking head first, leaning forwards for speed and focus. Its representatives are naturally brave and rarely afraid of trial and risk. They possess youthful strength and energy, regardless of their age and quickly perform any given tasks."

	},
	{
		sign: "Taurus",
		info: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures."
	},
	{
		sign: "Gemini",
		info: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless."
	},
	{
		sign: "Cancer",
		info: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close."
	},
	{
		sign: "Leo",
		info: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."

	},
	{
		sign: "Virgo",
		info: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world."
	},
	{
		sign: "Libra",
		info: "People born under the sign of Libra are peaceful and fair, and they hate being alone. Partnership is very important for Libra -born, and with their victorious mentality and cooperation, they cannot stand to be alone. The Libra is an Air sign, with expressed intellect and a keen mind."

	},
	{
		sign: "Scorpio",
		info: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
	},
	{
		sign: "Sagittarius",
		info: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life."
	},
	{
		sign: "Capricorn",
		info: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives."
	}
	]
var signsInput = document.getElementById('sign').value

for (var i = 0; i < signs.length; i++) {
	if(signs[i].sign == signsInput){
		document.write(signs[i].info)
		return
	}
}
document.write("Sorry that is not a valid sign")
}

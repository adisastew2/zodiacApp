// zodiac constructor
function zodiac(name, element, strength, weak, bio, image) {
	this.name = name;
	this.element = element;
	this.strength = strength;
	this.weak = weak;
	this.bio = bio;
	this.image = image;
}
// zodiac objects (add insults)
var aquarius = new zodiac(
	"Aquarius", "Air", 
	"Progressive, original, independent, humanitarian", 
	"Runs from emotional expression, temperamental, uncompromising, aloof",
	"Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities. Aquarius is an air sign, and as such, uses his mind at every opportunity. If there is no mental stimulation, they are bored and lack a motivation to achieve the best result. The ruling planet of Aquarius, Uranus has a timid, abrupt and sometimes aggressive nature, but it also gives Aquarius visionary quality. They are capable of perceiving the future and they know exactly what they want to be doing five or ten years from now. Uranus also gave them the power of quick and easy transformation, so they are known as thinkers, progressives and humanists. They feel good in a group or a community, so they constantly strive to be surrounded by other people. The biggest problem for Aquarius-born is the feeling that they are limited or constrained. Because of the desire for freedom and equality for all, they will always strive to ensure freedom of speech and movement. Aquarius-born have a reputation for being cold and insensitive persons, but this is just their defence mechanism against premature intimacy. They need to learn to trust others and express their emotions in a healthy way.",
	"img/aquarius.jpg")

var pisces = new zodiac(
	"Pisces", "Water",
	"Compassionate, artistic, intuitive, gentle, wise, musical",
	"Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
	"Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity. Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring. People born under the Pisces sign have an intuitive understanding of the life cycle and thus achieve the best emotional relationship with other beings. Pisces-born are known by their wisdom, but under the influence of Uranus, Pisces sometimes can take the role of a martyr, in order to catch the attention. Pisces are never judgmental and always forgiving. They are also known to be most tolerant of all the zodiac signs.",
	"img/pisces.png")

var aries = new zodiac(
	"Aries", "Fire",
	"Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
	"Impatient, moody, short-tempered, impulsive, aggressive",
	"As the first sign in the zodiac, the presence of Aries almost always marks the beginning of something energetic and turbulent.They are continuously looking for dynamic, speed and competition. They are always first in everything - from work to social gatherings. Thanks to its ruling planet Mars, Aries is one of the most active zodiac signs. People born under the Aries sign, are meant to emphasize the search for answers to personal and metaphysical questions. This is the biggest feature of this incarnation. Aries is a fire sign, just like Leo and Sagittarius. This means that it is in their nature to take action, sometimes before they think about it well. Their fiery ruler affects their excellent organizational skills, so you'll rarely meet an Aries who doesn't like to finish more things at once, often even before the lunch break! The challenges are increased when they are impatient, aggressive and vent anger on others. Aries rules the head and leads with the head, often literally walking head first, leaning forwards for speed and focus. They are naturally brave and rarely afraid of trial and risk. They possess youthful strength and energy, regardless of age and they perform tasks in record time. By aligning with themselves they could achieve the best results",
	"img/aries.jpg")

var taurus = new zodiac(
	"Taurus", "Earth",
	"Reliable, patient, practical, devoted, responsible, stable",
	"Stubborn, possessive, uncompromising",
	"Powerful and reliable, Taurus is the first when it comes to harvesting the fruits of his labor. They love everything that is good and beautiful, and they are often surrounded by material pleasures. People born under the Taurus sign are very sensual and tactile. Touch is extremely important for them, both in business and in romance. Stable and conservative, Taurus is among the most reliable signs of the zodiac. Stubbornness is a trait that is forcing him to expel things to the end, in order to comply with the standards. As an earth sign, Taurus can be overprotective of their loved ones. They are great in making money and they will stick to their projects until it is successfully completed. Bulls are often known for their stubbornness, but it can also be interpreted as a complete commitment to the execution of tasks. This makes them excellent workers and great friends, because they are always there, no matter what. Their ruling planet Venus, represents love, attraction, beauty and creativity. Thus, Taurus can be an excellent cook, entertainer and artist. He is loyal and doesn't like sudden and unwanted changes. Taurus is the most dependable sign of the zodiac. Although some may have very conservative views of the world or can be too fond of money and wealth, they have the ability to bring practical voice of reason in any chaotic and unhealthy situation.",
	"img/taurus.jpg")

var gemini = new zodiac(
	"Gemini", "Air",
	"Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
	"Nervous, inconsistent, indecisive",
	"Expressive and quick-witted, Gemini represents two different sides of personality and you will never be sure with whom you will face. Gemini can be sociable,communicative and ready for fun, while on the other hand it can be very serious, thoughtful, restless and even indecisive. As an air sign, Gemini is concerned with all aspects of the mind. This zodiac sign is ruled by Mercury, which is a planet that represents communication, writing and teaching others. They get fascinated by almost everything in the world and they have a feeling as if there is not enough time to experience everything they want to see. This makes them excellent artists, writers and journalists. Gemini sign means that sometimes people born under this sign have a feeling that their other half is missing, so they are forever seeking for new friends, mentors and colleagues. Gemini is versatile, inquisitive, fun loving and wants to experience everything out there, so their company is never boring.",
	"img/gemini.jpg")

var cancer = new zodiac(
	"Cancer", "Water",
	"Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
	"Moody, pessimistic, suspicious, manipulative, insecure",
	"Deeply intuitive and sentimental, Cancer can be one of the most challenging Zodiac signs to get to know. Cancer is very emotional and sensitive, and they care about family and home. Cancer is sympathetic and is very attached to the people who surround him. People born under the Cancer sign are very loyal and empathetic people, able to empathize with your pain and suffering. Because of the ruling planet the Moon, the many phases of its lunar cycle can deepen Cancers internal mysteries and create fleeting emotional patterns that the sensitive Cancer cannot control, especially when a child. This can show itself as mood swings, selfishness, manipulation and fits of rage. Cancer is quick to help others and avoid conflicts. One of his greatest strengths is persistent determination. Cancer doesn't have great ambitions, because they are happy and content to have a loving family and tranquil and harmonious home. They often take good care of their co-workers and treat them as family.",
	"img/cancer.jpg")

var leo = new zodiac(
	"Leo", "Fire",
	"Creative, passionate, generous, warm-hearted, cheerful, humorous",
	"Arrogant, stubborn, self-centered, lazy, inflexible",
	"People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it's about work or time spent will family and friends. Leo is a fire sign, which means that he loves life and expects to have a good time. Like other fire signs, Sagittarius and Aries, Leo is also able to use his mind to solve even the most difficult problems and take the initiative in solving various complicated situations. Ruled by the Sun, Leo worships the Sun in all is forms which is also a metaphorical expression of the state of his ego. This can be good, because Leos can easily search for what they need. But, on the other hand it can be problematic when Leos ignore the problems and needs of others in order to fulfill their desires. Leo has a specific strength and 'king of the jungle' status. Leo often has too many friends because he is very generous and loyal. Self-confident and attractive, Leo is able to unite many groups of people at every opportunity. Problems can arise, when Leo becomes too fond of his achievements. This zodiac sign can also be arrogant, lazy and inflexible, because he assumes that someone else will clean up after him. A healthy sense of humor can make the collaboration with other people, easier.",
	"img/leo.jpg")

var virgo = new zodiac(
	"Virgo", "Earth",
	"Loyal, analytical, kind, hardworking, practical",
	"Shyness, worry, overly critical of self and others, all work and no play",
	"Virgos are always paying attention to smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance. Virgos are often tender but also very careful. Virgo is an Earth sign, which prefers conservative and organized things, and those dependent on them. People born under the Virgo sign have very organized life, and even if they are very messy, their goals and dreams are put on strictly defined points in their mind. Since Mercury is the ruling planet of Virgo, this sign has a well-developed sense of speech and writing, as well as all other forms of communication. Many Virgos may choose to pursue a career as a writer or journalist.Virgo is often misunderstood, because of the symbolism of the name of this sign. Virgo experiences everything for the first time. Virgos always want to serve and please others, so they often choose to work as caregivers. On the other hand, this zodiac sign sometimes can be very critical and overly concerned",
	"img/virgo.jpg")

var libra = new zodiac(
	"Libra", "Air",
	"Cooperative,diplomatic, gracious, fair-minded, social",
	"Indecisive, avoids confrontations, will carry a grudge, self-pity",
	"People born under the sign of Libra are peaceful and fair, and they hate being alone. Partnership is very important for Libra -born, and with their victorious mentality and cooperation, they cannot stand to be alone. The Libra is an Air sign, with expressed intellect and a keen mind. They can be inspired by good books, insurmountable discussions and interesting people. The ruling planet of Libra is Venus, who is a lover of beautiful things, so the quality is always more important than the quantity for people born under the Libra sign. They are often surrounded by art, music and beautiful places. They are cooperative by nature, so they often work in teams. Libra is fascinated by the balance and symmetry. Libra-born prefer justice and equality, and they cannot tolerate injustice. They avoid indulging in all types of conflicts and prefer to keep the peace, where this is possible. They like to do everything in pairs and not alone. The biggest problem for Libra-born, is when they are forced to choose sides, because they are very indecisive and sometimes they forget that they have their own opinion.",
	"img/libra.jpg")

var scorpio = new zodiac(
	"Scorpio", "Water",
	"Resourceful, brave, passionate, stubborn, a true friend",
	"Distrusting, jealous, secretive, violent",
	"Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be. Pluto is the planet of transformation and regeneration, and also the ruler of this zodiac sign. Scorpios are known by their calm and cool behavior, and by their mysterious appearance. People often say that Scorpio-born are fierce, probably because they understand very well the rules of the universe. Some Scorpio-born can look older than they actually are. They are excellent leaders because they are very dedicated to what they do. Scorpios hate dishonesty and they can be very jealous and suspicious, so they need to learn how to adapt more easily to different human behaviors. Scorpios are brave and therefore they have a lot of friends.",
	"img/scorpio.jpg")

var sagittarius = new zodiac(
	"Sagittarius", "Fire",
	"Generous, idealistic, great sense of humor",
	"Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
	"Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals. Like the other fire signs, Sagittarius needs to be constantly in touch with the world to experience as much as possible. The ruling planet of Sagittarius is Jupiter, the largest planet of the zodiac. Their enthusiasm has no bounds, and therefore people born under the Sagittarius sign possess a great sense of humor and an intense curiosity. Freedom is their greatest treasure, because only then they can freely travel and explore different cultures and philosophies. Because of their honesty, Sagittarius-born are often impatient and tactless when they need to say or do something, so it's important to learn to express themselves in a tolerant and socially acceptable way.",
	"img/sagittarius.jpg")

var capricorn = new zodiac(
	"Capricorn", "Earth",
	"Responsible, disciplined, self-control, good managers",
	"Know-it-all, unforgiving, condescending, expecting the worst",
	"When it comes to professionalism and traditional values, Capricorn is the first. Capricorn is practical and is considered to be the most serious sign of the zodiac, who possess an independence that enables significant progress both on the personal level and in business. As an Earth sign, for a Capricorn there is nothing more important in life than family. Capricorn is a master of self-control and has the potential to be a great leader or manager as long as it is in the sphere of business. Saturn is the ruling planet of Capricorn, and this planet represents restrictions of all kinds. The influence of Saturn makes Capricorn-born practical and responsible, so they know how to save money for the future.They are masters when they need to prove that they are right. People born under the Capricorn sign sometimes can be really stubborn. They strive to get to the top only with their experience. Problems may occur when the Capricorn is forced to be very close with his associates. Capricorn-born have a hard time accepting others' differences, and in these situations, there is a need to control people or to impose their traditionalist values. They think that they are the only ones who know how to solve a problem, but they must learn how to forgive others, to allow them to be who they are and to stop condemning them.",
	"img/capricorn.jpg")

function getInfo() {
	// get input from html form
	var month = document.getElementById("month").value
	var day = document.getElementById("day").value

	// access results div
	var name = document.getElementById("name")
	var element = document.getElementById("element")
	var image = document.getElementById("image")
	var strength = document.getElementById("strength")
	var weak = document.getElementById("weak")
	var bio = document.getElementById("bio")

	// if statement to push data
	if(month.toLowerCase() == "january"){
		if(day > 19 && day < 32){
			name.innerHTML = aquarius.name
			element.innerHTML = "Element: " + aquarius.element
			image.src = aquarius.image
			strength.innerHTML = "Strengths: " + aquarius.strength
			weak.innerHTML = "Weaknesses: " + aquarius.weak
			bio.innerHTML = aquarius.bio
		}
		else if(day > 0 && day < 20){
			name.innerHTML = capricorn.name
			element.innerHTML = "Element: " + capricorn.element
			image.src = capricorn.image
			strength.innerHTML = "Strengths: " + capricorn.strength
			weak.innerHTML = "Weaknesses: " + capricorn.weak
			bio.innerHTML = capricorn.bio
		}
	}
	else if(month.toLowerCase() == "february"){
		if(day > 0 && day < 19){
			name.innerHTML = aquarius.name
			element.innerHTML = "Element: " + aquarius.element
			image.src = aquarius.image
			strength.innerHTML = "Strengths: " + aquarius.strength
			weak.innerHTML = "Weaknesses: " + aquarius.weak
			bio.innerHTML = aquarius.bio
		}
		else if(day > 18 && day < 30){
			name.innerHTML = pisces.name
			element.innerHTML = "Element: " + pisces.element
			image.src = pisces.image
			strength.innerHTML = "Strengths: " + pisces.strength
			weak.innerHTML = "Weaknesses: " + pisces.weak
			bio.innerHTML = pisces.bio
		}
	}
	else if(month.toLowerCase() == "march"){
		if(day > 0 && day < 21){
			name.innerHTML = pisces.name
			element.innerHTML = "Element: " + pisces.element
			image.src = pisces.image
			strength.innerHTML = "Strengths: " + pisces.strength
			weak.innerHTML = "Weaknesses: " + pisces.weak
			bio.innerHTML = pisces.bio
		}
		else if(day > 20 && day < 32){
			name.innerHTML = aries.name
			element.innerHTML = "Element: " + aries.element
			image.src = aries.image
			strength.innerHTML = "Strengths: " + aries.strength
			weak.innerHTML = "Weaknesses: " + aries.weak
			bio.innerHTML = aries.bio
		}
	}
	else if(month.toLowerCase() == "april"){
		if(day > 0 && day < 20){
			name.innerHTML = aries.name
			element.innerHTML = "Element: " + aries.element
			image.src = aries.image
			strength.innerHTML = "Strengths: " + aries.strength
			weak.innerHTML = "Weaknesses: " + aries.weak
			bio.innerHTML = aries.bio
		}
		else if(day > 18 && day < 31){
			name.innerHTML = taurus.name
			element.innerHTML = "Element: " + taurus.element
			image.src = taurus.image
			strength.innerHTML = "Strengths: " + taurus.strength
			weak.innerHTML = "Weaknesses: " + taurus.weak
			bio.innerHTML = taurus.bio
		}
	}
	else if(month.toLowerCase() == "may"){
		if(day > 0 && day < 21){
			name.innerHTML = taurus.name
			element.innerHTML = "Element: " + taurus.element
			image.src = taurus.image
			strength.innerHTML = "Strengths: " + taurus.strength
			weak.innerHTML = "Weaknesses: " + taurus.weak
			bio.innerHTML = taurus.bio
		}
		else if(day > 20 && day < 32){
			name.innerHTML = gemini.name
			element.innerHTML = "Element: " + gemini.element
			image.src = gemini.image
			strength.innerHTML = "Strengths: " + gemini.strength
			weak.innerHTML = "Weaknesses: " + gemini.weak
			bio.innerHTML = gemini.bio
		}
	}


}



































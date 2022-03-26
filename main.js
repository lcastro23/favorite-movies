const movies = [
{
    name: "1917",
    director: "Sam Mendez",
    year: "2019",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg" 
},
{
    name: "The Hateful Eight",
    director: "Quentin Tarantino",
    year: "2015",
    image: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg" 
},
{
    name: "Django Unchained",
    director: "Quentin Tarantino",
    year: "2005",
    image: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg" 
},
];

list_elements = movies.map(generate_li);

		ol = document.querySelector("ol");

		for(i = 0; i < list_elements.length; i++)
		{
			ol.appendChild(list_elements[i]);
		}

		function generate_li(element)
		{
			var li = document.createElement("li");

			var name_paragraph = document.createElement("p");
			var director_paragraph = document.createElement("p");
			var year_paragraph = document.createElement("p");
			var image_paragraph = document.createElement("p");

			var name_value = document.createTextNode(element.name);
			var director_value = document.createTextNode(element.director);
			var year_value = document.createTextNode(element.year);

			var image_tag = document.createElement("img");
			image_tag.setAttribute("src", element.image);
			image_tag.setAttribute("alt", "Image not found");
			image_tag.setAttribute("height", 320);

			name_paragraph.appendChild(name_value);
			director_paragraph.appendChild(director_value);
			year_paragraph.appendChild(year_value);
			image_paragraph.appendChild(image_tag);

			li.appendChild(name_paragraph);
			li.appendChild(director_paragraph);
			li.appendChild(year_paragraph);
			li.appendChild(image_paragraph);

			return li;
		}

ol.innerHTML = template.join('');


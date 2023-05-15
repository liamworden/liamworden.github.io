document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        // Prevent the page from reloading
        e.preventDefault();
        let ingverb = document.querySelector('#ingverb').value;
        let noun1 = document.querySelector('#noun1').value;
        let celebrity = document.querySelector('#celebrity').value;
        let verb1 = document.querySelector('#verb1').value;
        let adjective = document.querySelector('#adjective').value;
        let noun2 = document.querySelector('#noun2').value;
        let verb2 = document.querySelector('#verb2').value;
        let trinket = document.querySelector('#trinket').value;
        let animal = document.querySelector('#animal').value;
        // Input the chosen words into the story
        story.innerHTML =
        `One day, Mr. Hirschhorn was ${ingverb} his ${noun1}, when all of a sudden he got a call on his phone
        from an unknown number. When Mr. Hirschhorn answered, it was ${celebrity}! He leaped up excitedly,
        and began to ${verb1}. His ${adjective} ${noun2} then fell on his girlfriend Emma's toes, and she began to
        ${verb2}. Saddened by this, Mr. Hirschhorn ran away into the woods, where he now eats ${trinket}s
        and plays poker with the ${animal}s.`;
    });
});
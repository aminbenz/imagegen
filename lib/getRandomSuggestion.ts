// Store the text in an array
export const suggestions = [
  "A futuristic laboratory filled with glowing screens and high-tech gadgets.",
  "A serene and peaceful beach with crystal clear waters and soft white sand.",
  "A mysterious island surrounded by impenetrable fog, with secrets waiting to be discovered.",
  "A magnificent sunset over a rolling countryside, with fields of golden wheat and gentle hills.",
  "An otherworldly landscape of towering cliffs and deep canyons, with a river snaking its way through the middle.",
  "A futuristic city with sleek and shiny buildings, bustling with energy and innovation.",
  "A cozy and rustic cabin in the woods, surrounded by towering trees and a peaceful river.",
  "A magical forest with twinkling lights and mysterious creatures, where anything is possible.",
  "A sprawling metropolis with endless buildings and endless possibilities.",
  "A peaceful garden filled with colorful flowers and the soft sound of trickling water.",
  "A peaceful river flowing gently through a lush valley, with mountains towering in the distance.",
  "An old, abandoned castle with crumbling walls and hidden secrets.",
  "A frozen tundra with towering ice formations and a frigid, unforgiving landscape.",
  "A bustling market filled with exotic sights, smells, and sounds.",
  "A peaceful meadow with gently swaying grass and chirping birds.",
  "A mysterious cave filled with ancient relics and dangerous creatures.",
  "A tranquil pond surrounded by weeping willows and peaceful solitude.",
  "A barren wasteland with nothing but sand and rocks as far as the eye can see.",
  "A majestic waterfall cascading down a rocky cliff, with mist and rainbows in the air.",
  "A futuristic spaceship hurtling through space, with stars and galaxies stretching out before it.",
  "A small village nestled in the hills, with quaint houses and friendly people.",
  "A haunted mansion filled with creaky floors, spooky noises, and restless spirits.",
  "A bustling train station with people rushing to catch their trains and say their goodbyes.",
  "A serene and peaceful orchard filled with ripe fruit and the scent of blossoming flowers.",
  "A peaceful countryside with rolling hills and fields of flowers as far as the eye can see.",
  "A dark and foreboding forest filled with shadowy creatures and hidden dangers.",
  "A lively concert with flashing lights and music that makes your heart race.",
  "A sprawling university campus filled with eager students and inspiring professors.",
  "A bustling airport filled with people coming and going from all over the world.",
  "A charming old town filled with historic buildings and narrow, winding streets.",
  "A dense jungle with towering trees and exotic animals lurking in the underbrush.",
  "A futuristic cityscape at night, with neon lights and high-tech gadgets everywhere you look.",
  "A bustling port city with ships of all sizes docked along the shore.",
  "A stunning cityscape with towering skyscrapers and bustling streets.",
];

// Create a function that returns a random choice from the array
export default function getRandomSuggessions() {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  return suggestions[randomIndex];
}

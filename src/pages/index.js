import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tile from "../components/tile";

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />

    <p>A site commited to displaying all the top fives of all types of 'thing' in the world!</p>

    <ul className="grid">


      <Tile title="Films from 1987" one="Withnail & I" two="The Princess Bride" three="Planes, Trains & Automobiles" four="Full Metal Jacket" five="Yogi Bear and the Magical Flight of the Spruce Goose" />
      <Tile title="Cartoon Dogs" one="Scooby Doo" two="Muttly" three="Goofy" four="Clifford" five="Snoopy" />
      <Tile title="Home remedies for a cold" one="Soup" two="Bath" three="Lucozade" four="Sleep" five="Honey & Lemon" />
      <Tile title="Sports" one="Snowboarding/Skiing" two="Bowling" three="Darts" four="Snooker" five="Go Karting" />
      <Tile title="Giant Animals" one="Blue Whale" two="Polar Bear" three="Elephant" four="Great White Shark" five="Hippo" />
      <Tile title="Aarons" one="Aaron Jones" two="Tech N9ne" three="Aaron Paul" four="Aaron Bridgers" five="Aaron Eckhart" />
      <Tile title="Owls" one="Owl (from Winnie the Pooh)" two="Eurasian eagle owl" three="Spotted wood owl" four="Cloud-forest pygmy owl" five="Snowy Owl" />
      <Tile title="Modes of Transport" one="Train" two="Motorbike" three="Snowboard" four="Dog-driven Sledge" five="Penny-farthing" />
      <Tile title="Kardashians" one="They" two="are" three="all" four="absolutely" five="awful" />
      <Tile title="Ladybird Books" one="The Elves and the Shoemaker" two="The Three Billy-Goats Gruff" three="The Three Little Pigs" four="Chicken Licken" five="Little Red Riding Hood" />
      <Tile title="Ladybird Predators" one="Assassin Bugs" two="Tree Frogs" three="Venus Trap" four="Mockingbirds" five="Praying Mantis" />
      <Tile title="Ladybirds" one="Psyllobora vigintiduopunctata" two="Seven-spot Ladybird (Classic)" three="Anatis ocellata" four="Adalia decempunctata" five="Eighteen-spotted ladybird" />
      <Tile title="Hand Dryers" one="Dyson Airblade V" two="ATC" three="ABIS Beyond Future" four="Xcelerator" five="AIKE" />
      <Tile title="Crisp Flavours" one="Black Pepper & Sea Salt" two="Thai Sweet Chilli" three="Paprika" four="Salt & Vinegar" five="Lime & Black Pepper (New Zealand)" />
      <Tile title="Daniels" one="Danny Boyle" two="Dan Aykroyd" three="Danny McBride" four="Daniel Dumile" five="All Daniels that aren't Daniel Attoe" />
      <Tile title="Desserts" one="Banoffee Pie" two="Eton Mess" three="Ice Cream" four="Rice Pudding (with Jam)" five="Angel Delight" />
      <Tile title="Songs by The Dubliners" one="Raglan Road" two="The Musical Priest" three="Dirty Old Town" four="School Days Over" five="McAlpines Fusiliers" />
      <Tile title="Alcoholic drinks" one="Guinness (Stout)" two="Jamesons (Whiskey)" three="Red Wine" four="IPA" five="Tequila" />
      <Tile title="SkyScrapers" one="Shard" two="Empire State Building" three="Gherkin" four="Chrysler Tower" five="One World Trade Center" />
      <Tile title="Breads" one="Olive Bread" two="Garlic Bread" three="Tiger Bread" four="Naan Bread" five="Soft Brown Bap" />
      <Tile title="Bridges" one="Waterloo Bridge" two="Hammersmith Bridge" three="Millenium Bridge" four="Brooklyn Bridge" five="Clifton Suspension Bridge" />
      <Tile title="Animals" one="Squirrel" two="Dog" three="Wolf" four="Tiger (White)" five="Seal" />      
      

    </ul>

  </Layout>
)

export default IndexPage

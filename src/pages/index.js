import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tile from "../components/tile";

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />

    <p>A site commited to displaying all the top fives of all types of 'thing' in the world!</p>

    <ul className="grid">
      <Tile title="Crisp Flavours" one="Black Pepper & Sea Salt" two="Thai Sweet Chilli" three="Paprika" four="Salt & Vinegar" five="Lime & Black Pepper (New Zealand)" />
      <Tile title="Daniels" one="Danny Boyle" two="Dan Aykroyd" three="Danny McBride" four="Daniel Dumile" five="All Daniels that aren't Daniel Attoe" />
      <Tile title="Deserts" one="Banoffee Pie" two="Eton Mess" three="Ice Cream" four="Rice Pudding (with Jam)" five="Angel Delight" />
      <Tile title="Songs by The Dubliners" one="Raglan Road" two="The Musical Priest" three="Dirty Old Town" four="School Days Over" five="McAlpines Fusiliers" />
      <Tile title="Alcoholic drinks" one="Guiness (Stout)" two="Jamesons (Whiskey)" three="Red Wine" four="IPA" five="Tequila" />
      <Tile title="SkyScrapers" one="Shard" two="Empire Estate Building" three="Gherkin" four="Chrysler Tower" five="One World Trade Center" />
      <Tile title="Breads" one="Olive Bread" two="Garlic Bread" three="Tiger Bread" four="Naan Bread" five="Soft Brown Bap" />
      <Tile title="Bridges" one="Waterloo Bridge" two="Hammersmith Bridge" three="Millenium Bridge" four="Brooklyn Bridge" five="Clifton Suspension Bridge" />
      <Tile title="Animals" one="Squirrel" two="Dog" three="Wolf" four="Tiger (White)" five="Seal" />      
      
    </ul>

  </Layout>
)

export default IndexPage

import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tile from "../components/tile";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>A site commited to displaying all the top fives of all types of 'thing' in the world!</p>
    <ul className="grid">
      <Tile title="Animals" one="Squirrel" two="Dog" three="Wolf" four="Tiger (White)" five="Seal" />
      <Tile title="Bridges" one="Waterloo Bridge" two="Hammersmith Bridge" three="Millenium Bridge" four="Brooklyn Bridge" five="Clifton Suspension Bridge" />
      <Tile title="Breads" one="Olive Bread" two="Garlic Bread" three="Tiger Bread" four="Naan Bread" five="Soft Brown Bap" />
      <Tile title="SkyScrapers" one="Shard" two="Empire Estate Building" three="Gherkin" four="Chrysler Tower" five="One World Trade Center" />
      <Tile title="Alcoholic drinks" one="Guiness (Stout)" two="Jamesons (Whiskey)" three="Red Wine" four="IPA" five="Tequila" />
      <Tile title="Songs by The Dubliners" one="Raglan Road" two="The Musical Priest" three="Dirty Old Town" four="School Days Over" five="Skibereen" />

    </ul>

  </Layout>
)

export default IndexPage

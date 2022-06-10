<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.4" name="arcade_platformer" tilewidth="216" tileheight="147" tilecount="667" columns="0">
 <editorsettings>
  <export target="arcade_platformer.tsx" format="tsx"/>
 </editorsettings>
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0">
  <image width="128" height="128" source="images/ground/Grass/grass.png"/>
 </tile>
 <tile id="1">
  <image width="128" height="128" source="images/ground/Grass/grassCenter_round.png"/>
 </tile>
 <tile id="2">
  <image width="128" height="128" source="images/ground/Grass/grassCenter.png"/>
 </tile>
 <tile id="3">
  <image width="128" height="128" source="images/ground/Grass/grassCliff_left.png"/>
 </tile>
 <tile id="4">
  <image width="128" height="128" source="images/ground/Grass/grassCliff_right.png"/>
 </tile>
 <tile id="5">
  <image width="128" height="128" source="images/ground/Grass/grassCliffAlt_left.png"/>
 </tile>
 <tile id="6">
  <image width="128" height="128" source="images/ground/Grass/grassCliffAlt_right.png"/>
 </tile>
 <tile id="7">
  <image width="128" height="128" source="images/ground/Grass/grassCorner_left.png"/>
 </tile>
 <tile id="8">
  <image width="128" height="128" source="images/ground/Grass/grassCorner_right.png"/>
 </tile>
 <tile id="9">
  <image width="128" height="128" source="images/ground/Grass/grassHalf_left.png"/>
 </tile>
 <tile id="10">
  <image width="128" height="128" source="images/ground/Grass/grassHalf_mid.png"/>
 </tile>
 <tile id="11">
  <image width="128" height="128" source="images/ground/Grass/grassHalf_right.png"/>
 </tile>
 <tile id="12">
  <image width="128" height="128" source="images/ground/Grass/grassHalf.png"/>
 </tile>
 <tile id="13">
  <image width="128" height="128" source="images/ground/Grass/grassHill_left.png"/>
  <objectgroup draworder="index">
   <object id="2" x="0.545455" y="0.909091">
    <polygon points="-0.545455,-0.909091 127.455,127.091 -0.545455,127.091"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="14">
  <image width="128" height="128" source="images/ground/Grass/grassHill_right.png"/>
  <objectgroup draworder="index">
   <object id="1" x="0" y="128">
    <polygon points="0,0 128,0 128,-128"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="15">
  <image width="128" height="128" source="images/ground/Grass/grassLeft.png"/>
 </tile>
 <tile id="16">
  <image width="128" height="128" source="images/ground/Grass/grassMid.png"/>
 </tile>
 <tile id="17">
  <image width="128" height="128" source="images/ground/Grass/grassRight.png"/>
 </tile>
 <tile id="29">
  <image width="128" height="128" source="images/HUD/hudHeart_empty.png"/>
 </tile>
 <tile id="30">
  <image width="128" height="128" source="images/HUD/hudHeart_full.png"/>
 </tile>
 <tile id="33">
  <image width="128" height="128" source="images/HUD/hudJewel_blue.png"/>
 </tile>
 <tile id="35">
  <image width="128" height="128" source="images/HUD/hudJewel_green.png"/>
 </tile>
 <tile id="37">
  <image width="128" height="128" source="images/HUD/hudJewel_red.png"/>
 </tile>
 <tile id="39">
  <image width="128" height="128" source="images/HUD/hudJewel_yellow.png"/>
 </tile>
 <tile id="41">
  <image width="128" height="128" source="images/HUD/hudKey_blue.png"/>
 </tile>
 <tile id="43">
  <image width="128" height="128" source="images/HUD/hudKey_green.png"/>
 </tile>
 <tile id="45">
  <image width="128" height="128" source="images/HUD/hudKey_red.png"/>
 </tile>
 <tile id="47">
  <image width="128" height="128" source="images/HUD/hudKey_yellow.png"/>
 </tile>
 <tile id="53">
  <image width="128" height="128" source="images/HUD/hudX.png"/>
 </tile>
 <tile id="54">
  <properties>
   <property name="point_value" type="int" value="5"/>
  </properties>
  <image width="128" height="128" source="images/items/coinBronze.png"/>
 </tile>
 <tile id="55">
  <properties>
   <property name="point_value" type="int" value="20"/>
  </properties>
  <image width="128" height="128" source="images/items/coinGold.png"/>
 </tile>
 <tile id="56">
  <properties>
   <property name="point_value" type="int" value="10"/>
  </properties>
  <image width="128" height="128" source="images/items/coinSilver.png"/>
 </tile>
 <tile id="60">
  <image width="128" height="128" source="images/items/flagGreen_down.png"/>
 </tile>
 <tile id="61">
  <image width="128" height="128" source="images/items/flagGreen1.png"/>
  <animation>
   <frame tileid="61" duration="250"/>
   <frame tileid="62" duration="250"/>
  </animation>
 </tile>
 <tile id="62">
  <image width="128" height="128" source="images/items/flagGreen2.png"/>
 </tile>
 <tile id="69">
  <image width="128" height="128" source="images/items/gemBlue.png"/>
 </tile>
 <tile id="70">
  <image width="128" height="128" source="images/items/gemGreen.png"/>
 </tile>
 <tile id="71">
  <image width="128" height="128" source="images/items/gemRed.png"/>
 </tile>
 <tile id="72">
  <image width="128" height="128" source="images/items/gemYellow.png"/>
 </tile>
 <tile id="77">
  <image width="128" height="128" source="images/items/star.png"/>
 </tile>
 <tile id="84">
  <image width="128" height="128" source="images/tiles/boxCrate_double.png"/>
 </tile>
 <tile id="95">
  <image width="128" height="128" source="images/tiles/brickBrown.png"/>
 </tile>
 <tile id="96">
  <image width="128" height="128" source="images/tiles/brickGrey.png"/>
 </tile>
 <tile id="104">
  <image width="128" height="128" source="images/tiles/doorOpen_mid.png"/>
 </tile>
 <tile id="105">
  <image width="128" height="128" source="images/tiles/doorOpen_top.png"/>
 </tile>
 <tile id="106">
  <image width="128" height="128" source="images/tiles/fence.png"/>
 </tile>
 <tile id="107">
  <image width="128" height="128" source="images/tiles/fenceBroken.png"/>
 </tile>
 <tile id="108">
  <image width="128" height="128" source="images/tiles/grass.png"/>
 </tile>
 <tile id="109">
  <image width="128" height="128" source="images/tiles/ladderMid.png"/>
 </tile>
 <tile id="110">
  <image width="128" height="128" source="images/tiles/ladderTop.png"/>
 </tile>
 <tile id="111">
  <image width="128" height="128" source="images/tiles/lava.png"/>
 </tile>
 <tile id="112">
  <image width="128" height="128" source="images/tiles/lavaTop_high.png"/>
 </tile>
 <tile id="113">
  <image width="128" height="128" source="images/tiles/lavaTop_low.png"/>
 </tile>
 <tile id="126">
  <image width="128" height="128" source="images/tiles/signExit.png"/>
 </tile>
 <tile id="127">
  <image width="128" height="128" source="images/tiles/signLeft.png"/>
 </tile>
 <tile id="128">
  <image width="128" height="128" source="images/tiles/signRight.png"/>
 </tile>
 <tile id="141">
  <image width="128" height="128" source="images/tiles/torch1.png"/>
 </tile>
 <tile id="142">
  <image width="128" height="128" source="images/tiles/torch2.png"/>
  <animation>
   <frame tileid="141" duration="250"/>
   <frame tileid="142" duration="250"/>
  </animation>
 </tile>
 <tile id="144">
  <image width="128" height="128" source="images/tiles/water.png"/>
 </tile>
 <tile id="145">
  <image width="128" height="128" source="images/tiles/waterTop_high.png"/>
 </tile>
 <tile id="146">
  <image width="128" height="128" source="images/tiles/waterTop_low.png"/>
 </tile>
 <tile id="150">
  <image width="128" height="128" source="images/tiles/grass2.png"/>
  <animation>
   <frame tileid="108" duration="250"/>
   <frame tileid="150" duration="250"/>
  </animation>
 </tile>
 <tile id="151">
  <image width="128" height="128" source="images/HUD/hudHeart_half.png"/>
 </tile>
 <tile id="152">
  <image width="128" height="128" source="images/ground/Sand/sand.png"/>
 </tile>
 <tile id="153">
  <image width="128" height="128" source="images/ground/Sand/sandCenter.png"/>
 </tile>
 <tile id="154">
  <image width="128" height="128" source="images/ground/Sand/sandCenter_rounded.png"/>
 </tile>
 <tile id="155">
  <image width="128" height="128" source="images/ground/Sand/sandCliff_left.png"/>
 </tile>
 <tile id="156">
  <image width="128" height="128" source="images/ground/Sand/sandCliff_right.png"/>
 </tile>
 <tile id="157">
  <image width="128" height="128" source="images/ground/Sand/sandCliffAlt_left.png"/>
 </tile>
 <tile id="158">
  <image width="128" height="128" source="images/ground/Sand/sandCliffAlt_right.png"/>
 </tile>
 <tile id="159">
  <image width="128" height="128" source="images/ground/Sand/sandCorner_leftg.png"/>
 </tile>
 <tile id="160">
  <image width="128" height="128" source="images/ground/Sand/sandCorner_right.png"/>
 </tile>
 <tile id="161">
  <image width="128" height="128" source="images/ground/Sand/sandHalf.png"/>
 </tile>
 <tile id="162">
  <image width="128" height="128" source="images/ground/Sand/sandHalf_left.png"/>
 </tile>
 <tile id="163">
  <image width="128" height="128" source="images/ground/Sand/sandHalf_mid.png"/>
 </tile>
 <tile id="164">
  <image width="128" height="128" source="images/ground/Sand/sandHalf_right.png"/>
 </tile>
 <tile id="165">
  <image width="128" height="128" source="images/ground/Sand/sandHill_left.png"/>
 </tile>
 <tile id="166">
  <image width="128" height="128" source="images/ground/Sand/sandHill_right.png"/>
 </tile>
 <tile id="167">
  <image width="128" height="128" source="images/ground/Sand/sandLeft.png"/>
 </tile>
 <tile id="168">
  <image width="128" height="128" source="images/ground/Sand/sandMid.png"/>
 </tile>
 <tile id="169">
  <image width="128" height="128" source="images/ground/Sand/sandRight.png"/>
 </tile>
 <tile id="170">
  <image width="128" height="128" source="images/ground/Snow/snow.png"/>
 </tile>
 <tile id="171">
  <image width="128" height="128" source="images/ground/Snow/snowCenter.png"/>
 </tile>
 <tile id="172">
  <image width="128" height="128" source="images/ground/Snow/snowCenter_rounded.png"/>
 </tile>
 <tile id="173">
  <image width="128" height="128" source="images/ground/Snow/snowCliff_left.png"/>
 </tile>
 <tile id="174">
  <image width="128" height="128" source="images/ground/Snow/snowCliff_right.png"/>
 </tile>
 <tile id="175">
  <image width="128" height="128" source="images/ground/Snow/snowCliffAlt_left.png"/>
 </tile>
 <tile id="176">
  <image width="128" height="128" source="images/ground/Snow/snowCliffAlt_right.png"/>
 </tile>
 <tile id="177">
  <image width="128" height="128" source="images/ground/Snow/snowCorner_left.png"/>
 </tile>
 <tile id="178">
  <image width="128" height="128" source="images/ground/Snow/snowCorner_right.png"/>
 </tile>
 <tile id="179">
  <image width="128" height="128" source="images/ground/Snow/snowHalf.png"/>
 </tile>
 <tile id="180">
  <image width="128" height="128" source="images/ground/Snow/snowHalf_left.png"/>
 </tile>
 <tile id="181">
  <image width="128" height="128" source="images/ground/Snow/snowHalf_mid.png"/>
 </tile>
 <tile id="182">
  <image width="128" height="128" source="images/ground/Snow/snowHalf_right.png"/>
 </tile>
 <tile id="183">
  <image width="128" height="128" source="images/ground/Snow/snowHill_left.png"/>
 </tile>
 <tile id="184">
  <image width="128" height="128" source="images/ground/Snow/snowHill_right.png"/>
 </tile>
 <tile id="185">
  <image width="128" height="128" source="images/ground/Snow/snowLeft.png"/>
 </tile>
 <tile id="186">
  <image width="128" height="128" source="images/ground/Snow/snowMid.png"/>
 </tile>
 <tile id="187">
  <image width="128" height="128" source="images/ground/Snow/snowRight.png"/>
 </tile>
 <tile id="188">
  <image width="128" height="128" source="images/ground/Stone/stone.png"/>
 </tile>
 <tile id="189">
  <image width="128" height="128" source="images/ground/Stone/stoneCenter.png"/>
 </tile>
 <tile id="190">
  <image width="128" height="128" source="images/ground/Stone/stoneCenter_rounded.png"/>
 </tile>
 <tile id="191">
  <image width="128" height="128" source="images/ground/Stone/stoneCliff_left.png"/>
 </tile>
 <tile id="192">
  <image width="128" height="128" source="images/ground/Stone/stoneCliff_right.png"/>
 </tile>
 <tile id="193">
  <image width="128" height="128" source="images/ground/Stone/stoneCliffAlt_left.png"/>
 </tile>
 <tile id="194">
  <image width="128" height="128" source="images/ground/Stone/stoneCliffAlt_right.png"/>
 </tile>
 <tile id="195">
  <image width="128" height="128" source="images/ground/Stone/stoneCorner_left.png"/>
 </tile>
 <tile id="196">
  <image width="128" height="128" source="images/ground/Stone/stoneCorner_right.png"/>
 </tile>
 <tile id="197">
  <image width="128" height="128" source="images/ground/Stone/stoneHalf.png"/>
 </tile>
 <tile id="198">
  <image width="128" height="128" source="images/ground/Stone/stoneHalf_left.png"/>
 </tile>
 <tile id="199">
  <image width="128" height="128" source="images/ground/Stone/stoneHalf_mid.png"/>
 </tile>
 <tile id="200">
  <image width="128" height="128" source="images/ground/Stone/stoneHalf_right.png"/>
 </tile>
 <tile id="201">
  <image width="128" height="128" source="images/ground/Stone/stoneHill_left.png"/>
 </tile>
 <tile id="202">
  <image width="128" height="128" source="images/ground/Stone/stoneHill_right.png"/>
 </tile>
 <tile id="203">
  <image width="128" height="128" source="images/ground/Stone/stoneLeft.png"/>
 </tile>
 <tile id="204">
  <image width="128" height="128" source="images/ground/Stone/stoneMid.png"/>
 </tile>
 <tile id="205">
  <image width="128" height="128" source="images/ground/Stone/stoneRight.png"/>
 </tile>
 <tile id="206">
  <image width="128" height="128" source="images/ground/Planet/planet.png"/>
 </tile>
 <tile id="207">
  <image width="128" height="128" source="images/ground/Planet/planetCenter.png"/>
 </tile>
 <tile id="208">
  <image width="128" height="128" source="images/ground/Planet/planetCenter_rounded.png"/>
 </tile>
 <tile id="209">
  <image width="128" height="128" source="images/ground/Planet/planetCliff_left.png"/>
 </tile>
 <tile id="210">
  <image width="128" height="128" source="images/ground/Planet/planetCliff_right.png"/>
 </tile>
 <tile id="211">
  <image width="128" height="128" source="images/ground/Planet/planetCliffAlt_left.png"/>
 </tile>
 <tile id="212">
  <image width="128" height="128" source="images/ground/Planet/planetCliffAlt_right.png"/>
 </tile>
 <tile id="213">
  <image width="128" height="128" source="images/ground/Planet/planetCorner_left.png"/>
 </tile>
 <tile id="214">
  <image width="128" height="128" source="images/ground/Planet/planetCorner_right.png"/>
 </tile>
 <tile id="215">
  <image width="128" height="128" source="images/ground/Planet/planetHalf.png"/>
 </tile>
 <tile id="216">
  <image width="128" height="128" source="images/ground/Planet/planetHalf_left.png"/>
 </tile>
 <tile id="217">
  <image width="128" height="128" source="images/ground/Planet/planetHalf_mid.png"/>
 </tile>
 <tile id="218">
  <image width="128" height="128" source="images/ground/Planet/planetHalf_right.png"/>
 </tile>
 <tile id="219">
  <image width="128" height="128" source="images/ground/Planet/planetHill_left.png"/>
 </tile>
 <tile id="220">
  <image width="128" height="128" source="images/ground/Planet/planetHill_right.png"/>
 </tile>
 <tile id="221">
  <image width="128" height="128" source="images/ground/Planet/planetLeft.png"/>
 </tile>
 <tile id="222">
  <image width="128" height="128" source="images/ground/Planet/planetMid.png"/>
 </tile>
 <tile id="223">
  <image width="128" height="128" source="images/ground/Planet/planetRight.png"/>
 </tile>
 <tile id="224">
  <image width="128" height="128" source="images/ground/Dirt/dirt.png"/>
 </tile>
 <tile id="225">
  <image width="128" height="128" source="images/ground/Dirt/dirtCenter.png"/>
 </tile>
 <tile id="226">
  <image width="128" height="128" source="images/ground/Dirt/dirtCenter_rounded.png"/>
 </tile>
 <tile id="227">
  <image width="128" height="128" source="images/ground/Dirt/dirtCliff_left.png"/>
 </tile>
 <tile id="228">
  <image width="128" height="128" source="images/ground/Dirt/dirtCliff_right.png"/>
 </tile>
 <tile id="229">
  <image width="128" height="128" source="images/ground/Dirt/dirtCliffAlt_left.png"/>
 </tile>
 <tile id="230">
  <image width="128" height="128" source="images/ground/Dirt/dirtCorner_left.png"/>
 </tile>
 <tile id="231">
  <image width="128" height="128" source="images/ground/Dirt/dirtCorner_right.png"/>
 </tile>
 <tile id="232">
  <image width="128" height="128" source="images/ground/Dirt/dirtHalf.png"/>
 </tile>
 <tile id="233">
  <image width="128" height="128" source="images/ground/Dirt/dirtHalf_left.png"/>
 </tile>
 <tile id="234">
  <image width="128" height="128" source="images/ground/Dirt/dirtHalf_mid.png"/>
 </tile>
 <tile id="235">
  <image width="128" height="128" source="images/ground/Dirt/dirtHalf_right.png"/>
 </tile>
 <tile id="236">
  <image width="128" height="128" source="images/ground/Dirt/dirtHill_right.png"/>
 </tile>
 <tile id="237">
  <image width="128" height="128" source="images/ground/Dirt/dirtLeft.png"/>
 </tile>
 <tile id="238">
  <image width="128" height="128" source="images/ground/Dirt/dirtMid.png"/>
 </tile>
 <tile id="239">
  <image width="128" height="128" source="images/ground/Dirt/dirtRight.png"/>
 </tile>
 <tile id="240">
  <image width="128" height="128" source="images/ground/Dirt/dirtCliffAlt_right.png"/>
 </tile>
 <tile id="241">
  <image width="128" height="128" source="images/ground/Dirt/dirtHill_left.png"/>
 </tile>
 <tile id="243">
  <image width="216" height="72" source="../../../Downloads/platformergraphics-mushroomland/PNG/bush.png"/>
 </tile>
 <tile id="244">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltLeft.png"/>
 </tile>
 <tile id="245">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltMid.png"/>
 </tile>
 <tile id="246">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltMidAlt.png"/>
 </tile>
 <tile id="247">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltRight.png"/>
 </tile>
 <tile id="248">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltSpotsLeft.png"/>
 </tile>
 <tile id="249">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltSpotsMid.png"/>
 </tile>
 <tile id="250">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltSpotsMidAlt.png"/>
 </tile>
 <tile id="251">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownAltSpotsRight.png"/>
 </tile>
 <tile id="252">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownLeft.png"/>
 </tile>
 <tile id="253">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownMid.png"/>
 </tile>
 <tile id="254">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownMidAlt.png"/>
 </tile>
 <tile id="255">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownRight.png"/>
 </tile>
 <tile id="256">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownSpotsLeft.png"/>
 </tile>
 <tile id="257">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownSpotsMid.png"/>
 </tile>
 <tile id="258">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownSpotsMidAlt.png"/>
 </tile>
 <tile id="259">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomBrownSpotsRight.png"/>
 </tile>
 <tile id="260">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedAltLeft.png"/>
 </tile>
 <tile id="261">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedAltMid.png"/>
 </tile>
 <tile id="262">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedAltMidAlt.png"/>
 </tile>
 <tile id="263">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedAltRight.png"/>
 </tile>
 <tile id="264">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedLeft.png"/>
 </tile>
 <tile id="265">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedMid.png"/>
 </tile>
 <tile id="266">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedMidAlt.png"/>
 </tile>
 <tile id="267">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomRedRight.png"/>
 </tile>
 <tile id="268">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanAltLeft.png"/>
 </tile>
 <tile id="269">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanAltMid.png"/>
 </tile>
 <tile id="270">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanAltMidAlt.png"/>
 </tile>
 <tile id="271">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanAltRight.png"/>
 </tile>
 <tile id="272">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanLeft.png"/>
 </tile>
 <tile id="273">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanMid.png"/>
 </tile>
 <tile id="274">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanMidAlt.png"/>
 </tile>
 <tile id="275">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/shroomTanRight.png"/>
 </tile>
 <tile id="276">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stem.png"/>
 </tile>
 <tile id="277">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemBase.png"/>
 </tile>
 <tile id="278">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemBaseAlt.png"/>
 </tile>
 <tile id="279">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemCrown.png"/>
 </tile>
 <tile id="280">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemShroom.png"/>
 </tile>
 <tile id="281">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemTop.png"/>
 </tile>
 <tile id="282">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemTopAlt.png"/>
 </tile>
 <tile id="283">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/stemVine.png"/>
 </tile>
 <tile id="284">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/tallShroom_brown.png"/>
 </tile>
 <tile id="285">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/tallShroom_red.png"/>
 </tile>
 <tile id="286">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/tallShroom_tan.png"/>
 </tile>
 <tile id="287">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/tinyShroom_brown.png"/>
 </tile>
 <tile id="288">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/tinyShroom_red.png"/>
 </tile>
 <tile id="289">
  <image width="70" height="70" source="../../../Downloads/platformergraphics-mushroomland/PNG/tinyShroom_tan.png"/>
 </tile>
 <tile id="290">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfMid.png"/>
 </tile>
 <tile id="291">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfRight.png"/>
 </tile>
 <tile id="292">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice01_01.png"/>
 </tile>
 <tile id="293">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice02_02.png"/>
 </tile>
 <tile id="294">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice03_03.png"/>
 </tile>
 <tile id="295">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice04_04.png"/>
 </tile>
 <tile id="296">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice05_05.png"/>
 </tile>
 <tile id="297">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice06_06.png"/>
 </tile>
 <tile id="298">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice07_07.png"/>
 </tile>
 <tile id="299">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice16_16.png"/>
 </tile>
 <tile id="300">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice17_17.png"/>
 </tile>
 <tile id="301">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice18_18.png"/>
 </tile>
 <tile id="302">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice19_19.png"/>
 </tile>
 <tile id="303">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice20_20.png"/>
 </tile>
 <tile id="304">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice21_21.png"/>
 </tile>
 <tile id="305">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice22_22.png"/>
 </tile>
 <tile id="306">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice23_23.png"/>
 </tile>
 <tile id="307">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice24_24.png"/>
 </tile>
 <tile id="308">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice25_25.png"/>
 </tile>
 <tile id="309">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice26_26.png"/>
 </tile>
 <tile id="310">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice27_27.png"/>
 </tile>
 <tile id="311">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice28_28.png"/>
 </tile>
 <tile id="312">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice29_29.png"/>
 </tile>
 <tile id="313">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice30_30.png"/>
 </tile>
 <tile id="314">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice31_31.png"/>
 </tile>
 <tile id="315">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice32_32.png"/>
 </tile>
 <tile id="316">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice33_33.png"/>
 </tile>
 <tile id="317">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice34_34.png"/>
 </tile>
 <tile id="318">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice35_35.png"/>
 </tile>
 <tile id="319">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice36_36.png"/>
 </tile>
 <tile id="320">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice37_37.png"/>
 </tile>
 <tile id="321">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice38_38.png"/>
 </tile>
 <tile id="322">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice39_39.png"/>
 </tile>
 <tile id="323">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/slice40_40.png"/>
 </tile>
 <tile id="324">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalf.png"/>
 </tile>
 <tile id="325">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfAlt.png"/>
 </tile>
 <tile id="326">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfAltLeft.png"/>
 </tile>
 <tile id="327">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfAltMid.png"/>
 </tile>
 <tile id="328">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfAltRight.png"/>
 </tile>
 <tile id="329">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Cake/cakeHalfLeft.png"/>
 </tile>
 <tile id="330">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfMid.png"/>
 </tile>
 <tile id="331">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfRight.png"/>
 </tile>
 <tile id="332">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice01_01.png"/>
 </tile>
 <tile id="333">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice02_02.png"/>
 </tile>
 <tile id="334">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice03_03.png"/>
 </tile>
 <tile id="335">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice04_04.png"/>
 </tile>
 <tile id="336">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice05_05.png"/>
 </tile>
 <tile id="337">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice06_06.png"/>
 </tile>
 <tile id="338">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice07_07.png"/>
 </tile>
 <tile id="339">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice16_16.png"/>
 </tile>
 <tile id="340">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice17_17.png"/>
 </tile>
 <tile id="341">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice18_18.png"/>
 </tile>
 <tile id="342">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice19_19.png"/>
 </tile>
 <tile id="343">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice20_20.png"/>
 </tile>
 <tile id="344">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice21_21.png"/>
 </tile>
 <tile id="345">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice22_22.png"/>
 </tile>
 <tile id="346">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice23_23.png"/>
 </tile>
 <tile id="347">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice24_24.png"/>
 </tile>
 <tile id="348">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice25_25.png"/>
 </tile>
 <tile id="349">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice26_26.png"/>
 </tile>
 <tile id="350">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice27_27.png"/>
 </tile>
 <tile id="351">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice28_28.png"/>
 </tile>
 <tile id="352">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice29_29.png"/>
 </tile>
 <tile id="353">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice30_30.png"/>
 </tile>
 <tile id="354">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice31_31.png"/>
 </tile>
 <tile id="355">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice32_32.png"/>
 </tile>
 <tile id="356">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice33_33.png"/>
 </tile>
 <tile id="357">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice34_34.png"/>
 </tile>
 <tile id="358">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice35_35.png"/>
 </tile>
 <tile id="359">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice36_36.png"/>
 </tile>
 <tile id="360">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice37_37.png"/>
 </tile>
 <tile id="361">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice38_38.png"/>
 </tile>
 <tile id="362">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice39_39.png"/>
 </tile>
 <tile id="363">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/slice40_40.png"/>
 </tile>
 <tile id="364">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalf.png"/>
 </tile>
 <tile id="365">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfAlt.png"/>
 </tile>
 <tile id="366">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfAltLeft.png"/>
 </tile>
 <tile id="367">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfAltMid.png"/>
 </tile>
 <tile id="368">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfAltRight.png"/>
 </tile>
 <tile id="369">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Choco/chocoHalfLeft.png"/>
 </tile>
 <tile id="370">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice03_03.png"/>
 </tile>
 <tile id="371">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice04_04.png"/>
 </tile>
 <tile id="372">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice05_05.png"/>
 </tile>
 <tile id="373">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice06_06.png"/>
 </tile>
 <tile id="374">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice07_07.png"/>
 </tile>
 <tile id="375">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice12_12.png"/>
 </tile>
 <tile id="376">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice13_13.png"/>
 </tile>
 <tile id="377">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice14_14.png"/>
 </tile>
 <tile id="378">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice15_15.png"/>
 </tile>
 <tile id="379">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice16_16.png"/>
 </tile>
 <tile id="380">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice17_17.png"/>
 </tile>
 <tile id="381">
  <image width="71" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice18_18.png"/>
 </tile>
 <tile id="382">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice19_19.png"/>
 </tile>
 <tile id="383">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice20_20.png"/>
 </tile>
 <tile id="384">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice21_21.png"/>
 </tile>
 <tile id="385">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice22_22.png"/>
 </tile>
 <tile id="386">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice23_23.png"/>
 </tile>
 <tile id="387">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice24_24.png"/>
 </tile>
 <tile id="388">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice25_25.png"/>
 </tile>
 <tile id="389">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice26_26.png"/>
 </tile>
 <tile id="390">
  <image width="71" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice27_27.png"/>
 </tile>
 <tile id="391">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice28_28.png"/>
 </tile>
 <tile id="392">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice29_29.png"/>
 </tile>
 <tile id="393">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice30_30.png"/>
 </tile>
 <tile id="394">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice31_31.png"/>
 </tile>
 <tile id="395">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/metalHalf.png"/>
 </tile>
 <tile id="396">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/metalHalfLeft.png"/>
 </tile>
 <tile id="397">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/metalHalfMid.png"/>
 </tile>
 <tile id="398">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/metalHalfRight.png"/>
 </tile>
 <tile id="399">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice01_01.png"/>
 </tile>
 <tile id="400">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Metal/slice02_02.png"/>
 </tile>
 <tile id="401">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice07_07.png"/>
 </tile>
 <tile id="402">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice12_12.png"/>
 </tile>
 <tile id="403">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice13_13.png"/>
 </tile>
 <tile id="404">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice14_14.png"/>
 </tile>
 <tile id="405">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice15_15.png"/>
 </tile>
 <tile id="406">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice16_16.png"/>
 </tile>
 <tile id="407">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice17_17.png"/>
 </tile>
 <tile id="408">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice18_18.png"/>
 </tile>
 <tile id="409">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice19_19.png"/>
 </tile>
 <tile id="410">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice20_20.png"/>
 </tile>
 <tile id="411">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice21_21.png"/>
 </tile>
 <tile id="412">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice22_22.png"/>
 </tile>
 <tile id="413">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice23_23.png"/>
 </tile>
 <tile id="414">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice24_24.png"/>
 </tile>
 <tile id="415">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice25_25.png"/>
 </tile>
 <tile id="416">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice26_26.png"/>
 </tile>
 <tile id="417">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice27_27.png"/>
 </tile>
 <tile id="418">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice28_28.png"/>
 </tile>
 <tile id="419">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice29_29.png"/>
 </tile>
 <tile id="420">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice30_30.png"/>
 </tile>
 <tile id="421">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice31_31.png"/>
 </tile>
 <tile id="422">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice32_32.png"/>
 </tile>
 <tile id="423">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice33_33.png"/>
 </tile>
 <tile id="424">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice34_34.png"/>
 </tile>
 <tile id="425">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice35_35.png"/>
 </tile>
 <tile id="426">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice36_36.png"/>
 </tile>
 <tile id="427">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/tundraHalf.png"/>
 </tile>
 <tile id="428">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/tundraHalfLeft.png"/>
 </tile>
 <tile id="429">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/tundraHalfMid.png"/>
 </tile>
 <tile id="430">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/tundraHalfRight.png"/>
 </tile>
 <tile id="431">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice01_01.png"/>
 </tile>
 <tile id="432">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice02_02.png"/>
 </tile>
 <tile id="433">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice03_03.png"/>
 </tile>
 <tile id="434">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice04_04.png"/>
 </tile>
 <tile id="435">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice05_05.png"/>
 </tile>
 <tile id="436">
  <image width="70" height="70" source="../../../Downloads/platformer-extendedtiles-0/PNG Tundra/slice06_06.png"/>
 </tile>
 <tile id="437">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneGreen.png"/>
 </tile>
 <tile id="438">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneGreenSmall.png"/>
 </tile>
 <tile id="439">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneGreenTop.png"/>
 </tile>
 <tile id="440">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneGreenTopAlt.png"/>
 </tile>
 <tile id="441">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneRed.png"/>
 </tile>
 <tile id="442">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneRedSmall.png"/>
 </tile>
 <tile id="443">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneRedTop.png"/>
 </tile>
 <tile id="444">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/caneRedTopAlt.png"/>
 </tile>
 <tile id="445">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/deadTree.png"/>
 </tile>
 <tile id="446">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceBlock.png"/>
 </tile>
 <tile id="447">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceBlockAlt.png"/>
 </tile>
 <tile id="448">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceBlockHalf.png"/>
 </tile>
 <tile id="449">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceBlockHalfAlt.png"/>
 </tile>
 <tile id="450">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWater.png"/>
 </tile>
 <tile id="451">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterAlt.png"/>
 </tile>
 <tile id="452">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterDeep.png"/>
 </tile>
 <tile id="453">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterDeepAlt.png"/>
 </tile>
 <tile id="454">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterDeepStars.png"/>
 </tile>
 <tile id="455">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterDeepStarsAlt.png"/>
 </tile>
 <tile id="456">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterMid.png"/>
 </tile>
 <tile id="457">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iceWaterMidAlt.png"/>
 </tile>
 <tile id="458">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/igloo.png"/>
 </tile>
 <tile id="459">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iglooAlt.png"/>
 </tile>
 <tile id="460">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iglooDoor.png"/>
 </tile>
 <tile id="461">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iglooRoof.png"/>
 </tile>
 <tile id="462">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iglooRoofLeft.png"/>
 </tile>
 <tile id="463">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/iglooRoofRight.png"/>
 </tile>
 <tile id="464">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/pineSapling.png"/>
 </tile>
 <tile id="465">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/pineSaplingAlt.png"/>
 </tile>
 <tile id="466">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/plant.png"/>
 </tile>
 <tile id="467">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/plantAlt.png"/>
 </tile>
 <tile id="468">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/rock.png"/>
 </tile>
 <tile id="469">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/rockAlt.png"/>
 </tile>
 <tile id="470">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowBall.png"/>
 </tile>
 <tile id="471">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowBallBig.png"/>
 </tile>
 <tile id="472">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowBallBigGround.png"/>
 </tile>
 <tile id="473">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowBallGround.png"/>
 </tile>
 <tile id="474">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowGroundLeft.png"/>
 </tile>
 <tile id="475">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowGroundRight.png"/>
 </tile>
 <tile id="476">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowHill.png"/>
 </tile>
 <tile id="477">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowHillLow.png"/>
 </tile>
 <tile id="478">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowLeft.png"/>
 </tile>
 <tile id="479">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowMid.png"/>
 </tile>
 <tile id="480">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowRight.png"/>
 </tile>
 <tile id="481">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/snowWave.png"/>
 </tile>
 <tile id="482">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikesBottom.png"/>
 </tile>
 <tile id="483">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikesBottomAlt.png"/>
 </tile>
 <tile id="484">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikesBottomAlt2.png"/>
 </tile>
 <tile id="485">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikesTop.png"/>
 </tile>
 <tile id="486">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikesTopAlt.png"/>
 </tile>
 <tile id="487">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikesTopAlt2.png"/>
 </tile>
 <tile id="488">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/spikeTop.png"/>
 </tile>
 <tile id="489">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/tree.png"/>
 </tile>
 <tile id="490">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesLeft.png"/>
 </tile>
 <tile id="491">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesLeftAlt.png"/>
 </tile>
 <tile id="492">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesLeftSnowAlt.png"/>
 </tile>
 <tile id="493">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesRight.png"/>
 </tile>
 <tile id="494">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesSnowLeft.png"/>
 </tile>
 <tile id="495">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesSnowRight.png"/>
 </tile>
 <tile id="496">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesSnowRightAlt.png"/>
 </tile>
 <tile id="497">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeBranchesSnowRightSnowAlt.png"/>
 </tile>
 <tile id="498">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTop.png"/>
 </tile>
 <tile id="499">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTopSnow.png"/>
 </tile>
 <tile id="500">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunk.png"/>
 </tile>
 <tile id="501">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBottom.png"/>
 </tile>
 <tile id="502">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBottomAlt.png"/>
 </tile>
 <tile id="503">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBottomAlt2.png"/>
 </tile>
 <tile id="504">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBottomAlt3.png"/>
 </tile>
 <tile id="505">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBranch.png"/>
 </tile>
 <tile id="506">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBranchEndLeft.png"/>
 </tile>
 <tile id="507">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBranchEndRight.png"/>
 </tile>
 <tile id="508">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBranchLeftAlt.png"/>
 </tile>
 <tile id="509">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkBranchRightAlt.png"/>
 </tile>
 <tile id="510">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkSplitLeft.png"/>
 </tile>
 <tile id="511">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkSplitRight.png"/>
 </tile>
 <tile id="512">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/treeTrunkTop.png"/>
 </tile>
 <tile id="513">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Ice expansion/Tiles/tundraCliffRightAlt.png"/>
 </tile>
 <tile id="514">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/candyBlue.png"/>
 </tile>
 <tile id="515">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/candyGreen.png"/>
 </tile>
 <tile id="516">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/candyRed.png"/>
 </tile>
 <tile id="517">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/candyYellow.png"/>
 </tile>
 <tile id="518">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/canePink.png"/>
 </tile>
 <tile id="519">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/canePinkSmall.png"/>
 </tile>
 <tile id="520">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/canePinkTop.png"/>
 </tile>
 <tile id="521">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/canePinkTopAlt.png"/>
 </tile>
 <tile id="522">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/cherry.png"/>
 </tile>
 <tile id="523">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/cookieBrown.png"/>
 </tile>
 <tile id="524">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/cookieChoco.png"/>
 </tile>
 <tile id="525">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/cookiePink.png"/>
 </tile>
 <tile id="526">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/creamChoco.png"/>
 </tile>
 <tile id="527">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/creamMocca.png"/>
 </tile>
 <tile id="528">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/creamPink.png"/>
 </tile>
 <tile id="529">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/creamVanilla.png"/>
 </tile>
 <tile id="530">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/cupCake.png"/>
 </tile>
 <tile id="531">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/gummyWormGreenEnd.png"/>
 </tile>
 <tile id="532">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/gummyWormGreenHead.png"/>
 </tile>
 <tile id="533">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/gummyWormGreenMid.png"/>
 </tile>
 <tile id="534">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/gummyWormRedEnd.png"/>
 </tile>
 <tile id="535">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/gummyWormRedHead.png"/>
 </tile>
 <tile id="536">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/gummyWormRedMid.png"/>
 </tile>
 <tile id="537">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/heart.png"/>
 </tile>
 <tile id="538">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCaneChoco.png"/>
 </tile>
 <tile id="539">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCaneChocoTop.png"/>
 </tile>
 <tile id="540">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCaneGreen.png"/>
 </tile>
 <tile id="541">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCaneGreenTop.png"/>
 </tile>
 <tile id="542">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCanePink.png"/>
 </tile>
 <tile id="543">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCanePinkTop.png"/>
 </tile>
 <tile id="544">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCaneRed.png"/>
 </tile>
 <tile id="545">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/hillCaneRedTop.png"/>
 </tile>
 <tile id="546">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopBase.png"/>
 </tile>
 <tile id="547">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopBaseBeige.png"/>
 </tile>
 <tile id="548">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopBaseBrown.png"/>
 </tile>
 <tile id="549">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopBaseCake.png"/>
 </tile>
 <tile id="550">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopBasePink.png"/>
 </tile>
 <tile id="551">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopFruitGreen.png"/>
 </tile>
 <tile id="552">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopFruitRed.png"/>
 </tile>
 <tile id="553">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopFruitYellow.png"/>
 </tile>
 <tile id="554">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopGreen.png"/>
 </tile>
 <tile id="555">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopRed.png"/>
 </tile>
 <tile id="556">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopWhiteGreen.png"/>
 </tile>
 <tile id="557">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/lollipopWhiteRed.png"/>
 </tile>
 <tile id="558">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/waffleChoco.png"/>
 </tile>
 <tile id="559">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/wafflePink.png"/>
 </tile>
 <tile id="560">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Candy expansion/Tiles/waffleWhite.png"/>
 </tile>
 <tile id="561">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/anemometer.png"/>
 </tile>
 <tile id="562">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/awningGreen.png"/>
 </tile>
 <tile id="563">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/awningGreenRed.png"/>
 </tile>
 <tile id="564">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/awningRed.png"/>
 </tile>
 <tile id="565">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/chimney.png"/>
 </tile>
 <tile id="566">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/chimneyLow.png"/>
 </tile>
 <tile id="567">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/chimneyThin.png"/>
 </tile>
 <tile id="568">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/clock.png"/>
 </tile>
 <tile id="569">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorKnob.png"/>
 </tile>
 <tile id="570">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorKnobAlt.png"/>
 </tile>
 <tile id="571">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorLock.png"/>
 </tile>
 <tile id="572">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorOpen.png"/>
 </tile>
 <tile id="573">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorOpenTop.png"/>
 </tile>
 <tile id="574">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorPlateTop.png"/>
 </tile>
 <tile id="575">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorTop.png"/>
 </tile>
 <tile id="576">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/doorWindowTop.png"/>
 </tile>
 <tile id="577">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/fenceGate.png"/>
 </tile>
 <tile id="578">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/fenceLong.png"/>
 </tile>
 <tile id="579">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/fenceLow.png"/>
 </tile>
 <tile id="580">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeige.png"/>
 </tile>
 <tile id="581">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeAlt.png"/>
 </tile>
 <tile id="582">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeAlt2.png"/>
 </tile>
 <tile id="583">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeBottomLeft.png"/>
 </tile>
 <tile id="584">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeBottomMid.png"/>
 </tile>
 <tile id="585">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeBottomRight.png"/>
 </tile>
 <tile id="586">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeMidLeft.png"/>
 </tile>
 <tile id="587">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeMidRight.png"/>
 </tile>
 <tile id="588">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeTopLeft.png"/>
 </tile>
 <tile id="589">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeTopMid.png"/>
 </tile>
 <tile id="590">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseBeigeTopRight.png"/>
 </tile>
 <tile id="591">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDark.png"/>
 </tile>
 <tile id="592">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkAlt.png"/>
 </tile>
 <tile id="593">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkAlt2.png"/>
 </tile>
 <tile id="594">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkBottomLeft.png"/>
 </tile>
 <tile id="595">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkBottomMid.png"/>
 </tile>
 <tile id="596">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkBottomRight.png"/>
 </tile>
 <tile id="597">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkMidLeft.png"/>
 </tile>
 <tile id="598">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkMidRight.png"/>
 </tile>
 <tile id="599">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkTopLeft.png"/>
 </tile>
 <tile id="600">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkTopMid.png"/>
 </tile>
 <tile id="601">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseDarkTopRight.png"/>
 </tile>
 <tile id="602">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGray.png"/>
 </tile>
 <tile id="603">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayAlt.png"/>
 </tile>
 <tile id="604">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayAlt2.png"/>
 </tile>
 <tile id="605">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayBottomLeft.png"/>
 </tile>
 <tile id="606">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayBottomMid.png"/>
 </tile>
 <tile id="607">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayBottomRight.png"/>
 </tile>
 <tile id="608">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayMidLeft.png"/>
 </tile>
 <tile id="609">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayMidRight.png"/>
 </tile>
 <tile id="610">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayTopLeft.png"/>
 </tile>
 <tile id="611">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayTopMid.png"/>
 </tile>
 <tile id="612">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/houseGrayTopRight.png"/>
 </tile>
 <tile id="613">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/rockMoss.png"/>
 </tile>
 <tile id="614">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/rockMossAlt.png"/>
 </tile>
 <tile id="615">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofGreyLeft.png"/>
 </tile>
 <tile id="616">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofGreyMid.png"/>
 </tile>
 <tile id="617">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofGreyRight.png"/>
 </tile>
 <tile id="618">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofGreyTopLeft.png"/>
 </tile>
 <tile id="619">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofGreyTopMid.png"/>
 </tile>
 <tile id="620">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofGreyTopRight.png"/>
 </tile>
 <tile id="621">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofRedLeft.png"/>
 </tile>
 <tile id="622">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofRedMid.png"/>
 </tile>
 <tile id="623">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofRedRight.png"/>
 </tile>
 <tile id="624">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofRedTopLeft.png"/>
 </tile>
 <tile id="625">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofRedTopMid.png"/>
 </tile>
 <tile id="626">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofRedTopRight.png"/>
 </tile>
 <tile id="627">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofYellowLeft.png"/>
 </tile>
 <tile id="628">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofYellowMid.png"/>
 </tile>
 <tile id="629">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofYellowRight.png"/>
 </tile>
 <tile id="630">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofYellowTopLeft.png"/>
 </tile>
 <tile id="631">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofYellowTopMid.png"/>
 </tile>
 <tile id="632">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/roofYellowTopRight.png"/>
 </tile>
 <tile id="633">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/signBed.png"/>
 </tile>
 <tile id="634">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/signCoin.png"/>
 </tile>
 <tile id="635">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/signCup.png"/>
 </tile>
 <tile id="636">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/signHangingBed.png"/>
 </tile>
 <tile id="637">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/signHangingCoin.png"/>
 </tile>
 <tile id="638">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/signHangingCup.png"/>
 </tile>
 <tile id="639">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/window.png"/>
 </tile>
 <tile id="640">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowCheckered.png"/>
 </tile>
 <tile id="641">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighBottom.png"/>
 </tile>
 <tile id="642">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighCheckeredBottom.png"/>
 </tile>
 <tile id="643">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighCheckeredMid.png"/>
 </tile>
 <tile id="644">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighCheckeredTop.png"/>
 </tile>
 <tile id="645">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighLeadlightBottom.png"/>
 </tile>
 <tile id="646">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighLeadlightMid.png"/>
 </tile>
 <tile id="647">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighLeadlightTop.png"/>
 </tile>
 <tile id="648">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighMid.png"/>
 </tile>
 <tile id="649">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighOpenBottom.png"/>
 </tile>
 <tile id="650">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighOpenMid.png"/>
 </tile>
 <tile id="651">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighOpenTop.png"/>
 </tile>
 <tile id="652">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowHighTop.png"/>
 </tile>
 <tile id="653">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowLeadlight.png"/>
 </tile>
 <tile id="654">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowLow.png"/>
 </tile>
 <tile id="655">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowLowCheckered.png"/>
 </tile>
 <tile id="656">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowLowLeadlight.png"/>
 </tile>
 <tile id="657">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowLowOpen.png"/>
 </tile>
 <tile id="658">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Buildings expansion/Tiles/windowOpen.png"/>
 </tile>
 <tile id="659">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/switchMid.png"/>
 </tile>
 <tile id="660">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/switchRight.png"/>
 </tile>
 <tile id="661">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/weight.png"/>
 </tile>
 <tile id="662">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/weightChained.png"/>
 </tile>
 <tile id="663">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/switchLeft.png"/>
 </tile>
 <tile id="664">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/rock.png"/>
 </tile>
 <tile id="665">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/snowhill.png"/>
 </tile>
 <tile id="666">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/spikes.png"/>
 </tile>
 <tile id="667">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/springboardDown.png"/>
 </tile>
 <tile id="668">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/springboardUp.png"/>
 </tile>
 <tile id="669">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/plantPurple.png"/>
 </tile>
 <tile id="670">
  <image width="19" height="14" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/particleBrick1a.png"/>
 </tile>
 <tile id="671">
  <image width="21" height="21" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/particleBrick1b.png"/>
 </tile>
 <tile id="672">
  <image width="19" height="14" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/particleBrick2a.png"/>
 </tile>
 <tile id="673">
  <image width="21" height="21" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/particleBrick2b.png"/>
 </tile>
 <tile id="674">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/fireball.png"/>
 </tile>
 <tile id="675">
  <image width="129" height="71" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/cloud2.png"/>
 </tile>
 <tile id="676">
  <image width="129" height="71" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/cloud3.png"/>
 </tile>
 <tile id="677">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/bomb.png"/>
 </tile>
 <tile id="678">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/bombFlash.png"/>
 </tile>
 <tile id="679">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/bush.png"/>
 </tile>
 <tile id="680">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonBlue.png"/>
 </tile>
 <tile id="681">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonBlue_pressed.png"/>
 </tile>
 <tile id="682">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonGreen.png"/>
 </tile>
 <tile id="683">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonGreen_pressed.png"/>
 </tile>
 <tile id="684">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonRed.png"/>
 </tile>
 <tile id="685">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonRed_pressed.png"/>
 </tile>
 <tile id="686">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonYellow.png"/>
 </tile>
 <tile id="687">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/buttonYellow_pressed.png"/>
 </tile>
 <tile id="688">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/cactus.png"/>
 </tile>
 <tile id="689">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/chain.png"/>
 </tile>
 <tile id="690">
  <image width="128" height="71" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/cloud1.png"/>
 </tile>
 <tile id="691">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagBlue.png"/>
 </tile>
 <tile id="692">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagBlue2.png"/>
 </tile>
 <tile id="693">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagBlueHanging.png"/>
 </tile>
 <tile id="694">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagGreen.png"/>
 </tile>
 <tile id="695">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagGreen2.png"/>
 </tile>
 <tile id="696">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagGreenHanging.png"/>
 </tile>
 <tile id="697">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagRed.png"/>
 </tile>
 <tile id="698">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagRed2.png"/>
 </tile>
 <tile id="699">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagRedHanging.png"/>
 </tile>
 <tile id="700">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagYellow.png"/>
 </tile>
 <tile id="701">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagYellow2.png"/>
 </tile>
 <tile id="702">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/flagYellowHanging.png"/>
 </tile>
 <tile id="704">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/gemGreen.png"/>
 </tile>
 <tile id="705">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Items/gemRed.png"/>
 </tile>
 <tile id="706">
  <image width="48" height="146" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/hill_large.png"/>
 </tile>
 <tile id="707">
  <image width="48" height="146" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/hill_largeAlt.png"/>
 </tile>
 <tile id="708">
  <image width="48" height="106" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/hill_small.png"/>
 </tile>
 <tile id="709">
  <image width="48" height="106" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/hill_smallAlt.png"/>
 </tile>
 <tile id="710">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/ladder_mid.png"/>
 </tile>
 <tile id="711">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/ladder_top.png"/>
 </tile>
 <tile id="712">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/liquidLava.png"/>
 </tile>
 <tile id="713">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/liquidLavaTop.png"/>
 </tile>
 <tile id="714">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/liquidLavaTop_mid.png"/>
 </tile>
 <tile id="715">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/liquidWater.png"/>
 </tile>
 <tile id="716">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/liquidWaterTop.png"/>
 </tile>
 <tile id="717">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/liquidWaterTop_mid.png"/>
 </tile>
 <tile id="718">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/lock_blue.png"/>
 </tile>
 <tile id="719">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/lock_green.png"/>
 </tile>
 <tile id="720">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/lock_red.png"/>
 </tile>
 <tile id="721">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/lock_yellow.png"/>
 </tile>
 <tile id="722">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/rockHillLeft.png"/>
 </tile>
 <tile id="723">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/rockHillRight.png"/>
 </tile>
 <tile id="724">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/ropeAttached.png"/>
 </tile>
 <tile id="725">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/ropeHorizontal.png"/>
 </tile>
 <tile id="726">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/ropeVertical.png"/>
 </tile>
 <tile id="727">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/door_closedMid.png"/>
 </tile>
 <tile id="728">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/door_closedTop.png"/>
 </tile>
 <tile id="729">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/door_openMid.png"/>
 </tile>
 <tile id="730">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/door_openTop.png"/>
 </tile>
 <tile id="731">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/fence.png"/>
 </tile>
 <tile id="732">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/box.png"/>
 </tile>
 <tile id="733">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxAlt.png"/>
 </tile>
 <tile id="734">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxCoin.png"/>
 </tile>
 <tile id="735">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxCoin_disabled.png"/>
 </tile>
 <tile id="736">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxExplosive.png"/>
 </tile>
 <tile id="737">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxExplosive_disabled.png"/>
 </tile>
 <tile id="738">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxExplosiveAlt.png"/>
 </tile>
 <tile id="739">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxItem.png"/>
 </tile>
 <tile id="740">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxWarning.png"/>
 </tile>
 <tile id="741">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/brickWall.png"/>
 </tile>
 <tile id="742">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/bridge.png"/>
 </tile>
 <tile id="743">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/bridgeLogs.png"/>
 </tile>
 <tile id="744">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxCoinAlt.png"/>
 </tile>
 <tile id="745">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxCoinAlt_disabled.png"/>
 </tile>
 <tile id="746">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxEmpty.png"/>
 </tile>
 <tile id="747">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxItem_disabled.png"/>
 </tile>
 <tile id="748">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxItemAlt.png"/>
 </tile>
 <tile id="749">
  <image width="70" height="70" source="../../../Downloads/platformer-art-complete-pack-0 (1)/Base pack/Tiles/boxItemAlt_disabled.png"/>
 </tile>
 <tile id="750">
  <image width="53" height="147" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/snakeLava.png"/>
 </tile>
 <tile id="751">
  <image width="52" height="147" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/snakeLava_ani.png"/>
 </tile>
 <tile id="752">
  <image width="51" height="73" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/ghost.png"/>
 </tile>
 <tile id="753">
  <image width="51" height="73" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/ghost_dead.png"/>
 </tile>
 <tile id="754">
  <image width="51" height="73" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/ghost_hit.png"/>
 </tile>
 <tile id="755">
  <image width="51" height="73" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/ghost_normal.png"/>
 </tile>
 <tile id="756">
  <image width="71" height="70" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/grassBlock.png"/>
 </tile>
 <tile id="757">
  <image width="71" height="70" source="../../../Downloads/moreenemiesanimations (1)/Enemy sprites/grassBlock_dead.png"/>
 </tile>
 <wangsets>
  <wangset name="Unnamed Set" type="mixed" tile="-1">
   <wangcolor name="dirt" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="power ups" color="#00ff00" tile="-1" probability="1"/>
   <wangcolor name="flags" color="#0000ff" tile="-1" probability="1"/>
   <wangcolor name="signs" color="#ff7700" tile="-1" probability="1"/>
   <wangcolor name="water" color="#00e9ff" tile="-1" probability="1"/>
   <wangcolor name="wallpaper" color="#ff00d8" tile="-1" probability="1"/>
   <wangcolor name="lava" color="#ffff00" tile="-1" probability="1"/>
   <wangcolor name="other" color="#a000ff" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="1" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="2" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="3" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="4" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="5" wangid="1,1,1,1,0,0,0,1"/>
   <wangtile tileid="6" wangid="1,1,0,0,0,1,1,1"/>
   <wangtile tileid="7" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="8" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="9" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="10" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="11" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="12" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="13" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="14" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="15" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="16" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="17" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="29" wangid="2,2,2,0,2,0,2,2"/>
   <wangtile tileid="30" wangid="2,2,2,0,2,0,2,2"/>
   <wangtile tileid="33" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="35" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="37" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="39" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="41" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="43" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="45" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="47" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="53" wangid="0,0,2,0,2,0,2,0"/>
   <wangtile tileid="54" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="55" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="56" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="60" wangid="0,0,0,0,0,3,3,3"/>
   <wangtile tileid="61" wangid="3,3,3,3,3,3,3,3"/>
   <wangtile tileid="62" wangid="3,3,3,0,0,3,3,3"/>
   <wangtile tileid="69" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="70" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="71" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="72" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="77" wangid="2,0,2,0,2,0,2,0"/>
   <wangtile tileid="95" wangid="6,6,6,6,6,6,6,6"/>
   <wangtile tileid="96" wangid="6,6,6,6,6,6,6,6"/>
   <wangtile tileid="104" wangid="6,6,6,6,6,6,6,6"/>
   <wangtile tileid="105" wangid="0,0,6,6,6,6,6,0"/>
   <wangtile tileid="106" wangid="0,8,8,8,8,8,8,8"/>
   <wangtile tileid="107" wangid="0,8,8,8,8,8,8,8"/>
   <wangtile tileid="108" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="109" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="110" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="111" wangid="7,7,7,7,7,7,7,7"/>
   <wangtile tileid="112" wangid="7,7,7,7,7,7,7,7"/>
   <wangtile tileid="113" wangid="7,7,7,7,7,7,7,0"/>
   <wangtile tileid="126" wangid="4,4,4,0,4,0,4,4"/>
   <wangtile tileid="127" wangid="4,4,4,4,4,0,4,4"/>
   <wangtile tileid="128" wangid="4,4,4,0,4,4,4,4"/>
   <wangtile tileid="141" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="142" wangid="8,0,8,8,8,0,0,0"/>
   <wangtile tileid="144" wangid="5,5,5,5,5,5,5,5"/>
   <wangtile tileid="145" wangid="5,5,5,5,5,5,5,5"/>
   <wangtile tileid="146" wangid="5,5,5,5,5,5,5,0"/>
   <wangtile tileid="150" wangid="8,0,8,8,8,8,0,0"/>
   <wangtile tileid="151" wangid="2,2,2,0,2,0,2,2"/>
   <wangtile tileid="152" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="153" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="154" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="155" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="156" wangid="1,1,1,0,1,1,1,0"/>
   <wangtile tileid="157" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="158" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="159" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="160" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="161" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="162" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="163" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="164" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="165" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="166" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="167" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="168" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="169" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="170" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="171" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="172" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="173" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="174" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="175" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="176" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="177" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="178" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="179" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="180" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="181" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="182" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="183" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="184" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="185" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="186" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="187" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="188" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="189" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="190" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="191" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="192" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="193" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="194" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="195" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="196" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="197" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="198" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="199" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="200" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="201" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="202" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="203" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="204" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="205" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="206" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="207" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="208" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="209" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="210" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="211" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="212" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="213" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="214" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="215" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="216" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="217" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="218" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="219" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="220" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="221" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="222" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="223" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="224" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="225" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="226" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="227" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="228" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="229" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="230" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="231" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="232" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="233" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="234" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="235" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="236" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="237" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="238" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="239" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="240" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="241" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="243" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="244" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="245" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="246" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="247" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="248" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="249" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="250" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="251" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="252" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="253" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="254" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="255" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="256" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="257" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="258" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="259" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="260" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="261" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="262" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="263" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="264" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="265" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="266" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="267" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="268" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="269" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="270" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="271" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="272" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="273" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="274" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="275" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="276" wangid="1,1,1,0,1,0,1,1"/>
   <wangtile tileid="277" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="278" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="279" wangid="1,1,0,0,1,0,0,1"/>
   <wangtile tileid="280" wangid="1,1,1,0,1,0,1,1"/>
   <wangtile tileid="281" wangid="1,1,0,0,1,0,0,1"/>
   <wangtile tileid="282" wangid="1,1,0,0,1,0,0,1"/>
   <wangtile tileid="283" wangid="1,0,0,0,1,0,0,0"/>
   <wangtile tileid="284" wangid="0,0,1,0,1,0,1,0"/>
   <wangtile tileid="285" wangid="0,0,1,0,1,0,1,0"/>
   <wangtile tileid="286" wangid="0,0,1,1,1,1,1,0"/>
   <wangtile tileid="287" wangid="0,0,1,1,1,1,1,0"/>
   <wangtile tileid="288" wangid="0,0,1,1,1,1,1,0"/>
   <wangtile tileid="289" wangid="0,0,1,1,1,1,1,0"/>
   <wangtile tileid="290" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="291" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="292" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="293" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="294" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="295" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="296" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="297" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="298" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="299" wangid="1,1,1,1,0,0,0,1"/>
   <wangtile tileid="300" wangid="1,1,0,0,0,1,1,1"/>
   <wangtile tileid="301" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="302" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="303" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="304" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="305" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="306" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="307" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="308" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="309" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="310" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="311" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="312" wangid="1,1,0,0,0,1,1,1"/>
   <wangtile tileid="313" wangid="1,1,1,1,0,0,0,1"/>
   <wangtile tileid="314" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="315" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="316" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="317" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="318" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="319" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="320" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="321" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="322" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="323" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="324" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="325" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="326" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="327" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="328" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="329" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="330" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="331" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="332" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="333" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="334" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="335" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="336" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="337" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="338" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="339" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="340" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="341" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="342" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="343" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="344" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="345" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="346" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="347" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="348" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="349" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="350" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="351" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="352" wangid="1,1,0,0,0,1,1,1"/>
   <wangtile tileid="353" wangid="1,1,1,1,0,0,0,1"/>
   <wangtile tileid="354" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="355" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="356" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="357" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="358" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="359" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="360" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="361" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="362" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="363" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="364" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="365" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="366" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="367" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="368" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="369" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="370" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="371" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="372" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="373" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="374" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="375" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="376" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="377" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="378" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="379" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="380" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="381" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="382" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="383" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="384" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="385" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="386" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="387" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="388" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="389" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="390" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="391" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="392" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="393" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="394" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="395" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="396" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="397" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="398" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="399" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="400" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="401" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="402" wangid="1,1,1,1,0,0,1,1"/>
   <wangtile tileid="403" wangid="1,1,1,0,0,1,1,1"/>
   <wangtile tileid="404" wangid="1,1,1,1,1,0,1,1"/>
   <wangtile tileid="405" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="406" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="407" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="408" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="409" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="410" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="411" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="412" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="413" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="414" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="415" wangid="1,1,0,0,0,1,1,1"/>
   <wangtile tileid="416" wangid="1,1,1,1,0,0,0,1"/>
   <wangtile tileid="417" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="418" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="419" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="420" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="421" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="422" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="423" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="424" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="425" wangid="0,1,1,1,1,1,0,0"/>
   <wangtile tileid="426" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="427" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="428" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="429" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="430" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="431" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="432" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="433" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="434" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="435" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="436" wangid="0,0,0,1,1,1,1,1"/>
   <wangtile tileid="437" wangid="0,0,0,0,0,1,1,1"/>
   <wangtile tileid="438" wangid="1,1,1,1,1,1,1,0"/>
   <wangtile tileid="439" wangid="1,1,1,1,0,1,1,1"/>
   <wangtile tileid="440" wangid="1,1,1,1,0,1,1,1"/>
   <wangtile tileid="441" wangid="0,0,0,0,0,1,1,1"/>
   <wangtile tileid="442" wangid="1,1,1,1,1,1,1,0"/>
   <wangtile tileid="443" wangid="1,1,1,1,0,1,1,1"/>
   <wangtile tileid="444" wangid="1,1,1,1,0,1,1,1"/>
   <wangtile tileid="445" wangid="1,1,1,0,1,0,1,0"/>
   <wangtile tileid="446" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="447" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="448" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="449" wangid="1,1,1,0,0,0,1,1"/>
   <wangtile tileid="450" wangid="0,0,5,5,5,5,5,0"/>
   <wangtile tileid="451" wangid="0,0,5,5,5,5,5,0"/>
   <wangtile tileid="452" wangid="5,5,5,5,5,5,5,5"/>
   <wangtile tileid="453" wangid="5,0,5,5,5,5,5,5"/>
   <wangtile tileid="454" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="455" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="456" wangid="0,0,5,5,5,5,5,0"/>
   <wangtile tileid="457" wangid="0,0,5,5,5,5,5,0"/>
   <wangtile tileid="458" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="459" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="460" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="461" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="462" wangid="1,1,1,1,1,1,1,0"/>
   <wangtile tileid="463" wangid="1,0,1,1,1,1,1,1"/>
   <wangtile tileid="464" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="465" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="466" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="467" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="468" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="469" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="470" wangid="8,0,8,0,8,0,8,0"/>
   <wangtile tileid="471" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="472" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="473" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="474" wangid="0,0,0,8,8,8,8,0"/>
   <wangtile tileid="475" wangid="0,0,8,8,8,8,0,0"/>
   <wangtile tileid="476" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="477" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="478" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="479" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="480" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="481" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="482" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="483" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="484" wangid="0,0,0,8,8,8,8,0"/>
   <wangtile tileid="485" wangid="8,8,8,0,0,0,8,8"/>
   <wangtile tileid="486" wangid="8,8,8,0,0,0,8,8"/>
   <wangtile tileid="487" wangid="8,8,0,0,0,0,0,8"/>
   <wangtile tileid="488" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="489" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="490" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="491" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="492" wangid="8,8,8,8,8,8,0,0"/>
   <wangtile tileid="493" wangid="0,0,8,8,8,8,8,8"/>
   <wangtile tileid="494" wangid="0,8,8,8,8,8,8,0"/>
   <wangtile tileid="495" wangid="0,0,8,8,8,8,8,8"/>
   <wangtile tileid="496" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="497" wangid="8,8,0,8,8,8,8,8"/>
   <wangtile tileid="498" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="499" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="500" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="501" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="502" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="503" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="504" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="505" wangid="8,8,0,0,0,0,0,8"/>
   <wangtile tileid="506" wangid="8,8,0,0,0,0,0,8"/>
   <wangtile tileid="507" wangid="8,8,0,0,0,0,0,8"/>
   <wangtile tileid="508" wangid="8,8,0,0,0,0,0,8"/>
   <wangtile tileid="509" wangid="8,8,0,0,0,0,0,8"/>
   <wangtile tileid="510" wangid="8,8,0,0,8,0,0,8"/>
   <wangtile tileid="511" wangid="8,8,0,0,8,8,0,0"/>
   <wangtile tileid="512" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="513" wangid="1,1,1,0,1,1,1,1"/>
   <wangtile tileid="514" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="515" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="516" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="517" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="518" wangid="0,0,0,8,8,8,8,8"/>
   <wangtile tileid="519" wangid="8,8,8,8,8,8,8,0"/>
   <wangtile tileid="520" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="521" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="522" wangid="8,8,8,8,8,8,8,0"/>
   <wangtile tileid="523" wangid="8,8,8,0,0,0,8,8"/>
   <wangtile tileid="524" wangid="8,8,8,0,0,0,8,8"/>
   <wangtile tileid="525" wangid="8,8,8,0,0,0,8,8"/>
   <wangtile tileid="526" wangid="8,0,8,8,8,8,8,8"/>
   <wangtile tileid="527" wangid="8,8,8,8,8,8,8,0"/>
   <wangtile tileid="528" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="529" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="530" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="531" wangid="0,0,8,8,0,0,0,0"/>
   <wangtile tileid="532" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="533" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="534" wangid="0,0,8,8,0,0,0,0"/>
   <wangtile tileid="535" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="536" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="537" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="538" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="539" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="540" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="541" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="542" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="543" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="544" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="545" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="546" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="547" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="548" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="549" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="550" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="551" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="552" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="553" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="554" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="555" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="556" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="557" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="558" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="559" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="560" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="561" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="562" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="563" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="564" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="565" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="566" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="567" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="568" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="569" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="570" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="571" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="572" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="573" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="574" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="575" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="576" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="577" wangid="0,0,8,8,0,8,8,0"/>
   <wangtile tileid="578" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="579" wangid="8,8,8,8,8,8,8,0"/>
   <wangtile tileid="580" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="581" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="582" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="583" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="584" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="585" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="586" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="587" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="588" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="589" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="590" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="591" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="592" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="593" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="594" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="595" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="596" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="597" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="598" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="599" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="600" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="601" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="602" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="603" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="604" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="605" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="606" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="607" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="608" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="609" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="610" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="611" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="612" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="613" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="614" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="615" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="616" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="617" wangid="0,8,8,8,0,0,0,0"/>
   <wangtile tileid="618" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="619" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="620" wangid="0,8,8,8,0,0,0,0"/>
   <wangtile tileid="621" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="622" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="623" wangid="0,8,8,8,0,0,0,0"/>
   <wangtile tileid="624" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="625" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="626" wangid="0,8,8,8,0,0,0,0"/>
   <wangtile tileid="627" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="628" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="629" wangid="0,8,8,8,0,0,0,0"/>
   <wangtile tileid="630" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="631" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="632" wangid="0,8,8,8,0,0,0,0"/>
   <wangtile tileid="633" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="634" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="635" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="636" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="637" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="638" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="639" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="640" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="641" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="642" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="643" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="644" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="645" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="646" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="647" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="648" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="649" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="650" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="651" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="652" wangid="0,8,8,8,8,8,8,0"/>
   <wangtile tileid="653" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="654" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="655" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="656" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="657" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="658" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="659" wangid="8,0,0,8,8,8,0,0"/>
   <wangtile tileid="660" wangid="8,8,8,8,8,8,0,0"/>
   <wangtile tileid="661" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="662" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="663" wangid="0,0,0,8,8,8,8,8"/>
   <wangtile tileid="664" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="665" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="666" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="667" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="668" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="669" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="670" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="671" wangid="8,8,8,0,8,8,8,0"/>
   <wangtile tileid="672" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="673" wangid="8,8,8,0,8,8,8,0"/>
   <wangtile tileid="674" wangid="8,0,8,8,8,0,0,0"/>
   <wangtile tileid="675" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="676" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="677" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="678" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="679" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="680" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="681" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="682" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="683" wangid="8,0,8,8,8,8,8,0"/>
   <wangtile tileid="684" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="685" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="686" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="687" wangid="0,8,8,8,8,8,8,0"/>
   <wangtile tileid="688" wangid="8,8,8,0,8,8,8,8"/>
   <wangtile tileid="689" wangid="8,0,0,0,8,0,0,8"/>
   <wangtile tileid="690" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="691" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="692" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="693" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="694" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="695" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="696" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="697" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="698" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="699" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="700" wangid="8,8,8,0,0,8,8,8"/>
   <wangtile tileid="701" wangid="8,8,8,8,0,8,8,8"/>
   <wangtile tileid="702" wangid="0,0,0,0,0,8,8,8"/>
   <wangtile tileid="703" wangid="1,0,0,0,0,0,0,0"/>
   <wangtile tileid="704" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="705" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="706" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="707" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="708" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="709" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="710" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="711" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="712" wangid="7,7,7,7,7,7,7,7"/>
   <wangtile tileid="713" wangid="0,0,7,7,7,7,7,0"/>
   <wangtile tileid="714" wangid="0,0,7,7,7,7,7,0"/>
   <wangtile tileid="715" wangid="5,5,5,5,5,5,5,5"/>
   <wangtile tileid="716" wangid="0,0,5,5,5,5,5,0"/>
   <wangtile tileid="717" wangid="0,0,5,5,5,5,5,0"/>
   <wangtile tileid="718" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="719" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="720" wangid="8,0,8,8,8,8,8,8"/>
   <wangtile tileid="721" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="722" wangid="0,8,8,8,8,8,0,0"/>
   <wangtile tileid="723" wangid="0,0,0,8,8,8,8,8"/>
   <wangtile tileid="724" wangid="8,0,0,0,8,0,0,0"/>
   <wangtile tileid="725" wangid="0,0,8,0,0,0,8,0"/>
   <wangtile tileid="726" wangid="8,8,0,0,8,0,0,0"/>
   <wangtile tileid="727" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="728" wangid="0,0,8,8,8,8,8,0"/>
   <wangtile tileid="729" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="730" wangid="8,8,8,8,8,8,8,0"/>
   <wangtile tileid="731" wangid="0,8,8,8,8,8,8,8"/>
   <wangtile tileid="732" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="733" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="734" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="735" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="736" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="737" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="738" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="739" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="740" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="741" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="742" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="743" wangid="0,0,0,8,8,8,0,0"/>
   <wangtile tileid="744" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="745" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="746" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="747" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="748" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="749" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="750" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="751" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="752" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="753" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="754" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="755" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="756" wangid="8,8,8,8,8,8,8,8"/>
   <wangtile tileid="757" wangid="8,8,8,8,8,8,8,8"/>
  </wangset>
 </wangsets>
</tileset>

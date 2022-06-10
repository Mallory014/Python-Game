"""
Arcade Platformer

Demonstrating the capabilities of arcade in a platformer game
Supporting the Arcade Platformer article on https://realpython.com

All game artwork from www.kenney.nl
Game sounds and tile maps by author
"""

from errno import ENAMETOOLONG
import arcade
import pathlib

from yaml import load
import constants as game
from datetime import datetime, timedelta

# Assets path
ASSETS_PATH = pathlib.Path(__file__).resolve().parent.parent / "assets"


class Enemy(arcade.AnimatedWalkingSprite):
    """An enemy sprite with basic walking movement"""

    def __init__(self, pos_x: int, pos_y: int, type: str) -> None:
        super().__init__(center_x=pos_x, center_y=pos_y)



        # Where are the player images stored?
        texture_path = ASSETS_PATH / "images" / "enemies"

        self.boundary_right = pos_x + 1000
        self.boundary_left = pos_x - 1000
 

        # Setup the appropriate textures
        if type == "slime":
            walking_texture_path = [
                texture_path / "slimePurple.png",
                texture_path / "slimePurple_move.png",
            ]
            standing_texture_path = texture_path / "slimePurple.png"
             

        elif type == "bee":
            walking_texture_path = [
                texture_path / "bee.png",
                texture_path / "bee_move.png",
            ]
            standing_texture_path = texture_path / "bee.png"

        elif type == "frog":
            walking_texture_path = [
                texture_path / "frog.png",
                texture_path / "frog_move.png",
            ]
            standing_texture_path = texture_path / "frog.png"

        elif type == "fish":
            walking_texture_path = [
                texture_path / "fishPink.png",
                texture_path / "fishPink_move.png",
            ]
            standing_texture_path = texture_path / "fishPink.png"

        elif type == "saw":
            walking_texture_path = [
                texture_path / "saw.png",
                texture_path / "saw_move.png",
            ]
            standing_texture_path = texture_path / "saw.png"

        elif type == "sawHalf":
            walking_texture_path = [
                texture_path / "sawHalf.png",
                texture_path / "sawHalf_move.png",
            ]
            standing_texture_path = texture_path / "sawHalf.png"

        elif type == "snakeLava":
            walking_texture_path = [
                texture_path / "snakeLava.png",
                texture_path / "snakeLava_ani.png",
            ]
        
            standing_texture_path = texture_path / "snakeLava.png"

        elif type == "ghost":
            walking_texture_path = [
                texture_path / "ghost.png",
                texture_path / "ghost.png",
            ]
            standing_texture_path = texture_path / "ghost.png"



        # Load them all now
        self.walk_left_textures = [
            arcade.load_texture(texture) for texture in walking_texture_path
        ]

        self.walk_right_textures = [
            arcade.load_texture(texture, mirrored=True)
            for texture in walking_texture_path
        ]

        self.stand_left_textures = [
            arcade.load_texture(standing_texture_path, mirrored=True)
        ]
        self.stand_right_textures = [
            arcade.load_texture(standing_texture_path)
        ]

        # Set the enemy defaults
        self.state = arcade.FACE_LEFT
        self.change_x = -game.PLAYER_MOVE_SPEED // 4

        # Set the initial texture
        self.texture = self.stand_right_textures[0]


# Title view
class TitleView(arcade.View):
    """Displays a title screen and prompts the user to begin the game.
    Provides a way to show instructions and start the game.
    """

    def __init__(self) -> None:
        super().__init__()

        # Find the title image in the images folder
        title_image_path = ASSETS_PATH / "images" / "title_image.png"

        # Load our title image
        self.title_image = arcade.load_texture(title_image_path)

        # Set our display timer
        self.display_timer = 3.0

        # Are we showing the instructions?
        self.show_instructions = False

    def on_update(self, delta_time: float) -> None:
        """Manages the timer to toggle the instructions

        Arguments:
            delta_time -- time passed since last update
        """

        # First, count down the time
        self.display_timer -= delta_time

        # If the timer has run out, we toggle the instructions
        if self.display_timer < 0:

            # Toggle whether to show the instructions
            self.show_instructions = not self.show_instructions

            # And reset the timer so the instructions flash slowly
            self.display_timer = 1.0

    def on_draw(self) -> None:
        # Start the rendering loop
        arcade.start_render()

        # Draw a rectangle filled with our title image
        arcade.draw_texture_rectangle(
            center_x=game.SCREEN_WIDTH / 2,
            center_y=game.SCREEN_HEIGHT / 2,
            width=game.SCREEN_WIDTH,
            height=game.SCREEN_HEIGHT,
            texture=self.title_image,
        )

        # Should we show our instructions?
        if self.show_instructions:
            arcade.draw_text(
                "Enter to Start | I for Instructions",
                start_x=100,
                start_y=220,
                color=arcade.color.INDIGO,
                font_size=40,
            )

    def on_key_press(self, key: int, modifiers: int) -> None:
        """Resume the game when the user presses ESC again

        Arguments:
            key -- Which key was pressed
            modifiers -- What modifiers were active
        """
        if key == arcade.key.RETURN:
            game_view = PlatformerView()
            game_view.setup()
            self.window.show_view(game_view)
        elif key == arcade.key.I:
            instructions_view = InstructionsView()
            self.window.show_view(instructions_view)


# Instructions view
class InstructionsView(arcade.View):
    """Show instructions to the player"""

    def __init__(self) -> None:
        """Create instructions screen"""
        super().__init__()

        # Find the instructions image in the image folder
        instructions_image_path = (
            ASSETS_PATH / "images" / "instructions_image.png"
        )

        # Load our title image
        self.instructions_image = arcade.load_texture(instructions_image_path)

    def on_draw(self) -> None:
        # Start the rendering loop
        arcade.start_render()

        # Draw a rectangle filled with the instructions image
        arcade.draw_texture_rectangle(
            center_x=game.SCREEN_WIDTH / 2,
            center_y=game.SCREEN_HEIGHT / 2,
            width=game.SCREEN_WIDTH,
            height=game.SCREEN_HEIGHT,
            texture=self.instructions_image,
        )

    def on_key_press(self, key: int, modifiers: int) -> None:
        """Start the game when the user presses Enter

        Arguments:
            key -- Which key was pressed
            modifiers -- What modifiers were active
        """
        if key == arcade.key.RETURN:
            game_view = PlatformerView()
            game_view.setup()
            self.window.show_view(game_view)

        elif key == arcade.key.ESCAPE:
            title_view = TitleView()
            self.window.show_view(title_view)


# Pause view, used when the player pauses the game
class PauseView(arcade.View):
    """Shown when the game is paused"""

    def __init__(self, game_view: arcade.View) -> None:
        """Create the pause screen"""
        # Initialize the parent
        super().__init__()

        # Store a reference to the underlying view
        self.game_view = game_view

        # Store a semi-transparent color to use as an overlay
        self.fill_color = arcade.make_transparent_color(
            arcade.color.WHITE, transparency=150
        )

    def on_draw(self) -> None:
        """Draw the underlying screen, blurred, then the Paused text"""

        # First, draw the underlying view
        # This also calls start_render(), so no need to do it again
        self.game_view.on_draw()

        # Now create a filled rect that covers the current viewport
        # We get the viewport size from the game view
        arcade.draw_lrtb_rectangle_filled(
            left=self.game_view.view_left,
            right=self.game_view.view_left + game.SCREEN_WIDTH,
            top=self.game_view.view_bottom + game.SCREEN_HEIGHT,
            bottom=self.game_view.view_bottom,
            color=self.fill_color,
        )

        # Now show the Pause text
        arcade.draw_text(
            "PAUSED - ESC TO CONTINUE",
            start_x=self.game_view.view_left + 180,
            start_y=self.game_view.view_bottom + 300,
            color=arcade.color.INDIGO,
            font_size=40,
        )

    def on_key_press(self, key: int, modifiers: int) -> None:
        """Resume the game when the user presses ESC again

        Arguments:
            key -- Which key was pressed
            modifiers -- What modifiers were active
        """
        if key == arcade.key.ESCAPE:
            self.window.show_view(self.game_view)


# Victory View, shown when the player completes a level successfully
class VictoryView(arcade.View):
    """Shown when a level is completed"""

    def __init__(
        self, game_view: arcade.View, victory_sound: arcade.Sound
    ) -> None:
        super().__init__()

        # Store a reference to the underlying view
        self.game_view = game_view

        # Play the victory sound
        arcade.play_sound(victory_sound)

        # Store a semi-transparent color to use as an overlay
        self.fill_color = arcade.make_transparent_color(
            arcade.color.WHITE, transparency=150
        )

    def on_draw(self) -> None:
        """Draw the underlying screen, blurred, then the victory text"""

        # First, draw the underlying view
        # This also calls start_render(), so no need to do it again
        self.game_view.on_draw()

        # Now create a filled rect that covers the current viewport
        # We get the viewport size from the game view
        arcade.draw_lrtb_rectangle_filled(
            left=self.game_view.view_left,
            right=self.game_view.view_left + game.SCREEN_WIDTH,
            top=self.game_view.view_bottom + game.SCREEN_HEIGHT,
            bottom=self.game_view.view_bottom,
            color=self.fill_color,
        )

        # Now show the victory text
        arcade.draw_text(
            "SUCCESS! Press Enter for next level...",
            start_x=self.game_view.view_left + 90,
            start_y=self.game_view.view_bottom + 300,
            color=arcade.color.INDIGO,
            font_size=40,
        )

    def on_key_press(self, key: int, modifiers: int) -> None:
        """Start the next level when the user presses Enter

        Arguments:
            key -- Which key was pressed
            modifiers -- What modifiers were active
        """
        if key == arcade.key.ENTER:
            self.game_view.level += 1
            self.game_view.setup()
            self.window.show_view(self.game_view)

class FinalVictoryView(arcade.View):
    """Shown when game is completed"""

    def __init__(
        self, game_view: arcade.View, victory_sound: arcade.Sound
    ) -> None:
        super().__init__()

        # Store a reference to the underlying view
        self.game_view = game_view

        # Play the victory sound
        arcade.play_sound(victory_sound)

        # Store a semi-transparent color to use as an overlay
        self.fill_color = arcade.make_transparent_color(
            arcade.color.WHITE, transparency=150
        )

    def on_draw(self) -> None:
        """Draw the underlying screen, blurred, then the victory text"""

        # First, draw the underlying view
        # This also calls start_render(), so no need to do it again
        self.game_view.on_draw()

        # Now create a filled rect that covers the current viewport
        # We get the viewport size from the game view
        arcade.draw_lrtb_rectangle_filled(
            left=self.game_view.view_left,
            right=self.game_view.view_left + game.SCREEN_WIDTH,
            top=self.game_view.view_bottom + game.SCREEN_HEIGHT,
            bottom=self.game_view.view_bottom,
            color=self.fill_color,
        )

        # Now show the victory text
        arcade.draw_text(
            "SUCCESS YOU COMPLETED",
            start_x=self.game_view.view_left + 90,
            start_y=self.game_view.view_bottom + 300,
            color=arcade.color.INDIGO,
            font_size=40,
        )
        arcade.draw_text(
            "THE GAME! Press ESC to exit",
            start_x=self.game_view.view_left + 90,
            start_y=self.game_view.view_bottom + 250,
            color=arcade.color.INDIGO,
            font_size=40,
        )
       
    def on_key_press(self, key: int, modifiers: int) -> None:
        """Start the next level when the user presses Enter

        Arguments:
            key -- Which key was pressed
            modifiers -- What modifiers were active
        """
        if key == arcade.key.ESCAPE:
            arcade.exit()


# Game Over View, shown when the game is over
class GameOverView(arcade.View):
    """Shown when the player loses the game"""

    def __init__(self, game_view: arcade.View) -> None:
        """Create the game over screen"""
        # Initialize the parent
        super().__init__()

        # Store a reference to the underlying view
        self.game_view = game_view

        # Store a semi-transparent color to use as an overlay
        self.fill_color = arcade.make_transparent_color(
            arcade.color.WHITE, transparency=150
        )

    def on_draw(self) -> None:
        """Draw the underlying screen, blurred, then the game over text"""

        # First, draw the underlying view
        # This also calls start_render(), so no need to do it again
        self.game_view.on_draw()

        # Now create a filled rect that covers the current viewport
        # We get the viewport size from the game view
        arcade.draw_lrtb_rectangle_filled(
            left=self.game_view.view_left,
            right=self.game_view.view_left + game.SCREEN_WIDTH,
            top=self.game_view.view_bottom + game.SCREEN_HEIGHT,
            bottom=self.game_view.view_bottom,
            color=self.fill_color,
        )

        # Now show the game over text
        arcade.draw_text(
            "Game Over!",
            start_x=self.game_view.view_left + 360,
            start_y=self.game_view.view_bottom + 330,
            color=arcade.color.INDIGO,
            font_size=40,
        )
        arcade.draw_text(
            "Enter to restart, ESC to exit",
            start_x=self.game_view.view_left + 190,
            start_y=self.game_view.view_bottom + 280,
            color=arcade.color.INDIGO,
            font_size=40,
        )

    def on_key_press(self, key: int, modifiers: int) -> None:
        """Restart the current level when the user presses Enter

        Arguments:
            key -- Which key was pressed
            modifiers -- What modifiers were active
        """
        if key == arcade.key.ENTER:
            # Reset the current level
            self.game_view.setup()
            self.window.show_view(self.game_view)
            self.game_view.health = 2.0
            self.game_view.health_bar = PlatformerView.get_hearts(self.game_view.health)

        elif key == arcade.key.ESCAPE:
            arcade.exit()


class PlatformerView(arcade.View):
    def __init__(self) -> None:
        super().__init__()

        # These lists will hold different sets of sprites
        self.player_list = arcade.SpriteList()
        self.coin_list = None
        self.wall_list = None
        self.ladder_list = None
        self.goal_list = None
        self.enemies = None
        self.background_list = None 
        self.health_list = None
        self.invincible_until = datetime.now() 
        self.health = 2.0

        self.health_bar = PlatformerView.get_hearts(self.health)


        # A Camera that can be used for scrolling the screen
        self.camera = None

        # A Camera that can be used to draw GUI elements
        self.gui_camera = None

        # Keep track of the score
        self.score = 0

        # One sprite for the player, no more is needed
        self.player = None

        # We need a physics engine as well
        self.physics_engine = None

        # Which level are we on?
        self.level = 1

        # Load up our sounds here
        self.coin_sound = arcade.load_sound(
            str(ASSETS_PATH / "sounds" / "coin.wav")
        )
        self.jump_sound = arcade.load_sound(
            str(ASSETS_PATH / "sounds" / "jump.wav")
        )
        self.victory_sound = arcade.load_sound(
            str(ASSETS_PATH / "sounds" / "victory.wav")
        )
        self.health_sound = arcade.load_sound(
            str(ASSETS_PATH / "sounds" / "confirmation_004.ogg")
        )

        # Track the bottom left corner of the current viewport
        self.view_left = 0
        self.view_bottom = 0

        # Check if a joystick is connected
        joysticks = arcade.get_joysticks()

        if joysticks:
            # If so, get the first one
            self.joystick = joysticks[0]
            self.joystick.open()
        else:
            # If not, flag it so we won't use it
            print("There are no Joysticks")
            self.joystick = None

        # Flag for entering view mode - allows super-user to skim around
        self.view_mode = False
        
        arcade.set_background_color(arcade.color.BLIZZARD_BLUE)


    def setup(self) -> None:
        """Sets up the game for the current level"""

        # Set up the Camera
        self.camera = arcade.Camera(game.SCREEN_WIDTH, game.SCREEN_HEIGHT)

         # Set up the GUI Camera
        self.gui_camera = arcade.Camera(game.SCREEN_WIDTH, game.SCREEN_HEIGHT)

        # Keep track of the score
        self.score = 0

        # Get the current map based on the level
        map_name = f"platform_level_{self.level:02}.tmj"
        map_path = ASSETS_PATH / map_name


        # Layer Options
        layer_options = {
            "Platforms": {"use_spatial_hash": True},
            "Coins": {"use_spatial_hash": True},
            "Ladders": {"use_spatial_hash": True},
            "Goals": {"use_spatial_hash": True},
            "Background": {"use_spatial_hash": True},
            "Health": {"use_spatial_hash": True},
        }


        # Load the current map
        self.tile_map = arcade.load_tilemap(map_path,layer_options=layer_options)

        # Load the layers
        self.wall_list = self.tile_map.sprite_lists["Platforms"]
        self.coin_list = self.tile_map.sprite_lists["Coins"]
        self.ladder_list = self.tile_map.sprite_lists["Ladders"]
        self.goal_list = self.tile_map.sprite_lists["Goals"]
        self.background_list = self.tile_map.sprite_lists["Background"]
        self.health_list = self.tile_map.sprite_lists["Health"]

        # Create the player sprite, if they're not already setup
        self.player = self.create_player_sprite(self.level)

        # Move the player sprite back to the beginning
        self.player.center_x = game.PLAYER_START_X
        self.player.center_y = game.PLAYER_START_Y
        self.player.change_x = 0
        self.player.change_y = 0

        # Setup our enemies
        self.enemies = self.create_enemy_sprites()
        

        # Reset the viewport
        self.view_left = 0
        self.view_bottom = 0

        # Load the physics engine for this map
        self.physics_engine = arcade.PhysicsEnginePlatformer(
            player_sprite=self.player,
            walls= self.wall_list,
            gravity_constant=game.GRAVITY,
            ladders=self.ladder_list,
            platforms=self.enemies
        )
    

    def create_enemy_sprites(self) -> arcade.SpriteList:
        """Creates enemy sprites appropriate for the current level

        Returns:
            A Sprite List of enemies"""
        enemies = arcade.SpriteList()

        # Only enemies on level 2
        if self.level == 1:
            enemies.append(Enemy(4200, 400, "bee"))
        elif self.level == 2:
            enemies.append(Enemy(1010, 320, "slime"))
            enemies.append(Enemy(2340, 50, "fish"))
            enemies.append(Enemy(6820, 50, "fish"))
            enemies.append(Enemy(8250, 400, "bee"))
            enemies.append(Enemy(8700, 70, "fish"))
            enemies.append(Enemy(14800, 200, "frog"))
            enemies.append(Enemy(19400, 450, "bee"))
            enemies.append(Enemy(30050, 580, "slime"))
            enemies.append(Enemy(12550, 70, "fish"))
        elif self.level == 3:  
            enemies.append(Enemy(2090, 200, "fish"))
            enemies.append(Enemy(4500, 200, "saw"))
            enemies.append(Enemy(8000, 190, "sawHalf"))
            enemies.append(Enemy(9050, 100, "snakeLava"))
        elif self.level == 4: 
            enemies.append(Enemy(3250, 50, "fish"))
            enemies.append(Enemy(10500, 130, "ghost"))
            enemies.append(Enemy(8300, 170, "fish"))
            enemies.append(Enemy(8900, 100, "fish"))


        return enemies

    def create_player_sprite(self, level) -> arcade.AnimatedWalkingSprite:
        # Where are the player images stored?
        texture_path = ASSETS_PATH / "images" / "player"

        # Setup the appropriate textures

        if level == 1 or level == 2 : 
            playerNumber = 1
            color = "Green"

        elif level == 3 : 
            playerNumber = 2
            color = "Blue"
    
        else :
            playerNumber = 3
            color = "Pink"
  

        walking_paths = [
            texture_path / f"p{playerNumber}_walk{x}.png" for x in range(1, 12)
        ]
        climbing_paths = [
            texture_path / f"alien{color}_climb{x}.png" for x in (1, 2)
        ]
        standing_path = texture_path / f"alien{color}_stand.png"

        # Load them all now
        walking_right_textures = [
            arcade.load_texture(texture) for texture in walking_paths
        ]
        walking_left_textures = [
            arcade.load_texture(texture, mirrored=True)
            for texture in walking_paths
        ]

        walking_up_textures = [
            arcade.load_texture(texture) for texture in climbing_paths
        ]
        walking_down_textures = [
            arcade.load_texture(texture) for texture in climbing_paths
        ]

        standing_right_textures = [arcade.load_texture(standing_path)]

        standing_left_textures = [
            arcade.load_texture(standing_path, mirrored=True)
        ]

        # Create the sprite
        player = arcade.AnimatedWalkingSprite()

        # Add the proper textures
        player.stand_left_textures = standing_left_textures
        player.stand_right_textures = standing_right_textures
        player.walk_left_textures = walking_left_textures
        player.walk_right_textures = walking_right_textures
        player.walk_up_textures = walking_up_textures
        player.walk_down_textures = walking_down_textures

        # Set the player defaults
        player.center_x = game.PLAYER_START_X
        player.center_y = game.PLAYER_START_Y
        player.state = arcade.FACE_RIGHT
        player.lives = game.PLAYER_LIVES

        # Set the initial texture
        player.texture = player.stand_right_textures[0]

        return player

    def on_key_press(self, key: int, modifiers: int) -> None:
        """Arguments:
        key -- Which key was pressed
        modifiers -- Which modifiers were down at the time
        """

        # Check for player left/right movement
        if key in [arcade.key.LEFT, arcade.key.J]:
            if self.view_mode:
                self.view_left -= 20
            else:
                self.player.change_x = -game.PLAYER_MOVE_SPEED
        elif key in [arcade.key.RIGHT, arcade.key.L]:
            if self.view_mode:
                self.view_left += 20
            else:
                self.player.change_x = game.PLAYER_MOVE_SPEED

        # Check if player can climb up or down
        elif key in [arcade.key.UP, arcade.key.I]:
            if self.view_mode:
                self.view_bottom += 20
            else:
                if self.physics_engine.is_on_ladder():
                    self.player.change_y = game.PLAYER_MOVE_SPEED
        elif key in [arcade.key.DOWN, arcade.key.K]:
            if self.view_mode:
                self.view_bottom -= 20
            else:
                if self.physics_engine.is_on_ladder():
                    self.player.change_y = -game.PLAYER_MOVE_SPEED

        # Check if we can jump
        elif key == arcade.key.SPACE:
            if self.physics_engine.can_jump():
                self.player.change_y = game.PLAYER_JUMP_SPEED
                # Play the jump sound
                arcade.play_sound(self.jump_sound)

        # Did the user want to pause?
        elif key == arcade.key.ESCAPE:
            # Pass the current view to preserve this view's state
            pause = PauseView(self)
            self.window.show_view(pause)

        # Shortcut to end the game
        elif key == arcade.key.Q:
            # Show the game over screen
            gameover = GameOverView(self)
            self.window.show_view(gameover)

        elif key == arcade.key.V:
            # Toggle view mode
            self.view_mode = not self.view_mode

            # Either save or restore the old view parameters
            if self.view_mode:
                # Just turned it on, save the view parameters
                self.save_view_bottom = self.view_bottom
                self.save_view_left = self.view_left
            else:
                self.view_bottom = self.save_view_bottom
                self.view_left = self.save_view_left

    def on_key_release(self, key: int, modifiers: int) -> None:
        """Arguments:
        key -- The key which was released
        modifiers -- Which modifiers were down at the time
        """

        # Check for player left/right movement
        if key in [
            arcade.key.LEFT,
            arcade.key.J,
            arcade.key.RIGHT,
            arcade.key.L,
        ]:
            self.player.change_x = 0

        # Check if player can climb up or down
        elif key in [
            arcade.key.UP,
            arcade.key.I,
            arcade.key.DOWN,
            arcade.key.K,
        ]:
            if self.physics_engine.is_on_ladder():
                self.player.change_y = 0

    def on_update(self, delta_time: float) -> None:
        """Updates the position of all screen objects

        Arguments:
            delta_time -- How much time since the last call
        """


        # Position the camera
        self.center_camera_to_player()


        if self.player.bottom < 0:
            game_over = GameOverView(self)

            self.window.show_view(game_over)


        # First, check for joystick movement
        if self.joystick:
            # Check if we're in the dead zone
            if abs(self.joystick.x) > game.DEAD_ZONE:
                self.player.change_x = self.joystick.x * game.PLAYER_MOVE_SPEED
            else:
                self.player.change_x = 0

            if abs(self.joystick.y) > game.DEAD_ZONE:
                if self.physics_engine.is_on_ladder():
                    self.player.change_y = (
                        self.joystick.y * game.PLAYER_MOVE_SPEED
                    )
                else:
                    self.player.change_y = 0

            # Did the user press the jump button?
            if self.joystick.buttons[0]:
                if self.physics_engine.can_jump():
                    self.player.change_y = game.PLAYER_JUMP_SPEED
                    # Play the jump sound
                    arcade.play_sound(self.jump_sound)

        # Update the player animation
        self.player.update_animation(delta_time)

        # Are there enemies? Update them as well
        self.enemies.update_animation(delta_time)
        for enemy in self.enemies:
            enemy.center_x += enemy.change_x
            walls_hit = arcade.check_for_collision_with_list(
                sprite=enemy, sprite_list=self.wall_list
            )
            if walls_hit:
                enemy.change_x *= -1

        # Update player movement based on the physics engine
        self.physics_engine.update()

        # Restrict user movement so they can't walk off screen
        if self.player.left < 0:
            self.player.left = 0

        # Check if we've picked up a coin
        coins_hit = arcade.check_for_collision_with_list(
            sprite=self.player, sprite_list=self.coin_list
        )

        for coin in coins_hit:
            # Add the coin score to our score
            self.score += int(coin.properties["point_value"])

            # Play the coin sound
            arcade.play_sound(self.coin_sound)

            # Remove the coin
            coin.remove_from_sprite_lists()
        hearts_hit = arcade.check_for_collision_with_list(self.player, self.health_list)

        for heart in hearts_hit:
            # Add the heart to our health
            self.health += float(heart.properties["health"])
            if self.health > 3:
                self.health = 3.0
            
            # Update hearts 
            self.health_bar = PlatformerView.get_hearts(self.health)
            
            # Play sound (change this to a new sound)
            arcade.play_sound(self.health_sound)
            
            # Remove the heart 
            heart.remove_from_sprite_lists()
            
        # Has Roz collided with an enemy?
        enemies_hit = arcade.check_for_collision_with_list(
            sprite=self.player, sprite_list=self.enemies
        )

        if enemies_hit and datetime.now() >= self.invincible_until:
            self.health = self.health - 0.5
            self.health_bar = PlatformerView.get_hearts(self.health)
            self.invincible_until = datetime.now() + timedelta(seconds=1)
            if self.health <= 0:
                game_over = GameOverView(self)
                self.window.show_view(game_over)

        # Now check if we're at the ending goal
        goals_hit = arcade.check_for_collision_with_list(
            sprite=self.player, sprite_list=self.goal_list
        )

        if goals_hit:
            # Switch to the victory view
            if self.level == 4: 
                victory_view = FinalVictoryView(self, self.victory_sound)
                self.window.show_view(victory_view)
            else:    
                victory_view = VictoryView(self, self.victory_sound)
                self.window.show_view(victory_view)

    def on_draw(self) -> None:
        arcade.start_render()

        # Activate our Camera
        self.camera.use()

        # Draw all the sprites
        self.background_list.draw()
        self.wall_list.draw()
        self.coin_list.draw()
        self.goal_list.draw()
        self.ladder_list.draw()
        self.enemies.draw()
        self.health_list.draw()
        self.player.draw()


        # Draw the score in the lower left
        score_text = f"Score: {self.score}"

        # Activate the GUI camera before drawing GUI elements
        self.gui_camera.use()

        # Draw our score on the screen, scrolling it with the viewport
        score_text = f"Score: {self.score}"
        arcade.draw_text(
            score_text,
            10,
            10,
            arcade.csscolor.WHITE,
            30,
            font_name= "broadway"
        )

        self.health_bar.draw()

    def center_camera_to_player(self):
            screen_center_x = self.player.center_x - (self.camera.viewport_width / 2)
            screen_center_y = self.player.center_y - (
                self.camera.viewport_height / 2
            )

            # Don't let camera travel past 0
            if screen_center_x < 0:
                screen_center_x = 0
            if screen_center_y < 0:
                screen_center_y = 0
            player_centered = screen_center_x, screen_center_y

            self.camera.move_to(player_centered)

    def get_hearts(number_of_hearts: float):	
        hearts = arcade.SpriteList()
        full_heart = str(ASSETS_PATH / "images" / "HUD" / "hudHeart_full.png")
        half_heart = str(ASSETS_PATH / "images" / "HUD" / "hudHeart_half.png")
        empty_heart = str(ASSETS_PATH / "images" / "HUD" / "hudHeart_empty.png")
        if number_of_hearts == .5 or number_of_hearts <= 0: 
            if number_of_hearts == 0: 
                hearts.append(arcade.Sprite(empty_heart, center_x=650, center_y=50))
            if number_of_hearts == .5: 
                hearts.append(arcade.Sprite(half_heart, center_x=650, center_y=50))
            hearts.append(arcade.Sprite(empty_heart, center_x=750, center_y=50))
            hearts.append(arcade.Sprite(empty_heart, center_x=850, center_y=50))
        elif number_of_hearts == 1 or number_of_hearts == 1.5: 	
            hearts.append(arcade.Sprite(full_heart, center_x=650, center_y=50))
            if number_of_hearts == 1: 
                hearts.append(arcade.Sprite(empty_heart, center_x=750, center_y=50))
            if number_of_hearts == 1.5: 
                hearts.append(arcade.Sprite(half_heart, center_x=750, center_y=50))
            hearts.append(arcade.Sprite(empty_heart, center_x=850, center_y=50))
        elif number_of_hearts == 2 or number_of_hearts == 2.5: 
            hearts.append(arcade.Sprite(full_heart, center_x=650, center_y=50))
            hearts.append(arcade.Sprite(full_heart, center_x=750, center_y=50))
            if number_of_hearts == 2: 
                hearts.append(arcade.Sprite(empty_heart, center_x=850, center_y=50))
            if number_of_hearts == 2.5: 
                hearts.append(arcade.Sprite(half_heart, center_x=850, center_y=50))
        else: 
            hearts.append(arcade.Sprite(full_heart, center_x=650, center_y=50))
            hearts.append(arcade.Sprite(full_heart, center_x=750, center_y=50))
            hearts.append(arcade.Sprite(full_heart, center_x=850, center_y=50))
        return hearts


if __name__ == "__main__":
    window = arcade.Window(
        width=game.SCREEN_WIDTH,
        height=game.SCREEN_HEIGHT,
        title=game.SCREEN_TITLE,
    )
    title_view = TitleView()
    window.show_view(title_view)
    arcade.run()

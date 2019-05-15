# Roadmap
So far, this project is coming alone quite nicely!  It still has a long ways to go before it can easily be integrated into A-Frame applications, but this document will serve as a guide as to what I'm working on right now, and upcoming plans.

## Existing features

### Components

#### Collectables

* The `collectable` series of components can be picked up by the user, sometimes put into an inventory, and otherwise can have other effects.  They are defined by the fact that they have dynamic bodies, and on collision with the user disappear.
Example:
```
<a-entity collectable="name: name in the inventory; description: description in the inventory; thumbnail: [url to thumbnail] dynamic-body/>
```
* All collectable components so far:
  * Collectable
    * The base component with a listener for collisions that will add the collided with item to the user's inventory
  * Currency
    * Has field `value` to determine how much the given entity is 'worth'. `value` should be a number.
  * Unlocks
    * Has field `unlocksEntity` that is a string which should be equal to the `id` of the element it unlocks.  Element it unlocks should have the `canBeUnlocked` component attached.
* All collectable primitives
  * `a-coin`
    ```
    <a-coin value=10/>
    ```
  * `a-key`
    ```
    <a-key unlocks="someUnlockableElementId"/>
    ```
* Planned collectable components + entities
  * Health items
  * More types of items to pick up as the framework is developed
  * Awards for completing quests
  * 'Usable' entities, which will go hand-in-hand with the inventory

#### Interactable

* The `interactable` series of components can be interacted with by the user, with interactions typically triggered by a `click` event.  There will be many of this type of component since there are many types of interactions, be it with NPCs, items in the world, or `chest` objects that store items and can be unlocked.
* These are not entirely defined yet, but will often trigger dialogues that are made from interactable HTML divs that take up part of the screen with text prompts.

* Planned interactive components:
  * canBeUnlocked
    * A component to be attached to items that keys can unlock.  The interaction will be composed of the user clicking an item, being prompted to select the corresponding key from their inventory, and either setting the item to an `unlocked` state if the key is the correct one, or remaining locked if the element that the key unlocks does not match the entity with this component attached.
  * interactable
    * The basic interactable component in which a click event triggers some kind of dialogue
* Planned interactive primitives:
  * `a-npc`
    * A character/object in the world which can be clicked for dialogue, questing, or really anything that can be 'spoken' to.  Will include sub-categories of entities for those with quests, those with basic dialogue, or those with prompts that the user must anser.
  * `a-chest`
    * A chest that contains inventory spaces that may contain items for the user when it is unlocked with the appropriate key.  Has the `canBeUnlocked` component attached.

#### Qualities

* All `quality` components will have side effects on objects that may affect how they appear to the world, or certain behaviors.

* Quality components so far:
  * spin
    * A component with one field, `speed` that determines how fast a given object rotates on it's x axis.  Mostly used to show if an item is collectable.

### The player

* The player class is injected into the window object so that the user of Questify can write their own functions to modify anything involving the `inventory` and other fields of the player, including their health and the amount of money that they have.

Fields:
  * `health` - a number 0-100, with 100 being full health, and 0 denoting death
  * `money` - any positive number that denotes how much money the user has
  * `inventory` - the player's current inventory, represented as an object that contains an array of all of it's inventory items.  The `DOM` can also be modified for the inventory through this object.
  * `hud` - the menu overlay, which currently only shows the player's money and health on the screen, but also makes it so the user cannot look around while the hud is open.

## Coming soon

* NPCs
* HTML Prompts for the user
* A defined Quest object, using JavaScript object OR JSON syntax, that will allow the user to define and customize quests in detail.  Will include dialogue for the quest, which NPC the quest is attached to, and many fields to denote what type of quest it is.  All quests will be an array in the `player` object so that they may be accessed at any time.
* Working chest primitive (it exists but is not fully there with the interaction)
* Interactables
* Better JSON parsing- currently only works within the build process
* An option to use HTML the way `a-frame` intended- will be parsed and looked at by the main script and still will have the proper fields added.  Allows the user to decide if they want a JSON scene or to write it themselves.
* A config file to set up defaults for the user's world.



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
  * Currency
  * Unlocks
* All collectable primitives
  * `a-coin`
    ```<a-coin value=10/>```
  * `a-key`
    ```<a-key unlocks="someUnlockableElementId"/>```
* Planned collectable components
  * 

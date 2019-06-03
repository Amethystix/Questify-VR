import Quest from '../../classes/quest/quest';
import QuestInstruction from '../../classes/quest/quest-instruction';
import Dialogue from '../../UI/dialogue';

const registerNPC = () => {
  AFRAME.registerComponent('npc', {
    schema: {
      name: { type: 'string', default: '' },
      questid: { type: 'string', default: '' }
    },
    init: function() {
      // Right now this is very hacky- I'm working on the questing structure but I need some hard coding for now
      this.number = 0;
      // this.quest = new Quest('Pie time!', 'Fetch Daisy two pieces of apple pie', 
      //   [
      //     new QuestInstruction({
      //       type: 3,
      //       description: 'Talk to Daisy',
      //       details: {
      //         startsQuest: true,
      //         afterComplete: {
      //           dialogue: [
      //             {
      //               text: `
      //                 <p>Welcome to the demo!  Thanks for being here, we're happy to welcome you into our
      //                 world!  My name is Daisy, and I need you to just do one little favor for me</p>`
      //             },
      //             {
      //               text:
      //                 `<p>This might sound silly, but I really could use some pie right now- I'm starved.  Unfortunately,
      //                 I don't really have use of these legs! (Thanks a lot Lauren!)</p>`
      //             },
      //             {
      //               text:
      //                 `<p>So if you could be my hero and fetch me 2 pieces of apple pie, I would be forever
      //                 indebted to you!</p>`
      //             }
      //           ]
      //         }
      //       }
      //     }),
      //     new QuestInstruction({
      //       type: 1,
      //       description: 'Get Daisy 2 pieces of pie',
      //       details: {
      //         fetch: 'Apple Pie',
      //         quantity: 2,
      //         beforeComplete: {
      //           dialogue: [{
      //             text:
      //               `<p>I don't see enough pieces of pie...get to work!</p>`
      //           }],
      //         },
      //         onComplete: {
      //           dialogue: [
      //             {
      //               text: `<p>My hero!  Thank you so much, I really needed this pie!  I have no
      //                 idea where you found the second piece, but...at this rate I don't even really care.
      //                  Please take this as a token of my gratitude.</p>`
      //             }
      //           ],
      //           actions: {
      //             reward: {
      //               type: 'money',
      //               amount: 50
      //             }
      //           }
      //         },
      //         afterComplete: {
      //           dialogue: [
      //             {
      //               text: `<p>So much pie! Thanks again!</p>`
      //             }
      //           ]
      //         }
      //       }
      //     })
      //   ])
      this.el.addEventListener('click', () => {
        if (this.number === 0) {
          const firstDialogue = new Dialogue([
            {
              text: `
                <p>Welcome to the demo!  Thanks for being here, we're happy to welcome you into our
                world!  My name is Daisy, and I need you to just do one little favor for me...</p>`
            },
            {
              text:
                `<p>This might sound silly, but I really could use some pie right now- I'm starved.  Unfortunately,
                I don't really have use of these legs!  There seems to be more than enough pie around here, and it kills me that
                I've just been staring at it all day.</p>`
            },
            {
              text:
                `<p>So if you could be my hero and fetch me 2 pieces of apple pie, I would be forever
                indebted to you!  You can for sure find some laying around, but I'm sure there's some more hidden away somewhere...</p>`
            }
          ]);
          firstDialogue.showDialogue();
          this.number++;
        } else if (this.number === 1) {
          if (window.player.inventory.getQuantityOf('Apple Pie') >= 2) {
            const secondDialogue = new Dialogue([
              {
                text: `<p>My hero!  Thank you so much, I really needed this pie!  I have no
                  idea where you found the second piece, but...at this rate I don't even really care.
                   Please take this as a token of my gratitude.</p>`
              }
            ]);
            secondDialogue.showDialogue();
            window.player.inventory.removeAmount('Apple Pie', 2);
            window.player.addMoney(50);
            this.number++;
          } else {
            const notDoneDialogue = new Dialogue(
              [{
                text:
                  `<p>I don't see enough pieces of pie...get to work!</p>`
              }]
            );
            notDoneDialogue.showDialogue();
          }
        } else if (this.number === 2) {
          const doneDialogue = new Dialogue([
            {
              text: `<p>So much pie! Thanks again!</p>`
            }
          ]);
          doneDialogue.showDialogue();
        }
      });
    }
  });
};

export default registerNPC;

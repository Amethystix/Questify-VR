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
                <p>Hey there! You must be the new kid in the office- welcome! My name's Bob, and I've got a job for you.</p>`
            },
            {
              text:
                `<p>I was in the middle of writing this story, but had to get my laptop repaired, so I saved my story on a flash drive. Now that I've you my computer back, I can't find the flash drive!</p>`
            },
            {
              text:
                `<p>I need you to find my flash drive and get my story back to me so that I can finish it.  You can use a computer that's laying around the office to get the story off of once you find the flash drive- I think I dropped it somewhere in the office.</p>`
            }
          ]);
          firstDialogue.showDialogue();
          this.number++;
        } else if (this.number === 1) {
          if (window.player.inventory.getQuantityOf('Unfinished Story') >= 1) {
            const secondDialogue = new Dialogue([
              {
                text: `<p>Ah, this is it!  Great job newbie- I think you're gonna fit in great around here. Here's your pay for this job.</p>`
              },
              {
                text: `<p>Just one last thing...a little question to make sure you know what you're getting into as a writer.</p>
                  <p>Fill in the blank- The ____ is mightier than the sword.</p>`,
                mc: {
                  responses: [
                    'Knife', 'Pen', 'Brain', 'Shield'
                  ],
                  correct: 'Pen',
                  wrongText: '<p>Not quite....try again.  The _____ is mightier than the sword.</p>'
                }
              },
              {
                text: `<p>Great! You're off to a great start- as my parting words to you, check out this TED talk about getting enough sleep- it's so important for your health..</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5MuIMqhT8DM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
              }
            ]);
            secondDialogue.showDialogue();
            window.player.inventory.removeAmount('Unfinished Story', 1);
            window.player.addMoney(50);
            this.number++;
          } else {
            const notDoneDialogue = new Dialogue(
              [{
                text:
                  `<p>It doesn't look like you've found the file yet- please do your best!  I put a lot of hours into that article.</p>`
              }]
            );
            notDoneDialogue.showDialogue();
          }
        } else if (this.number === 2) {
          const doneDialogue = new Dialogue([
            {
              text: `<p>I can't wait to see what you do next!</p>`
            }
          ]);
          doneDialogue.showDialogue();
        }
      });
    }
  });
};

export default registerNPC;

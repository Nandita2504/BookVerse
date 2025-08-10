import { Book } from '../types';

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 14.99,
    rating: 4.5,
    genre: "Fiction",
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    releaseDate: "2020-08-13",
    isFree: false,
    sampleChapters: [
      {
        id: "1-1",
        title: "Chapter 1: The Library",
        content: `Mrs. Elm made her first move. A knight hopping over the row of white pawns. 'When did you first realize you loved chess?' Nora asked her. Mrs. Elm smiled. The library was silent. The only sound was the soft thud of chess pieces and the whisper of falling snow against the windows.

        ![A vintage chess set on an antique table](https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        Nineteen years had passed since that snowy day. That day when Mrs. Elm had taught her to play chess. A month before the car crash that killed her father. Nine months before she began to learn the piano. The art of chess, she had told Nora, was knowing that sometimes the pieces sacrifice themselves for the good of the whole.

        ![A cozy library with endless rows of books](https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        And now, at midnight, in the dark of her living room, she reached for the bottle of antidepressants. She had thought about suicide before, but she had never made plans. She had simply let her sadness grow, untamed and overgrown like ivy, until it had crushed the life from her.

        ![A snow-covered window with a warm light inside](https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        But tonight was different. Tonight she had made her decision. She was going to end her life. And as she reached for those pills, she had no idea that in less than an hour she would be in a library unlike any other, where she would get the chance to undo her regrets and live the life she had always dreamed of.

        ![An old clock showing midnight](https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        The clock struck midnight, and somewhere in the distance, a bell began to toll.`
      }
    ]
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 0,
    rating: 4.7,
    genre: "Fiction",
    synopsis: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan. A masterpiece of the Jazz Age that explores themes of decadence, idealism, and excess.",
    releaseDate: "1925-04-10",
    isFree: true,
    sampleChapters: [
      {
        id: "2-1",
        title: "Chapter 1: The Beginning",
        content: `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'

        ![A grand mansion illuminated at dusk](https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.

        ![A glamorous 1920s style party](https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men.

        ![A classic vintage car from the 1920s](https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions.

        ![A sunset over Long Island Sound](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        Looking back now, I see that this has been a story about the West, after all—Tom and Gatsby, Daisy and Jordan and I, were all Westerners, and perhaps we possessed some deficiency in common which made us subtly unadaptable to Eastern life.`
      }
    ]
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: "https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 16.99,
    rating: 4.8,
    genre: "Fiction",
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish.",
    releaseDate: "2021-05-04",
    isFree: false,
    sampleChapters: [
      {
        id: "3-1",
        title: "Chapter 1: Consciousness",
        content: `What's two plus two? I know this one. I know I know this. Two plus two is... The answer is at the edge of my thoughts, but it just won't come to me.

        ![A futuristic space station orbiting Earth](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        My eyelids are heavy. So heavy. They must be held shut by lead weights. No, wait. That's not right. Lead is... a metal. Heavy metal. No, that's music. Why can't I think straight?

        ![Advanced medical equipment in a sterile room](https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        I force my eyes open. They're gummy and resist the movement. Everything is blurry. White shapes. Curved surfaces. My head hurts. No, "hurts" isn't right. "Hurts" is for stubbed toes and paper cuts. This is something else.

        ![A mysterious laboratory setup](https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        I'm in a bed. I think. It's all soft and comfy. There's a blanket over me. No, not a blanket. It's thin and crinkly. Like paper. But stronger. The walls are white and curved. Gentle curves. This is a place I've never been. And I don't know how I got here.

        ![A view of deep space filled with stars](https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        But that's not the strange part. The strange part is... I don't know where I've been before this either. I don't know anything. Who am I? What's my name? Why can't I remember?`
      }
    ]
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 0,
    rating: 4.9,
    genre: "Romance",
    synopsis: "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
    releaseDate: "1813-01-28",
    isFree: true,
    sampleChapters: [
      {
        id: "4-1",
        title: "Chapter 1",
        content: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

        ![A beautiful English countryside manor](https://images.unsplash.com/photo-1533835435075-b2a814b2ca3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

        ![A serene English countryside landscape](https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        "My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"

        ![A grand ballroom from the Regency era](https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        Mr. Bennet replied that he had not. "But it is," returned she; "for Mrs. Long has just been here, and she told me all about it." Mr. Bennet made no answer. "Do you not want to know who has taken it?" cried his wife impatiently.

        ![A traditional English garden in bloom](https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        "You want to tell me, and I have no objection to hearing it." This was invitation enough.`
      }
    ]
  },
  {
    id: "5",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 11.99,
    rating: 4.2,
    genre: "Mystery",
    synopsis: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum.",
    releaseDate: "2003-03-18",
    isFree: false,
    sampleChapters: [
      {
        id: "5-1",
        title: "Prologue",
        content: `Louvre Museum, Paris 10:46 PM. The renowned curator Jacques Saunière staggered through the vaulted archway of the museum's Grand Gallery.

        ![The majestic Louvre Museum at night](https://images.unsplash.com/photo-1499856871958-5b9357976b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        He lunged for the nearest painting he could see, a Caravaggio. Grabbing the gilded frame, the seventy-six-year-old man heaved the masterpiece toward himself until it tore from the wall and Saunière collapsed backward in a heap beneath the canvas.

        ![Ancient mysterious symbols and codes](https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        As he had anticipated, a thundering iron gate fell nearby, barricading the entrance to the suite. The parquet floor shook. Far off, an alarm began to ring.

        ![A dimly lit museum corridor](https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        The curator lay a moment, gasping for breath, taking stock. I am still alive. He crawled out from under the canvas and scanned the cavernous space for someplace to hide.

        ![An ancient religious artifact](https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        A voice spoke, chillingly close. "Do not move." On his hands and knees, the curator froze, turning his head slowly.`
      }
    ]
  },
  {
    id: "6",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 15.99,
    rating: 4.6,
    genre: "Science",
    synopsis: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores such profound questions as: How did the universe begin—and what made its start possible?",
    releaseDate: "1988-01-01",
    isFree: false,
    sampleChapters: [
      {
        id: "6-1",
        title: "Chapter 1: Our Picture of the Universe",
        content: `A well-known scientist once gave a public lecture on astronomy. He described how the earth orbits around the sun and how the sun, in turn, orbits around the center of a vast collection of stars called our galaxy.

        ![A stunning view of the Milky Way galaxy](https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        At the end of the lecture, a little old lady at the back of the room got up and said: "What you have told us is rubbish. The world is really a flat plate supported on the back of a giant tortoise." The scientist gave a superior smile before replying, "What is the tortoise standing on?"

        ![A powerful telescope pointed at the night sky](https://images.unsplash.com/photo-1567322329435-28658f2f4d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        "You're very clever, young man, very clever," said the old lady. "But it's turtles all the way down!" Most people would find the picture of our universe as an infinite tower of tortoises rather ridiculous, but why do we think we know better?

        ![A mesmerizing nebula in deep space](https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        What do we really know about the universe, and how do we know it? Where did the universe come from, and where is it going? Did the universe have a beginning, and if so, what happened before then?

        ![An observatory under the stars](https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

        These are questions that have intrigued humanity for millennia, and modern science is bringing us closer to answering them than ever before.`
      }
    ]
  }
];


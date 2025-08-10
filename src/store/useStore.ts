import { create } from 'zustand';
import type { Book, User, DiscussionGroup, Annotation, Comment, Discussion, Reply } from '../types';

const books: Book[] = [
  // Fiction Category
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
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
        content: "Mrs. Elm made her first move. A knight hopping over the row of white pawns. 'When did you first realize you loved chess?' Nora asked her. Mrs. Elm smiled. The library was silent. The only sound was the soft thud of chess pieces and the whisper of falling snow against the windows."
      }
    ]
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 0,
    rating: 4.7,
    genre: "Fiction",
    synopsis: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan. A masterpiece of the Jazz Age that explores themes of decadence, idealism, and excess.",
    releaseDate: "1925-04-10",
    isFree: true,
    sampleChapters: [
      {
        id: "2-1",
        title: "Chapter 1",
        content: "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'"
      }
    ]
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: "https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 16.99,
    rating: 4.8,
    genre: "Fiction",
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish.",
    releaseDate: "2021-05-04",
    isFree: false,
    sampleChapters: [
      {
        id: "3-1",
        title: "Chapter 1",
        content: "What's two plus two? I know this one. I know I know this. Two plus two is... The answer is at the edge of my thoughts, but it just won't come to me."
      }
    ]
  },

  // Romance Category
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
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
        content: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
      }
    ]
  },
  {
    id: "5",
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    coverUrl: "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 12.99,
    rating: 4.6,
    genre: "Romance",
    synopsis: "When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.",
    releaseDate: "2021-09-14",
    isFree: false,
    sampleChapters: [
      {
        id: "5-1",
        title: "Chapter 1",
        content: "There was a small but significant chance that Olive Smith had made a huge mistake. Giant. Astronomical. She hadn't done the math, but she was pretty sure that..."
      }
    ]
  },

  // Mystery Category
  {
    id: "6",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 11.99,
    rating: 4.2,
    genre: "Mystery",
    synopsis: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum.",
    releaseDate: "2003-03-18",
    isFree: false,
    sampleChapters: [
      {
        id: "6-1",
        title: "Prologue",
        content: "Louvre Museum, Paris 10:46 PM. The renowned curator Jacques Saunière staggered through the vaulted archway of the museum's Grand Gallery..."
      }
    ]
  },
  {
    id: "7",
    title: "Gone Girl",
    author: "Gillian Flynn",
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 13.99,
    rating: 4.4,
    genre: "Mystery",
    synopsis: "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne's fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick's clever and beautiful wife disappears.",
    releaseDate: "2012-06-05",
    isFree: false,
    sampleChapters: [
      {
        id: "7-1",
        title: "Chapter 1: Nick Dunne",
        content: "When I think of my wife, I always think of her head. The shape of it, to begin with..."
      }
    ]
  },

  // Science Category
  {
    id: "8",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 15.99,
    rating: 4.6,
    genre: "Science",
    synopsis: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores such profound questions as: How did the universe begin—and what made its start possible?",
    releaseDate: "1988-01-01",
    isFree: false,
    sampleChapters: [
      {
        id: "8-1",
        title: "Chapter 1: Our Picture of the Universe",
        content: "A well-known scientist once gave a public lecture on astronomy. He described how the earth orbits around the sun and how the sun, in turn, orbits around the center of a vast collection of stars called our galaxy..."
      }
    ]
  },
  {
    id: "9",
    title: "Cosmos",
    author: "Carl Sagan",
    coverUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200&q=80",
    price: 0,
    rating: 4.8,
    genre: "Science",
    synopsis: "Cosmos traces the origins of knowledge and the scientific method, mixing science and philosophy, and speculates about the future of science.",
    releaseDate: "1980-09-28",
    isFree: true,
    sampleChapters: [
      {
        id: "9-1",
        title: "Chapter 1: The Shores of the Cosmic Ocean",
        content: "The Cosmos is all that is or ever was or ever will be. Our contemplations of the Cosmos stir us..."
      }
    ]
  }
];

// Sample discussion groups
const discussionGroups: DiscussionGroup[] = [
  {
    id: "1",
    name: "The Midnight Library Book Club",
    bookId: "1",
    description: "A group to discuss Matt Haig's thought-provoking novel about choices and regrets.",
    createdBy: "1",
    createdAt: "2025-01-15T10:30:00Z",
    members: ["1", "2", "3"],
    discussions: [
      {
        id: "1-1",
        title: "What would your alternate lives look like?",
        content: "In the book, Nora gets to experience different versions of her life. If you had access to the Midnight Library, which alternate lives would you want to explore?",
        userId: "1",
        userName: "John Doe",
        createdAt: "2025-01-15T14:30:00Z",
        comments: [
          {
            id: "1-1-1",
            userId: "2",
            userName: "Jane Smith",
            text: "I'd definitely want to see a version where I pursued music professionally instead of giving it up in college.",
            createdAt: "2025-01-15T15:45:00Z",
            likes: 3,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Pride & Prejudice Analysis",
    bookId: "4",
    description: "A scholarly discussion of Jane Austen's masterpiece and its themes of social status and marriage.",
    createdBy: "2",
    createdAt: "2025-01-10T09:15:00Z",
    members: ["2", "4", "5"],
    discussions: [
      {
        id: "2-1",
        title: "Elizabeth's character development",
        content: "Let's discuss how Elizabeth Bennet's character evolves throughout the novel, particularly in relation to her prejudice against Darcy.",
        userId: "2",
        userName: "Jane Smith",
        createdAt: "2025-01-10T11:20:00Z",
        comments: []
      }
    ]
  },
  {
    id: "3",
    name: "Science Enthusiasts: Cosmos",
    bookId: "9",
    description: "Exploring Carl Sagan's influential work and its impact on our understanding of science and the universe.",
    createdBy: "3",
    createdAt: "2025-01-05T16:45:00Z",
    members: ["1", "3", "6"],
    discussions: [
      {
        id: "3-1",
        title: "Sagan's vision for humanity",
        content: "Carl Sagan had a unique vision for humanity's future in space. What aspects do you find most compelling or realistic?",
        userId: "3",
        userName: "Alex Johnson",
        createdAt: "2025-01-06T08:30:00Z",
        comments: []
      }
    ]
  }
];

interface Store {
  user: User | null;
  books: Book[];
  filteredBooks: Book[];
  discussionGroups: DiscussionGroup[];
  filters: {
    genre: string;
    priceRange: string;
    rating: number;
    sortBy: string;
  };
  setUser: (user: User | null) => void;
  setBooks: (books: Book[]) => void;
  updateFilters: (filters: Partial<Store['filters']>) => void;
  addToReadingList: (bookId: string) => void;
  
  // Community features
  getGroupsByUser: () => DiscussionGroup[];
  getGroupsByBook: (bookId: string) => DiscussionGroup[];
  createGroup: (name: string, bookId: string, description: string) => void;
  joinGroup: (groupId: string) => void;
  leaveGroup: (groupId: string) => void;
  createDiscussion: (groupId: string, title: string, content: string) => void;
  addComment: (groupId: string, discussionId: string, text: string) => void;
  addReply: (groupId: string, discussionId: string, commentId: string, text: string) => void;
  likeComment: (groupId: string, discussionId: string, commentId: string) => void;
  
  // Annotations
  addAnnotation: (bookId: string, chapterId: string, text: string, highlight: string, position: number, isPrivate: boolean) => void;
  getAnnotationsByBook: (bookId: string) => Annotation[];
  getPublicAnnotationsByBook: (bookId: string) => Annotation[];
  deleteAnnotation: (annotationId: string) => void;
}

export const useStore = create<Store>((set, get) => ({
  user: null,
  books: books,
  filteredBooks: books,
  discussionGroups: discussionGroups,
  filters: {
    genre: 'all',
    priceRange: 'all',
    rating: 0,
    sortBy: 'popularity',
  },
  setUser: (user) => set({ user }),
  setBooks: (books) => set({ books, filteredBooks: books }),
  updateFilters: (newFilters) =>
    set((state) => {
      const filters = { ...state.filters, ...newFilters };
      let filteredBooks = state.books;

      // Apply genre filter
      if (filters.genre !== 'all') {
        filteredBooks = filteredBooks.filter(
          book => book.genre.toLowerCase() === filters.genre
        );
      }

      // Apply price filter
      if (filters.priceRange === 'free') {
        filteredBooks = filteredBooks.filter(book => book.isFree);
      } else if (filters.priceRange === 'paid') {
        filteredBooks = filteredBooks.filter(book => !book.isFree);
      }

      // Apply rating filter
      if (filters.rating > 0) {
        filteredBooks = filteredBooks.filter(book => book.rating >= filters.rating);
      }

      return { filters, filteredBooks };
    }),
  addToReadingList: (bookId) =>
    set((state) => {
      if (!state.user) return state;
      return {
        user: {
          ...state.user,
          readingList: [...state.user.readingList, bookId],
        },
      };
    }),
    
  // Community features
  getGroupsByUser: () => {
    const { user, discussionGroups } = get();
    if (!user) return [];
    return discussionGroups.filter(group => group.members.includes(user.id));
  },
  
  getGroupsByBook: (bookId) => {
    const { discussionGroups } = get();
    return discussionGroups.filter(group => group.bookId === bookId);
  },
  
  createGroup: (name, bookId, description) => 
    set((state) => {
      if (!state.user) return state;
      
      const newGroup: DiscussionGroup = {
        id: Date.now().toString(),
        name,
        bookId,
        description,
        createdBy: state.user.id,
        createdAt: new Date().toISOString(),
        members: [state.user.id],
        discussions: []
      };
      
      return {
        discussionGroups: [...state.discussionGroups, newGroup],
        user: {
          ...state.user,
          groups: [...state.user.groups, newGroup.id]
        }
      };
    }),
    
  joinGroup: (groupId) =>
    set((state) => {
      if (!state.user) return state;
      
      const updatedGroups = state.discussionGroups.map(group => {
        if (group.id === groupId && !group.members.includes(state.user!.id)) {
          return {
            ...group,
            members: [...group.members, state.user!.id]
          };
        }
        return group;
      });
      
      return {
        discussionGroups: updatedGroups,
        user: {
          ...state.user,
          groups: [...state.user.groups, groupId]
        }
      };
    }),
    
  leaveGroup: (groupId) =>
    set((state) => {
      if (!state.user) return state;
      
      const updatedGroups = state.discussionGroups.map(group => {
        if (group.id === groupId) {
          return {
            ...group,
            members: group.members.filter(id => id !== state.user!.id)
          };
        }
        return group;
      });
      
      return {
        discussionGroups: updatedGroups,
        user: {
          ...state.user,
          groups: state.user.groups.filter(id => id !== groupId)
        }
      };
    }),
    
  createDiscussion: (groupId, title, content) =>
    set((state) => {
      if (!state.user) return state;
      
      const updatedGroups = state.discussionGroups.map(group => {
        if (group.id === groupId) {
          const newDiscussion: Discussion = {
            id: `${groupId}-${Date.now()}`,
            title,
            content,
            userId: state.user!.id,
            userName: state.user!.name,
            createdAt: new Date().toISOString(),
            comments: []
          };
          
          return {
            ...group,
            discussions: [...group.discussions, newDiscussion]
          };
        }
        return group;
      });
      
      return { discussionGroups: updatedGroups };
    }),
    
  addComment: (groupId, discussionId, text) =>
    set((state) => {
      if (!state.user) return state;
      
      const updatedGroups = state.discussionGroups.map(group => {
        if (group.id === groupId) {
          const updatedDiscussions = group.discussions.map(discussion => {
            if (discussion.id === discussionId) {
              const newComment: Comment = {
                id: `${discussionId}-${Date.now()}`,
                userId: state.user!.id,
                userName: state.user!.name,
                text,
                createdAt: new Date().toISOString(),
                likes: 0,
                replies: []
              };
              
              return {
                ...discussion,
                comments: [...discussion.comments, newComment]
              };
            }
            return discussion;
          });
          
          return {
            ...group,
            discussions: updatedDiscussions
          };
        }
        return group;
      });
      
      return { discussionGroups: updatedGroups };
    }),
    
  addReply: (groupId, discussionId, commentId, text) =>
    set((state) => {
      if (!state.user) return state;
      
      const updatedGroups = state.discussionGroups.map(group => {
        if (group.id === groupId) {
          const updatedDiscussions = group.discussions.map(discussion => {
            if (discussion.id === discussionId) {
              const updatedComments = discussion.comments.map(comment => {
                if (comment.id === commentId) {
                  const newReply: Reply = {
                    id: `${commentId}-${Date.now()}`,
                    userId: state.user!.id,
                    userName: state.user!.name,
                    text,
                    createdAt: new Date().toISOString(),
                    likes: 0
                  };
                  
                  return {
                    ...comment,
                    replies: [...comment.replies, newReply]
                  };
                }
                return comment;
              });
              
              return {
                ...discussion,
                comments: updatedComments
              };
            }
            return discussion;
          });
          
          return {
            ...group,
            discussions: updatedDiscussions
          };
        }
        return group;
      });
      
      return { discussionGroups: updatedGroups };
    }),
    
  likeComment: (groupId, discussionId, commentId) =>
    set((state) => {
      const updatedGroups = state.discussionGroups.map(group => {
        if (group.id === groupId) {
          const updatedDiscussions = group.discussions.map(discussion => {
            if (discussion.id === discussionId) {
              const updatedComments = discussion.comments.map(comment => {
                if (comment.id === commentId) {
                  return {
                    ...comment,
                    likes: comment.likes + 1
                  };
                }
                return comment;
              });
              
              return {
                ...discussion,
                comments: updatedComments
              };
            }
            return discussion;
          });
          
          return {
            ...group,
            discussions: updatedDiscussions
          };
        }
        return group;
      });
      
      return { discussionGroups: updatedGroups };
    }),
    
  // Annotations
  addAnnotation: (bookId, chapterId, text, highlight, position, isPrivate) =>
    set((state) => {
      if (!state.user) return state;
      
      const newAnnotation: Annotation = {
        id: Date.now().toString(),
        bookId,
        chapterId,
        text,
        highlight,
        position,
        createdAt: new Date().toISOString(),
        isPrivate
      };
      
      return {
        user: {
          ...state.user,
          annotations: [...state.user.annotations, newAnnotation]
        }
      };
    }),
    
  getAnnotationsByBook: (bookId) => {
    const { user } = get();
    if (!user) return [];
    return user.annotations.filter(annotation => annotation.bookId === bookId);
  },
    
  getPublicAnnotationsByBook: (bookId) => {
    const { user } = get();
    if (!user) return [];
    return user.annotations.filter(
      annotation => annotation.bookId === bookId && !annotation.isPrivate
    );
  },
    
  deleteAnnotation: (annotationId) =>
    set((state) => {
      if (!state.user) return state;
      
      return {
        user: {
          ...state.user,
          annotations: state.user.annotations.filter(
            annotation => annotation.id !== annotationId
          )
        }
      };
    })
}));
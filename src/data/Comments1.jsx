const comment1 = {
  status: "SUCCESS",
  time_stamp: "21-12-2024 10:55:20",
  objectList: [
    {
      id: 2,
      title: "aditya lohar",
      content: "testing blogs updated by aditya",
      createdAt: "2024-12-20T07:57:13.000+0000",
      updatedAt: "2024-12-20T07:57:13.000+0000",
      comments: [
        {
          id: 2,
          content: "commenting on blog 1",
          author: {
            id: 1,
            email: "adityalohar@gmail.com",
            password:
              "$2a$10$Wla81U3ZU43mQGTyI93edum2zjHVeZEEb5hCPmBhlLJ9X0I7xClje",
            username: "adityalohar",
            mobile: "8454090241",
            createdOn: "2024-12-20T13:24:03.000+0530",
            updatedOn: "2024-12-20T13:24:04.000+0530",
          },
          replies: [
            {
              id: 101,
              content: "This is a reply to comment 1 on blog 1.",
              author: {
                id: 2,
                email: "replyuser@gmail.com",
                username: "replyuser",
              },
              createdAt: "2024-12-20T12:00:00.000+0000",
              updatedAt: "2024-12-20T12:00:00.000+0000",
              isEdited: false,
              isDeleted: false,
            },
          ],
          likesCount: 0,
          likes: [],
          createdAt: "2024-12-20T09:44:07.000+0000",
          updatedAt: "2024-12-20T09:44:07.000+0000",
          isEdited: false,
          isDeleted: false,
        },
        {
          id: 3,
          content:
            "This is the second comment and I am commenting for better reach.",
          author: {
            id: 1,
            email: "adityalohar@gmail.com",
            password:
              "$2a$10$Wla81U3ZU43mQGTyI93edum2zjHVeZEEb5hCPmBhlLJ9X0I7xClje",
            username: "suryavikram",
            mobile: "8454090241",
            createdOn: "2024-12-20T13:24:03.000+0530",
            updatedOn: "2024-12-20T13:24:04.000+0530",
          },
          replies: [
            {
              id: 102,
              content: "Replying to the second comment.",
              author: {
                id: 3,
                email: "anotheruser@gmail.com",
                username: "anotheruser",
              },
              createdAt: "2024-12-20T16:00:00.000+0000",
              updatedAt: "2024-12-20T16:00:00.000+0000",
              isEdited: false,
              isDeleted: false,
            },
            {
              id: 103,
              content: "Adding another reply here.",
              author: {
                id: 4,
                email: "replyauthor@gmail.com",
                username: "replyauthor",
              },
              createdAt: "2024-12-20T16:30:00.000+0000",
              updatedAt: "2024-12-20T16:30:00.000+0000",
              isEdited: false,
              isDeleted: false,
            },
          ],
          likesCount: 0,
          likes: [],
          createdAt: "2024-12-20T15:15:57.000+0000",
          updatedAt: "2024-12-20T15:15:57.000+0000",
          isEdited: false,
          isDeleted: false,
        },
      ],
    },
    {
      id: 3,
      title: "surya vikram",
      content: "testing blogs 2",
      createdAt: "2024-12-20T09:41:06.000+0000",
      updatedAt: "2024-12-20T09:41:06.000+0000",
      comments: [
        {
          id: 4,
          content: "commenting on second blog",
          author: {
            id: 1,
            email: "adityalohar@gmail.com",
            password:
              "$2a$10$Wla81U3ZU43mQGTyI93edum2zjHVeZEEb5hCPmBhlLJ9X0I7xClje",
            username: "adityalohar",
            mobile: "8454090241",
            createdOn: "2024-12-20T13:24:03.000+0530",
            updatedOn: "2024-12-20T13:24:04.000+0530",
          },
          replies: [
            {
              id: 104,
              content: "Reply to the comment on blog 2.",
              author: {
                id: 5,
                email: "userfive@gmail.com",
                username: "userfive",
              },
              createdAt: "2024-12-20T19:00:00.000+0000",
              updatedAt: "2024-12-20T19:00:00.000+0000",
              isEdited: false,
              isDeleted: false,
            },
          ],
          likesCount: 0,
          likes: [],
          createdAt: "2024-12-20T18:34:30.000+0000",
          updatedAt: "2024-12-20T18:34:30.000+0000",
          isEdited: false,
          isDeleted: false,
        },
      ],
    },
  ],
};

export default comment1;

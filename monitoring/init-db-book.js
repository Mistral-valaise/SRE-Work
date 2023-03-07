db.createUser(
    {
        user: "testuser",
        pwd: "testpassword",
        roles: [
            {
                role: "readWrite",
                db: "testdb"
            }
        ]
    }
);

db.Books.insertMany([
  {
    Name: "Design Patterns",
    Price: 54.93,
    Category: "Computers",
    Author: "Ralph Johnson",
  },
  {
    Name: "Clean Code",
    Price: 43.15,
    Category: "Computers",
    Author: "Robert C. Martin",
  },
  {
    Name: "limitless",
    Price: 24.93,
    Category: "Computers",
    Author: "Ralph Johnson",
  },
  {
    Name: "SRE Engineering",
    Price: 432.15,
    Category: "Computers",
    Author: "Google Martin",
  },
  {
    Name: "Smal Simple Step",
    Price: 64.93,
    Category: "Live",
    Author: "Ralph Johnson",
  },
  {
    Name: "Death Note",
    Price: 43.15,
    Category: "Manga",
    Author: "Someone",
  },
]);
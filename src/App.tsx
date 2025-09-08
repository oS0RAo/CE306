import React from 'react';
import { UserProfileCard, type User } from "./components/UserProfileCard";

const users: User[] = [
  {
    id: 1,
    name: "Gordon Freeman",
    email: "freemanw@mesa.com",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4sXHhwgfHSS_oI3BZVU_afiiVpzDZMIJP-POkfqNnbvnhSYjIjIVhlrvBDuKIBA9wRc&usqp=CAU",
    isOnline: true,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "CSS", level: "Advanced" }
    ],
  },
  {
    id: 2,
    name: "Naked Snake",
    email: "bigboss@fox.com",
    avatarUrl: "https://pbs.twimg.com/media/GYdvJRGXsAArI46.jpg:large",
    isOnline: false,
    skills: [
      { name: "Project Management", level: "Advanced" },
      { name: "Construction", level: "Advanced" }
    ],
  },
  {
    id: 3,
    name: "Kiryu Kazuma",
    email: "kazuma@dojima.com",
    avatarUrl: "https://i.redd.it/yakuza-8-kiryu-is-my-favourite-design-and-im-tired-of-v0-f3dxlk887pjb1.jpg?width=1284&format=pjpg&auto=webp&s=d54e3a4aa136e397ea2cc81f93d90029aa931e4e",
    isOnline: true,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Construction", level: "Beginner" }
    ],
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@god.com",
    avatarUrl: "https://i.pinimg.com/474x/c3/6d/c2/c36dc259821d468ad9d842259e8b7513.jpg",
    isOnline: true,
    skills: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Node.js", level: "Advanced" }
    ],
  },
];

const App: React.FC = () => {
  const handleViewDetails = (userId: string | number) => {
    alert(`User ID: ${userId}`);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">User Profile Cards</h1>
      <div className="app-container">
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default App;
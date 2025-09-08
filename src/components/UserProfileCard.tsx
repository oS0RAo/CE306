import React from 'react';
import { SkillTag, type SkillLevel } from "./SkillTag";
import './UserProfileCard.css';

export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  isOnline: boolean;
  skills: { name: string; level?: SkillLevel }[];
}

interface UserProfileCardProps {
  user: User;
  onViewDetails: (userId: string | number) => void;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
  return (
    <div className="user-card">
      <div className="flex flex-col items-center">
        <div className="avatar-container">
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="avatar"
          />
          {user.isOnline && (
            <span className="status-dot"></span>
          )}
        </div>
        <h2 className="user-name">{user.name}</h2>
        <p className="user-email">{user.email}</p>
        <div className="skills-container">
          {user.skills.map((skill) => (
            <SkillTag key={skill.name} skill={skill} />
          ))}
        </div>
        <button
          onClick={() => onViewDetails(user.id)}
          className="view-details-button"
        >
          View Details
        </button>
      </div>
    </div>
  );
};